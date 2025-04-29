"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"

const formSchema = z.object({
    email: z.string().email({
        message: "Por favor ingresa un correo electronico valido.",
    }),
})

export default function PasswordResetForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)

        try {
            // Aqui se haria la peticion al backend de Django
            // const response = await fetch('/api/auth/reset-password', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(values),
            // })

            // Simulamos la respuesta
            await new Promise((resolve) => setTimeout(resolve, 1000))

            // if (!response.ok) throw new Error('Error al enviar el correo')

            setIsSubmitted(true)
            toast({
                title: "Solicitud enviada",
                description: "Revisa tu correo electronico para restablecer tu contrasena.",
            })
        } catch (error) {
            toast({
                title: "Error",
                description: "No pudimos procesar tu solicitud. Intenta nuevamente.",
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }

    if (isSubmitted) {
        return (
            <div className="space-y-4 text-center">
                <h3 className="text-lg font-medium text-blue-900 dark:text-blue-300">Revisa tu correo electronico</h3>
                <p className="text-sm text-muted-foreground">
                    Hemos enviado un enlace para restablecer tu contrasena a tu correo electronico.
                </p>
                <Button
                    variant="outline"
                    className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:border-gray-700 dark:text-blue-400 dark:hover:bg-gray-800 dark:hover:text-blue-300"
                    onClick={() => setIsSubmitted(false)}
                >
                    Volver a intentar
                </Button>
            </div>
        )
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Correo electronico</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="tu@ejemplo.com"
                                    {...field}
                                    className="border-blue-200 focus-visible:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:focus-visible:ring-blue-400"
                                />
                            </FormControl>
                            <FormDescription>Te enviaremos un enlace para restablecer tu contrasena.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                    disabled={isLoading}
                >
                    {isLoading ? "Enviando..." : "Enviar enlace de recuperacion"}
                </Button>
            </form>
        </Form>
    )
}
