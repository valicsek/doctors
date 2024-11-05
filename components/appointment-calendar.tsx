"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { addDays, format, parseISO, set } from "date-fns";

interface Appointment {
  id: string;
  startTime: string;
  endTime: string;
  patientName?: string;
}

interface TimeSlot {
  startTime: string;
  endTime: string;
  available: boolean;
}

// Mock data - in real app this would come from API
const appointments: Record<string, Appointment[]> = {
  "2024-03-25": [
    { id: "1", startTime: "09:00", endTime: "10:00", patientName: "John Doe" },
    { id: "2", startTime: "14:00", endTime: "15:00" },
  ],
  "2024-03-26": [
    { id: "3", startTime: "11:00", endTime: "12:00" },
    { id: "4", startTime: "15:00", endTime: "16:00", patientName: "Jane Smith" },
  ],
};

interface AppointmentCalendarProps {
  doctorId: number;
  doctorName: string;
}

export function AppointmentCalendar({ doctorId, doctorName }: AppointmentCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot>();
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const generateTimeSlots = (date: Date): TimeSlot[] => {
    const dateStr = format(date, "yyyy-MM-dd");
    const existingAppointments = appointments[dateStr] || [];
    
    const slots: TimeSlot[] = [];
    const startHour = 9; // 9 AM
    const endHour = 17; // 5 PM

    for (let hour = startHour; hour < endHour; hour++) {
      const startTime = `${hour.toString().padStart(2, "0")}:00`;
      const endTime = `${(hour + 1).toString().padStart(2, "0")}:00`;
      
      const isBooked = existingAppointments.some(
        apt => apt.startTime === startTime && apt.patientName
      );

      slots.push({
        startTime,
        endTime,
        available: !isBooked,
      });
    }

    return slots;
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const handleSlotSelect = (slot: TimeSlot) => {
    if (slot.available) {
      setSelectedSlot(slot);
      setShowBookingDialog(true);
    }
  };

  const handleBookingSubmit = () => {
    // Here you would typically make an API call to save the appointment
    console.log("Booking submitted:", {
      doctorId,
      date: selectedDate,
      slot: selectedSlot,
      ...bookingData,
    });
    
    setShowBookingDialog(false);
    setSelectedSlot(undefined);
    setBookingData({
      name: "",
      email: "",
      phone: "",
      notes: "",
    });
  };

  return (
    <div className="grid gap-8 md:grid-cols-[auto,1fr]">
      <div>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          className="rounded-md border"
          disabled={(date) => 
            date < new Date() || // Past dates
            date.getDay() === 0 || // Sundays
            date.getDay() === 6 // Saturdays
          }
        />
      </div>

      <div className="min-h-[400px] rounded-lg border p-4">
        {selectedDate ? (
          <div className="space-y-4">
            <h3 className="font-medium">
              Available slots for {format(selectedDate, "MMMM d, yyyy")}
            </h3>
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              {generateTimeSlots(selectedDate).map((slot, index) => (
                <Button
                  key={index}
                  variant={slot.available ? "outline" : "ghost"}
                  className={`w-full justify-start ${
                    !slot.available && "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={() => handleSlotSelect(slot)}
                  disabled={!slot.available}
                >
                  {slot.startTime} - {slot.endTime}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            Please select a date to view available slots
          </div>
        )}
      </div>

      <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Book Appointment</DialogTitle>
            <DialogDescription>
              {selectedDate && selectedSlot
                ? `Book appointment with ${doctorName} on ${format(
                    selectedDate,
                    "MMMM d, yyyy"
                  )} at ${selectedSlot.startTime}`
                : ""}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={bookingData.name}
                onChange={(e) =>
                  setBookingData({ ...bookingData, name: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={bookingData.email}
                onChange={(e) =>
                  setBookingData({ ...bookingData, email: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={bookingData.phone}
                onChange={(e) =>
                  setBookingData({ ...bookingData, phone: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                value={bookingData.notes}
                onChange={(e) =>
                  setBookingData({ ...bookingData, notes: e.target.value })
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={handleBookingSubmit}
              disabled={!bookingData.name || !bookingData.email || !bookingData.phone}
            >
              Confirm Booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}