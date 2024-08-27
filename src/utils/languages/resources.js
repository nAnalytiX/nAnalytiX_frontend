import LanguageSelector_T from 'components/UI/LanguageSelector/translation'
import NavigationBar_T from 'components/UI/NavigationBar/translation'

const es = {
	translation: {
		components: {
			Ui: {
				NavigationBar: NavigationBar_T.es,
				LanguageSelector: LanguageSelector_T.es,
			},
		},
	},
}

const en = {
	translation: {
		components: {
			Ui: {
				NavigationBar: NavigationBar_T.en,
				LanguageSelector: LanguageSelector_T.en,
			},
		},
	},
}

const resources = { es, en }

export default resources
