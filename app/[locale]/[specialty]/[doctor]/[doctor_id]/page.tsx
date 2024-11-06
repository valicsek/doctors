import { Metadata } from "next";
import { DoctorProfile } from "@/components/doctor-profile";
import { slugify } from "@/lib/utils";
import { doctors } from "@/lib/data";

interface DoctorPageProps {
  params: {
    specialty: string;
    doctor: string;
    doctor_id: string;
  };
}

export function generateStaticParams() {
  return doctors.map((doctor) => ({
    specialty: slugify(doctor.specialty),
    doctor: slugify(doctor.name),
    doctor_id: doctor.id.toString(),
  }));
}

export async function generateMetadata({ params }: DoctorPageProps): Promise<Metadata> {
  const doctorId = parseInt(params.doctor_id);
  const doctor = doctors.find((d) => d.id === doctorId);

  if (!doctor) {
    return {
      title: "Doctor Not Found",
      description: "The requested doctor profile could not be found.",
    };
  }

  return {
    title: `${doctor.name} - ${doctor.specialty} | DoctorFinder`,
    description: `Book an appointment with ${doctor.name}, ${doctor.specialty.toLowerCase()} in ${doctor.city}. Languages: ${doctor.languages.join(", ")}`,
  };
}

export default function DoctorPage({ params }: DoctorPageProps) {
  const doctorId = parseInt(params.doctor_id);
  const doctor = doctors.find((d) => d.id === doctorId);

  if (!doctor) {
    return (
      <main className="flex-1 bg-gray-50 p-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Doctor Not Found</h1>
          <p className="text-gray-600">The requested doctor profile could not be found.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-gradient-to-b from-blue-50 to-white">
      <DoctorProfile doctor={doctor} />
    </main>
  );
}
