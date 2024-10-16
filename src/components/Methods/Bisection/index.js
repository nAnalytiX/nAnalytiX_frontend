/**
 *
 *  Methods/Bisection
 *
 */

import React from 'react'

// NPM Libraries
// import PropTypes from 'prop-types'
// import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components
import Codes from '../Codes'
import Methods from '..'
import { bisectionRuby } from './codes'

// Utils

const Bisection = (props) => {
	const { t } = useTranslation('', { keyPrefix: 'components.Bisection' })

	return <Methods {...props} methodElement={<React.Fragment />} codeElement={<Codes ruby_code={bisectionRuby(t)} />} />
}

Bisection.propTypes = {}

export default Bisection
