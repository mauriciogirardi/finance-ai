import { LanguageSelect } from '@//components/language-select'
import ServerIntlProvider from '@/providers/server-intl-provider'
import Link from 'next/link'
import type { Locale } from '@/@types'
import getIntl from '../intl'

type HomeProps = {
  params: {
    locale: Locale
  }
}

export default async function Home({ params: { locale } }: HomeProps) {
  const intl = await getIntl(locale)

  return (
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
      <div>
        <p>{intl.formatMessage({ id: 'home' })}</p>
        <LanguageSelect />
        <Link href={`/${locale}/transactions`}>Transactions</Link>
      </div>
    </ServerIntlProvider>
  )
}
