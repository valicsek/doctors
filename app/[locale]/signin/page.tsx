'use client'

import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Mail, Lock, AlertCircle } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function SignInPage() {
    const router = useRouter()
    const params = useParams()
    const locale = params.locale as string
    const t = useTranslations('SignIn')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')

        try {
            // Here you would typically make an API call to authenticate
            await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
            router.push(`/${locale}`)
        } catch (err) {
            setError(t('errors.invalidCredentials'))
        } finally {
            setIsLoading(false)
        }
    }

    const handleGoogleSignIn = async () => {
        setIsLoading(true)
        setError('')

        try {
            // Here you would typically initiate Google OAuth flow
            await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
            router.push(`/${locale}`)
        } catch (err) {
            setError(t('errors.googleFailed'))
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <main className="flex-1 flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {/* Logo and Title */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                            <Mail className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            {t('title')}
                        </h1>
                        <p className="text-gray-600 mt-2">{t('subtitle')}</p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg flex items-center gap-2">
                            <AlertCircle className="h-5 w-5" />
                            <p>{error}</p>
                        </div>
                    )}

                    {/* Sign In Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                {t('email')}
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    placeholder={t('emailPlaceholder')}
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                {t('password')}
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    id="password"
                                    type="password"
                                    required
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    placeholder={t('passwordPlaceholder')}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? t('signingIn') : t('signInButton')}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">
                                {t('orContinueWith')}
                            </span>
                        </div>
                    </div>

                    {/* Google Sign In */}
                    <button
                        onClick={handleGoogleSignIn}
                        disabled={isLoading}
                        className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Image
                            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                            alt="Google"
                            width={18}
                            height={18}
                        />
                        {t('googleSignIn')}
                    </button>

                    {/* Forgot Password Link */}
                    <div className="mt-6 text-center">
                        <a
                            href={`/${locale}/forgot-password`}
                            className="text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                            {t('forgotPassword')}
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}
