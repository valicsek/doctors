"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface BookingFormData {
  email: string;
  phone: string;
  lastName: string;
  firstName: string;
  city: string;
  password: string;
  acceptTerms: boolean;
  acceptMarketing: boolean;
}

interface BookingFormProps {
  doctorId: string;
  slot: string;
}

export function BookingForm({ doctorId, slot }: BookingFormProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>({
    email: "",
    phone: "",
    lastName: "",
    firstName: "",
    city: "",
    password: "",
    acceptTerms: false,
    acceptMarketing: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Here you would typically make an API call to save the booking
      console.log("Booking submitted:", { ...formData, doctorId, slot });
      router.push("/booking/success");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center text-primary">
              <CheckCircle2 className="h-6 w-6 fill-current" />
              <span className="ml-2 font-medium">Doctor selection</span>
            </div>
            <div className="w-24 h-1 mx-4 bg-primary"></div>
          </div>

          <div className="flex items-center">
            <div className={`flex items-center ${step >= 2 ? "text-primary" : "text-gray-400"}`}>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                ${step >= 2 ? "border-primary" : "border-gray-400"}`}>
                2
              </div>
              <span className="ml-2 font-medium">Personal details</span>
            </div>
            <div className={`w-24 h-1 mx-4 ${step >= 3 ? "bg-primary" : "bg-gray-200"}`}></div>
          </div>

          <div className={`flex items-center ${step >= 3 ? "text-primary" : "text-gray-400"}`}>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
              ${step >= 3 ? "border-primary" : "border-gray-400"}`}>
              3
            </div>
            <span className="ml-2 font-medium">Confirmation</span>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <>
              <h2 className="text-2xl font-semibold mb-6">Selected Appointment</h2>
              <div className="flex items-start gap-6 p-4 bg-gray-50 rounded-lg">
                <div className="relative w-32 h-32 flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
                    alt="Doctor"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Dr. Nagy János</h3>
                  <p className="text-gray-600">Cardiologist</p>
                  <div className="mt-4">
                    <p className="font-medium">Appointment time:</p>
                    <p className="text-gray-600">{decodeURIComponent(slot)}</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-2xl font-semibold mb-6">Personal Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border rounded-md"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-3 py-2 border rounded-md"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border rounded-md"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border rounded-md"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-2xl font-semibold mb-6">Confirm Booking</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="h-4 w-4 text-primary border-gray-300 rounded"
                    checked={formData.acceptTerms}
                    onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                    I accept the terms and conditions
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="marketing"
                    className="h-4 w-4 text-primary border-gray-300 rounded"
                    checked={formData.acceptMarketing}
                    onChange={(e) => setFormData({ ...formData, acceptMarketing: e.target.checked })}
                  />
                  <label htmlFor="marketing" className="ml-2 block text-sm text-gray-900">
                    I would like to receive marketing communications
                  </label>
                </div>
              </div>
            </>
          )}

          <div className="flex justify-between pt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="ml-auto px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              {step === 3 ? "Confirm Booking" : "Continue"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}