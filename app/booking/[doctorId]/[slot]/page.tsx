import { BookingForm } from "@/components/booking/booking-form";

// This is required for static site generation with `output: export`
export function generateStaticParams() {
  const doctors = [1, 2, 3, 4]; // IDs from our doctor list
  const slots = [
    "Monday, 09:00",
    "Monday, 10:00",
    "Monday, 11:00",
    "Monday, 14:00",
    "Monday, 15:00",
    "Tuesday, 09:00",
    "Tuesday, 10:00",
    "Tuesday, 11:00",
    "Tuesday, 14:00",
    "Tuesday, 15:00",
    "Wednesday, 09:00",
    "Wednesday, 10:00",
    "Wednesday, 11:00",
    "Wednesday, 14:00",
    "Wednesday, 15:00",
    "Thursday, 09:00",
    "Thursday, 10:00",
    "Thursday, 11:00",
    "Thursday, 14:00",
    "Thursday, 15:00",
    "Friday, 09:00",
    "Friday, 10:00",
    "Friday, 11:00",
    "Friday, 14:00",
    "Friday, 15:00",
  ];

  return doctors.flatMap(doctorId => 
    slots.map(slot => ({
      doctorId: doctorId.toString(),
      slot: encodeURIComponent(slot)
    }))
  );
}

export default function BookingPage({
  params,
}: {
  params: { doctorId: string; slot: string };
}) {
  return (
    <main className="flex-1 bg-gray-50">
      <BookingForm doctorId={params.doctorId} slot={params.slot} />
    </main>
  );
}