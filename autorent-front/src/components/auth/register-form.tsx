"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { Separator } from "@/components/ui/separator"

const formSchema = z
    .object({
        username: z.string().min(3, {
            message: "El nombre de usuario debe tener al menos 3 caracteres.",
        }),
        email: z.string().email({
            message: "Por favor ingresa un correo electrónico válido.",
        }),
        password: z.string().min(6, {
            message: "La contraseña debe tener al menos 6 caracteres.",
        }),
        confirmPassword: z.string().min(6, {
            message: "La contraseña debe tener al menos 6 caracteres.",
        }),
        firstName: z.string().min(2, {
            message: "El nombre debe tener al menos 2 caracteres.",
        }),
        lastName: z.string().min(2, {
            message: "El apellido debe tener al menos 2 caracteres.",
        }),
        dni: z.string().min(7, {
            message: "El DNI debe tener al menos 7 dígitos.",
        }),
        phone: z.string().optional(),
        address: z.string().optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Las contraseñas no coinciden",
        path: ["confirmPassword"],
    })

export default function RegisterForm() {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            dni: "",
            phone: "",
            address: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)

        try {
            // const response = await fetch('/api/auth/register', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(values),
            // })

            await new Promise((resolve) => setTimeout(resolve, 1000))

            toast({
                title: "Registro exitoso",
                description: "Tu cuenta ha sido creada correctamente.",
            })

            router.push("/auth/login")
        } catch (error) {
            toast({
                title: "Error al registrar",
                description: "No pudimos crear tu cuenta. Intenta nuevamente.",
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }

    const inputClasses =
        "border-blue-200 focus-visible:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:focus-visible:ring-blue-400"

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <h3 className="text-lg font-medium text-blue-900 dark:text-blue-300">Información personal</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Ingresa tus datos personales</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre *</FormLabel>
                                <FormControl>
                                    <Input placeholder="Juan" {...field} className={inputClasses} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Apellido *</FormLabel>
                                <FormControl>
                                    <Input placeholder="Pérez" {...field} className={inputClasses} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="dni"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>DNI *</FormLabel>
                            <FormControl>
                                <Input placeholder="12345678" {...field} className={inputClasses} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Teléfono</FormLabel>
                                <FormControl>
                                    <Input placeholder="(Opcional)" {...field} className={inputClasses} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Dirección</FormLabel>
                                <FormControl>
                                    <Input placeholder="(Opcional)" {...field} className={inputClasses} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Separator className="my-4 bg-blue-200 dark:bg-gray-700" />

                <div>
                    <h3 className="text-lg font-medium text-blue-900 dark:text-blue-300">Información de cuenta</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Datos para acceder a tu cuenta</p>
                </div>

                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre de usuario *</FormLabel>
                            <FormControl>
                                <Input placeholder="usuario123" {...field} className={inputClasses} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Correo electrónico *</FormLabel>
                            <FormControl>
                                <Input placeholder="tu@ejemplo.com" {...field} className={inputClasses} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contraseña *</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="••••••••" {...field} className={inputClasses} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirmar *</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="••••••••" {...field} className={inputClasses} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">* Campos obligatorios</div>

                <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                    disabled={isLoading}
                >
                    {isLoading ? "Registrando..." : "Crear cuenta"}
                </Button>
            </form>
        </Form>
    )
}
