import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import es from './es.js'
import en from './es.js'

i18n.use(initReactI18next).init({
	lng: 'es',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
	resources: {
		en: en,
		es: es,
	},
})

export default i18n
