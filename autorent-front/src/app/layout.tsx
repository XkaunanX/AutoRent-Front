import type React from "react";
import type { Metadata } from "next"; 
import { Inter } from "next/font/google"; // Fonts
import "@/app/globals.css";

// Componentes
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "AutoRent - Alquiler de Vehículos",
    description: "Plataforma de alquiler de vehículos que conecta propietarios con clientes",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
