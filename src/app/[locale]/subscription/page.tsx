import getIntl from '../intl'
import ServerIntlProvider from '@/providers/server-intl-provider'
import { LanguageSelect } from '@/components/language-select'
import Link from 'next/link'
import type { Locale } from '@/@types'

type SubscriptionPageProps = {
  params: {
    locale: Locale
  }
}

export default async function SubscriptionPage({
  params: { locale },
}: SubscriptionPageProps) {
  const intl = await getIntl(locale)

  return (
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
      <div>
        <p>Subscription</p>
        <LanguageSelect />
        <Link href={`/${locale}`}>Home</Link>
      </div>
    </ServerIntlProvider>
  )
}
