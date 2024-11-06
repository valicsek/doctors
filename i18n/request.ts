import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
    const locale = 'en'

    return {
        locale,
        messages: (
            await (locale === 'en'
                ? import('../messages/en.json')
                : import(`../messages/${locale}.json`))
        ).default,
    }
})
