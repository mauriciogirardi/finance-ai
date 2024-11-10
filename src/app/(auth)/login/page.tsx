import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { LogInIcon } from 'lucide-react'
import { ClerkLoaded, ClerkLoading, SignInButton } from '@clerk/nextjs'
import { Skeleton } from '@/components/ui/skeleton'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function SignInPage() {
  const { userId } = await auth()

  if (userId) {
    redirect('/')
  }

  return (
    <section className="grid overflow-hidden relative grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="flex items-center justify-center z-10">
        <div className="w-[488px] px-5 lg:px-0">
          <div className="flex items-center gap-1 mb-9">
            <Logo />
            <h2 className="text-2xl">Finance.ai</h2>
          </div>
          <h1 className="text-4xl font-bold mb-3">Bem-vindo</h1>
          <p className="text-pretty text-muted-foreground">
            A Finance AI é uma plataforma de gestão financeira que utiliza IA
            para monitorar suas movimentações, e oferecer insights
            personalizados, facilitando o controle do seu orçamento.
          </p>

          <ClerkLoaded>
            <SignInButton mode="modal">
              <Button className="w-full mt-8" variant="outline" size="lg">
                <LogInIcon />
                Fazer login ou criar conta
              </Button>
            </SignInButton>
          </ClerkLoaded>
          <ClerkLoading>
            <Skeleton className="w-full h-11 mt-8 rounded-md" />
          </ClerkLoading>
        </div>
      </div>

      <div className="absolute bg-transparent dark:lg:bg-black opacity-5 top-1/2 -translate-y-1/2 -right-24 md:right-24 z-0 lg:right-0 lg:opacity-100 lg:relative items-center lg:flex justify-center">
        <Logo size={250} />
      </div>
    </section>
  )
}
