import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { dark } from '@clerk/themes'
const inter = Inter({ subsets: ['latin'] })
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'Finance.ia',
  description:
    'A Finance AI é uma plataforma de gestão financeira que utiliza IA para monitorar suas movimentações, e oferecer insights personalizados, facilitando o controle do seu orçamento.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={`${inter.className} antialiased min-h-dvh dark`}>
          <ClerkProvider
            appearance={{
              baseTheme: dark,
              layout: { unsafe_disableDevelopmentModeWarnings: true },
            }}
          >
            {children}
          </ClerkProvider>
        </body>
      </ThemeProvider>
    </html>
  )
}
