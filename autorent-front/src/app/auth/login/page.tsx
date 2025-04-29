import Image from "next/image"
import Link from "next/link"
import LoginForm from "@/components/auth/login-form"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LoginPage() {
    return (
        <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                <div className="absolute inset-0 bg-blue-950 dark:bg-blue-900">
                    <Image
                        src="/images/car-rental.jpg"
                        width={1920}
                        height={1080}
                        alt="AutoRent background"
                        className="h-full w-full object-cover opacity-20"
                    />
                </div>
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-6 w-6"
                    >
                        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
                        <circle cx="7" cy="17" r="2" />
                        <path d="M9 17h6" />
                        <circle cx="17" cy="17" r="2" />
                    </svg>
                    AutoRent
                </div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            &ldquo;AutoRent ofrece el servicio de alquiler de autos en varias ciudades del pais, conectando
                            propietarios de vehiculos con clientes que desean alquilarlos.&rdquo;
                        </p>
                        <footer className="text-sm">Equipo de AutoRent</footer>
                    </blockquote>
                </div>
            </div>
            <div className="lg:p-8">
                <div className="absolute top-4 right-4">
                    <ThemeToggle />
                </div>
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Iniciar Sesion</h1>
                        <p className="text-sm text-muted-foreground">Ingresa tus credenciales para acceder a tu cuenta</p>
                    </div>

                    <LoginForm />

                    <div className="flex flex-col space-y-4 text-center">
                        <div className="text-sm">
                            ¿Olvidaste tu contrasena?{" "}
                            <Link
                                href="/auth/reset-password"
                                className="text-blue-600 hover:text-blue-800 underline underline-offset-4 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                                Recuperar contrasena
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
