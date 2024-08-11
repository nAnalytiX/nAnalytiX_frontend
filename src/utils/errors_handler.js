import { onError } from '@apollo/client/link/error'
import { notifyError } from 'utils/notify'
import i18next from 'utils/languages/i18n.js'

const errorsHandler = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.forEach(({ message, locations, path }) =>
			console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`, locations)
		)
	}
	if (networkError) networkErrorHandler(networkError)
})

const networkErrorHandler = (error) => {
	const { details: error_details, message } = error

	console.log(error_details)
	switch (message) {
		case 'Failed to fetch':
			notifyError(i18next.t('errors.internet'))
			break
		case 'Unauthorized':
			localStorage.removeItem('auth_token')
			notifyError(i18next.t('errors.authorization'))
			break
	}
}

export default errorsHandler
