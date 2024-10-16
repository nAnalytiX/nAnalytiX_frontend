/**
 *
 *  Methods/FalsePosition
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
import { falsePositionRuby } from './codes'

// Utils

const FalsePosition = (props) => {
	const { t } = useTranslation('', { keyPrefix: 'components.FalsePosition' })

	return (
		<Methods {...props} methodElement={<React.Fragment />} codeElement={<Codes ruby_code={falsePositionRuby(t)} />} />
	)
}

FalsePosition.propTypes = {}

export default FalsePosition
