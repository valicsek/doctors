'use client'

export const dynamic = 'force-static'

export default function BookingSuccessPage() {
    return (
        <main className="flex-1 bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold mb-4">Booking Confirmed!</h1>
                <p className="text-gray-600 mb-6">
                    Your appointment has been successfully booked. We have sent
                    you a confirmation email with all the details.
                </p>
                <a
                    href="/"
                    className="inline-block px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                    Return to Home
                </a>
            </div>
        </main>
    )
}
