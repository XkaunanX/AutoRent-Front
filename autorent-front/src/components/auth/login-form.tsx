"use client"

// Hooks
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

// Componentes
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"

// Mensajes de error
const formSchema = z.object({
    username: z.string().min(3, {
        message: "El nombre de usuario debe tener al menos 3 caracteres.",
    }),
    password: z.string().min(6, {
        message: "La contraseña debe tener al menos 6 caracteres.",
    }),
})

export default function LoginForm() {

    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
    
        setIsLoading(true)

        try {
        // Aquí se haría la petición al backend de Django
        // const response = await fetch('/api/auth/login', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(values),
        // })

        // Simulamos la respuesta
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // if (!response.ok) throw new Error('Credenciales inválidas')
        // const data = await response.json()

        toast({
            title: "Inicio de sesión exitoso",
            description: "Redirigiendo al panel principal...",
        })

        // Redirigir al dashboard después del login exitoso
        // router.push('/dashboard')
        } catch (error) {
            toast({
                title: "Error al iniciar sesión",
                description: "Verifica tus credenciales e intenta nuevamente.",
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre de usuario</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="usuario123"
                                    {...field}
                                    className="border-blue-200 focus-visible:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:focus-visible:ring-blue-400"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Contraseña</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="••••••••"
                                    {...field}
                                    className="border-blue-200 focus-visible:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:focus-visible:ring-blue-400"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex gap-4">
                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                        disabled={isLoading}
                    >
                        {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:border-gray-700 dark:text-blue-400 dark:hover:bg-gray-800 dark:hover:text-blue-300"
                        onClick={() => router.push("/auth/register")}
                    >
                        Regístrate
                    </Button>
                </div>
            </form>
        </Form>
    )
    
}
