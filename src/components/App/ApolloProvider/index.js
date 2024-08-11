/**
 *
 *  App/ApolloProvider
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { ApolloClient, ApolloProvider as DefaultProvider, InMemoryCache, HttpLink } from '@apollo/client'
import errorsHandler from 'utils/errors_handler'

const ApolloProvider = ({ children }) => {
	const httpLink = new HttpLink({
		uri: `${process.env.REACT_APP_API_URL}/graphql`,
	})

	const client = new ApolloClient({
		cache: new InMemoryCache(),
		link: errorsHandler.concat(httpLink),
	})

	return <DefaultProvider client={client}>{children}</DefaultProvider>
}

ApolloProvider.propTypes = {
	children: PropTypes.element,
}

export default ApolloProvider
