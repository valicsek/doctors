"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { addDays, format, startOfWeek } from "date-fns";
import { useRouter } from "next/navigation";

export interface TimeSlot {
  time: string;
  isBooked: boolean;
}

export interface DaySchedule {
  day: string;
  slots: TimeSlot[];
}

interface DoctorScheduleProps {
  schedule: DaySchedule[];
  className?: string;
  doctorId: number;
}

export function DoctorSchedule({ schedule, className, doctorId }: DoctorScheduleProps) {
  const router = useRouter();
  const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }));

  const navigateWeek = (direction: 'prev' | 'next') => {
    setCurrentWeekStart(prevDate => {
      const days = direction === 'prev' ? -7 : 7;
      return addDays(prevDate, days);
    });
  };

  const handleSlotClick = (day: string, slot: TimeSlot) => {
    if (!slot.isBooked) {
      const dateStr = `${day}, ${slot.time}`;
      router.push(`/booking/${doctorId}/${encodeURIComponent(dateStr)}`);
    }
  };

  // Generate week range string (e.g., "Nov 5 - Nov 12")
  const weekEndDate = addDays(currentWeekStart, 4); // Show only work days (Mon-Fri)
  const weekRangeText = `${format(currentWeekStart, 'MMM d')} - ${format(weekEndDate, 'MMM d')}`;

  return (
    <div className={cn("text-sm", className)}>
      {/* Week Navigation */}
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

      {/* Schedule Grid */}
      <div className="grid grid-cols-5 gap-4">
        {schedule.map((day) => {
          const availableSlots = day.slots.filter(slot => !slot.isBooked);
          
          return (
            <div key={day.day} className="space-y-3">
              <div className="font-medium text-center text-gray-700">
                {day.day}
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
                    No available slots
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}