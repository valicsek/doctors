'use client'

import { useState } from 'react'
import { Check, AlertCircle, Calendar, Users, UserCircle } from 'lucide-react'

export default function ForDoctorsPage() {
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Here you would typically make an API call to submit the form
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <main className="flex-1 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 py-16">
                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check className="w-8 h-8 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">
                            Application Submitted!
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Thank you for your interest in joining Doktorio.com.
                            We will review your application and contact you
                            within 2-3 business days.
                        </p>
                        <a
                            href="/"
                            className="inline-block px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                        >
                            Return to Home
                        </a>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main className="flex-1 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column - Benefits */}
                    <div>
                        <h1 className="text-3xl font-bold mb-6">
                            Join Our Medical Network
                        </h1>
                        <p className="text-gray-600 mb-8">
                            Expand your practice and reach more patients through
                            Doktorio.com's trusted healthcare platform.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Calendar className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">
                                        Online Appointment Management
                                    </h3>
                                    <p className="text-gray-600">
                                        Efficiently manage your schedule with
                                        our smart booking system.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Users className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">
                                        Reach New Patients
                                    </h3>
                                    <p className="text-gray-600">
                                        Connect with patients looking for your
                                        expertise in your area.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <UserCircle className="h-6 w-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">
                                        Professional Profile
                                    </h3>
                                    <p className="text-gray-600">
                                        Showcase your expertise with a detailed
                                        professional profile.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Registration Form */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-semibold mb-6">
                            Apply to Join
                        </h2>

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
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Medical License Number
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Specialty
                                </label>
                                <select
                                    required
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                >
                                    <option value="">Select a specialty</option>
                                    <option value="cardiology">
                                        Cardiology
                                    </option>
                                    <option value="dermatology">
                                        Dermatology
                                    </option>
                                    <option value="neurology">Neurology</option>
                                    <option value="pediatrics">
                                        Pediatrics
                                    </option>
                                    <option value="psychiatry">
                                        Psychiatry
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
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
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Practice Location
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter your clinic/hospital address"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                />
                            </div>

                            <div>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        required
                                        className="rounded border-gray-300 text-primary focus:ring-primary"
                                    />
                                    <span className="text-sm text-gray-600">
                                        I agree to the terms of service and
                                        privacy policy
                                    </span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                            >
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
