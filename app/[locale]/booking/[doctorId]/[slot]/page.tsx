'use client'

import { doctors } from '@/lib/data'
import { BookingForm } from '@/components/booking/booking-form'
import { DoctorDetails } from '@/components/booking/doctor-details'

export default function BookingPage({
    params,
}: {
    params: { doctorId: string; slot: string }
}) {
    const doctor = doctors.find((d) => d.id === parseInt(params.doctorId))

    if (!doctor) {
        return (
            <main className="flex-1 bg-gray-50 p-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Doctor Not Found
                    </h1>
                    <p className="text-gray-600">
                        The requested doctor profile could not be found.
                    </p>
                </div>
            </main>
        )
    }

    return (
        <main className="flex-1 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-[1fr,1fr] gap-8">
                    <DoctorDetails doctor={doctor} selectedSlot={params.slot} />
                    <BookingForm
                        doctorId={params.doctorId}
                        slot={params.slot}
                    />
                </div>
            </div>
        </main>
    )
}
