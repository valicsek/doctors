import { Metadata } from 'next';
import { DoctorList } from '@/components/doctor-list';
import { capitalize } from '@/lib/utils';

interface SpecialtyPageProps {
  params: {
    specialty: string;
  };
}

// This is required for static site generation with `output: export`
export function generateStaticParams() {
  // Include all specialties from our doctors list to ensure all possible routes are generated
  const specialties = [
    "cardiologist",
    "dermatologist",
    "neurologist",
    "ophthalmologist",
    "orthopedist",
    "pediatrician",
    "psychiatrist",
    "urologist",
    "dermatology",
    "neurology",
    "ophthalmology",
    "orthopedics",
    "pediatrics",
    "psychiatry",
    "urology"
  ];

  return specialties.map((specialty) => ({
    specialty: specialty.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: SpecialtyPageProps): Promise<Metadata> {
  const specialty = capitalize(params.specialty);
  return {
    title: `${specialty} Doctors | DoctorFinder`,
    description: `Find qualified ${specialty.toLowerCase()} doctors in your area. Browse through our network of healthcare professionals.`,
  };
}

export default function SpecialtyPage({ params }: SpecialtyPageProps) {
  // Normalize specialty names (handle both forms: with -ist and without)
  const normalizeSpecialty = (specialty: string) => {
    const specialtyMap: { [key: string]: string } = {
      cardiology: "Cardiologist",
      dermatology: "Dermatologist",
      neurology: "Neurologist",
      ophthalmology: "Ophthalmologist",
      orthopedics: "Orthopedist",
      pediatrics: "Pediatrician",
      psychiatry: "Psychiatrist",
      urology: "Urologist",
    };

    const normalized = specialtyMap[specialty.toLowerCase()] || capitalize(specialty);
    return normalized;
  };

  const specialty = normalizeSpecialty(params.specialty);
  
  return (
    <main className="flex-1 bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{specialty} Doctors</h1>
          <p className="text-muted-foreground">
            Find the best {specialty.toLowerCase()} doctors in your area
          </p>
        </div>

        <DoctorList specialty={specialty} />
      </div>
    </main>
  );
}