import i18n from 'i18next'
import languageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import resources from './resources.js'

i18n
	.use(languageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'es',
		interpolation: {
			escapeValue: false,
		},
		resources: resources,
	})

export default i18n
