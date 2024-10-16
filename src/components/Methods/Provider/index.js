/**
 *
 *  /Methods/Provider
 *
 */

import React from 'react'

// NPM Libraries
import { useParams } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import styled from '@emotion/styled'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components

// Utils
import { getMethod } from 'utils/methods'

const MethodsProvider = () => {
	const { method_key } = useParams()

	const { component: Component, ...method_props } = getMethod(method_key)

	if (!Component) return 'Method Not Found'

	return <Component {...method_props} />
}

MethodsProvider.propTypes = {}

export default MethodsProvider
