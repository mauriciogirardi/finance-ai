'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useCurrentLocale } from 'next-i18n-router/client'
import type { ChangeEvent } from 'react'
import i18nConfig from '../../i18nConfig'

export function LanguageSelect() {
  const router = useRouter()
  const currentPathname = usePathname()
  const currentLocale = useCurrentLocale(i18nConfig)

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value

    const days = 30
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`

    let newPathname = currentPathname

    if (currentPathname.startsWith(`/${currentLocale}`)) {
      newPathname = currentPathname.replace(
        `/${currentLocale}`,
        `/${newLocale}`
      )
    } else if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      newPathname = `/${newLocale}${currentPathname}`
    }

    router.push(newPathname)
    router.refresh()
  }

  return (
    <select onChange={handleChange} value={currentLocale}>
      <option value="en">English</option>
      <option value="pt">Portuguese</option>
    </select>
  )
}
