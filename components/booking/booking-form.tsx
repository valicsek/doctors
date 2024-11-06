"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { AlertCircle } from "lucide-react";

interface BookingFormData {
  email: string;
  phone: string;
  lastName: string;
  firstName: string;
  notes: string;
  acceptTerms: boolean;
}

interface BookingFormProps {
  doctorId: string;
  slot: string;
}

export function BookingForm({ doctorId, slot }: BookingFormProps) {
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;
  
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<BookingFormData>({
    email: "",
    phone: "",
    lastName: "",
    firstName: "",
    notes: "",
    acceptTerms: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Here you would typically make an API call to save the booking
      console.log("Booking submitted:", { ...formData, doctorId, slot });
      router.push(`/${locale}/booking/success`);
    } catch (err) {
      setError("An error occurred while submitting your booking. Please try again.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Book Appointment</h2>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-md flex items-center gap-2">
          <AlertCircle className="h-5 w-5" />
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              required
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Notes for the doctor (optional)
          </label>
          <textarea
            rows={4}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            placeholder="Describe your symptoms or reason for visit..."
          />
        </div>

        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              required
              checked={formData.acceptTerms}
              onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
              className="rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span className="text-sm text-gray-600">
              I agree to the terms of service and privacy policy
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}