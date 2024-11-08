'use client'

import { IntlProvider, type MessageFormatElement } from 'react-intl'
import type { ReactNode } from 'react'

export default function ServerIntlProvider({
  messages,
  locale,
  children,
}: {
  messages: Record<string, MessageFormatElement[]> | Record<string, string>
  locale: string
  children: ReactNode
}) {
  return (
    <IntlProvider messages={messages} locale={locale}>
      {children}
    </IntlProvider>
  )
}
