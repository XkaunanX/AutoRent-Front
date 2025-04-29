import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import RegisterForm from "@/components/auth/register-form"
import { ThemeToggle } from "@/components/theme-toggle"

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-blue-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="absolute top-4 right-4">
                <ThemeToggle />
            </div>
            <div className="max-w-md mx-auto">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 h-8 w-8"
                        >
                            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
                            <circle cx="7" cy="17" r="2" />
                            <path d="M9 17h6" />
                            <circle cx="17" cy="17" r="2" />
                        </svg>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                            AutoRent
                        </h1>
                    </div>
                    <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
                        Crea tu cuenta
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Y comienza a disfrutar de todos los beneficios de AutoRent
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 py-8 px-6 shadow rounded-lg border border-blue-100 dark:border-gray-700">
                    <RegisterForm />
                </div>

                <div className="mt-6 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver al inicio de sesion
                    </Link>
                </div>
            </div>
        </div>
    )
}
