/**
 *
 *  /GaussTotal
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
import { gaussTotalRuby } from './codes'

// Utils

const GaussTotal = () => {
	const { t } = useTranslation('', { keyPrefix: 'components.GaussTotal' })

	return (
		<Methods
			method_key="gauss_total"
			name={t('name')}
			methodElement={<React.Fragment />}
			codeElement={<Codes ruby_code={gaussTotalRuby(t)} />}
		/>
	)
}

GaussTotal.propTypes = {}

export default GaussTotal
