import english from './en.json'
import español from './es.json'

const LANGUAGES = {
    ENGLISH: 'en',
    ESPAÑOL: 'es'
}

export const getI18N = ({currentLocale = 'es'}: {currentLocale: string | undefined }) => {
    if (currentLocale == LANGUAGES.ENGLISH) return english
    if (currentLocale == LANGUAGES.ESPAÑOL) return español
    return español
}