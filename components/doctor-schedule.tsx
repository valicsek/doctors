"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { addDays, format, isSameDay, startOfWeek } from "date-fns";
import { useRouter, useParams } from "next/navigation";
import { hu } from "date-fns/locale";

export interface TimeSlot {
  time: string;
  isBooked: boolean;
}

export interface DaySchedule {
  day: string;
  slots: TimeSlot[];
}

const dayToNumber: { [key: string]: number } = {
  'Monday': 0,
  'Tuesday': 1,
  'Wednesday': 2,
  'Thursday': 3,
  'Friday': 4,
};

interface DoctorScheduleProps {
  schedule: DaySchedule[];
  className?: string;
  doctorId: number;
}

export function DoctorSchedule({ schedule, className, doctorId }: DoctorScheduleProps) {
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;
  const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }));
  const [selectedDate, setSelectedDate] = useState(new Date());

  const navigateWeek = (direction: 'prev' | 'next') => {
    setCurrentWeekStart(prevDate => {
      const days = direction === 'prev' ? -7 : 7;
      return addDays(prevDate, days);
    });
  };

  const handleSlotClick = (day: string, slot: TimeSlot) => {
    if (!slot.isBooked) {
      const dateStr = `${day}, ${slot.time}`;
      router.push(`/${locale}/booking/${doctorId}/${encodeURIComponent(dateStr)}`);
    }
  };

  const findNextAvailableDay = () => {
    let currentDay = addDays(selectedDate, 1);
    let found = false;
    let attempts = 14; // Look ahead maximum 2 weeks

    while (!found && attempts > 0) {
      const daySchedule = schedule.find(d => 
        d.day === format(currentDay, 'EEEE', { locale: hu })
      );
      
      if (daySchedule && daySchedule.slots.some(slot => !slot.isBooked)) {
        found = true;
        setSelectedDate(currentDay);
      } else {
        currentDay = addDays(currentDay, 1);
        attempts--;
      }
    }
  };

  // Generate week range string (e.g., "Nov 5 - Nov 12")
  const weekEndDate = addDays(currentWeekStart, 4); // Show only work days (Mon-Fri)
  const weekRangeText = `${format(currentWeekStart, 'MMM d')} - ${format(weekEndDate, 'MMM d')}`;

  // Get available slots for the selected date
  const selectedDaySchedule = schedule.find(d => 
    d.day === format(selectedDate, 'EEEE')
  );
  const availableSlots = selectedDaySchedule?.slots.filter(slot => !slot.isBooked) || [];

  return (
    <div className={cn("text-sm", className)}>
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setSelectedDate(prev => addDays(prev, -1))}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          
          <div className="font-medium text-gray-700">
            {format(selectedDate, 'yyyy. MMMM d.', { locale: hu })}
          </div>
          
          <button
            onClick={() => setSelectedDate(prev => addDays(prev, 1))}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {availableSlots.length > 0 ? (
          <div className="flex gap-2 overflow-x-auto pb-2">
            {availableSlots.map((slot, index) => (
              <button
                key={index}
                onClick={() => handleSlotClick(selectedDaySchedule!.day, slot)}
                className="px-4 py-2 bg-green-100 text-green-800 rounded-md whitespace-nowrap hover:bg-green-200 transition-colors"
              >
                {slot.time}
              </button>
            ))}
          </div>
        ) : (
          <button
            onClick={findNextAvailableDay}
            className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Következő szabad időpont
          </button>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigateWeek('prev')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Previous week"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          
          <div className="font-medium text-gray-700">
            {weekRangeText}
          </div>
          
          <button
            onClick={() => navigateWeek('next')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Next week"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {schedule.map((day) => {
            const availableSlots = day.slots.filter(slot => !slot.isBooked);
            const dayOffset = dayToNumber[day.day];
            const dayDate = addDays(currentWeekStart, dayOffset);
            
            return (
              <div key={day.day} className="space-y-3">
                <div className="font-medium text-center text-gray-700">
                  {format(dayDate, 'MMM d', { locale: hu })}
                  <div className="text-sm text-gray-500">{day.day}</div>
                </div>
                <div className="space-y-2">
                  {availableSlots.map((slot, index) => (
                    <div
                      key={index}
                      onClick={() => handleSlotClick(day.day, slot)}
                      className="px-3 py-2 bg-green-100 text-green-800 rounded-md text-center hover:bg-green-200 transition-colors cursor-pointer"
                    >
                      {slot.time}
                    </div>
                  ))}
                  {availableSlots.length === 0 && (
                    <div className="px-3 py-2 text-gray-500 text-center text-sm italic">
                      Nincs szabad időpont
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}