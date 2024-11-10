import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import './globals.css'
import i18nConfig from '../../../i18nConfig'
import { notFound } from 'next/navigation'
import type { Locale } from '@/@types'
import { ThemeProvider } from '@/providers/theme-provider'

export const metadata: Metadata = {
  title: 'Finance.ia',
  description:
    'A Finance AI é uma plataforma de gestão financeira que utiliza IA para monitorar suas movimentações, e oferecer insights personalizados, facilitando o controle do seu orçamento.',
}

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }))
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: Locale }
}>) {
  if (!i18nConfig.locales.includes(locale)) {
    notFound()
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        forcedTheme="dark"
      >
        <body className={`${inter.className} antialiased`}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
