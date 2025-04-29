import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import PasswordResetForm from "@/components/auth/password-reset-form"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ResetPasswordPage() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-blue-50 dark:bg-slate-900">
            <div className="absolute top-4 right-4">
                <ThemeToggle />
            </div>
            <div className="mx-auto flex w-full max-w-[450px] flex-col justify-center space-y-6 px-4 sm:px-0">
                <div className="flex flex-col space-y-2 text-center">
                    <div className="flex items-center justify-center">
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
                        <h1 className="text-3xl font-bold dark:text-white">
                            AutoRent
                        </h1>
                    </div>
                    <h2 className="text-2xl font-semibold tracking-tight mt-6 dark:text-white">
                        Recuperar contrasena
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Ingresa tu correo para recibir un enlace de recuperacion
                    </p>
                </div>

                <div className="rounded-lg border border-blue-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
                    <PasswordResetForm />
                </div>

                <div className="flex flex-col space-y-2 text-center">
                    <div className="text-sm">
                        <Link
                            href="/auth/login"
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                            <span className="flex items-center justify-center">
                                <ArrowLeft className="mr-1 h-4 w-4" />
                                Volver al inicio de sesion
                            </span>
                        </Link>
                    </div>

                    <div className="text-sm">
                        No tienes una cuenta?{" "}
                        <Link
                            href="/auth/register"
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-4"
                        >
                            Registrate
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
