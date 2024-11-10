import type { Locale, MessageKeys } from '@/@types'
import getIntl from '../intl'
import ServerIntlProvider from '@/providers/server-intl-provider'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { GoogleIcon } from '@/icons/google'

type LoginPageProps = {
  params: {
    locale: Locale
  }
}

export default async function LoginPage({
  params: { locale },
}: LoginPageProps) {
  const intl = await getIntl(locale)

  function formatMessage(id: MessageKeys) {
    return intl.formatMessage({ id })
  }

  return (
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
      <section className="grid overflow-hidden relative grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="flex items-center justify-center z-10">
          <div className="w-[488px] px-5 lg:px-0">
            <div className="flex items-center gap-1 mb-9">
              <Logo />
              <h2 className="text-2xl">Finance.ai</h2>
            </div>
            <h1 className="text-4xl font-bold mb-3">
              {formatMessage('login.welcome')}
            </h1>
            <p className="text-pretty text-muted-foreground">
              {formatMessage('login.description')}
            </p>

            <Button className="w-full mt-8" variant="secondary" size="lg">
              <GoogleIcon />
              {formatMessage('login.button')}
            </Button>
          </div>
        </div>

        <div className="absolute bg-transparent dark:lg:bg-black opacity-5 top-1/2 -translate-y-1/2 -right-24 md:right-24 z-0 lg:right-0 lg:opacity-100 lg:relative items-center lg:flex justify-center">
          <Logo size={250} />
        </div>
      </section>
    </ServerIntlProvider>
  )
}
