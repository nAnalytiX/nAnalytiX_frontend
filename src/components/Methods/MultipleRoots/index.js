/**
 *
 *  Methods/MultipleRoots
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
import { multipleRootsRuby } from './codes'

// Utils

const MultipleRoots = () => {
	const { t } = useTranslation('', { keyPrefix: 'components.MultipleRoots' })

	return (
		<Methods
			method={t('name')}
			methodElement={<React.Fragment />}
			codeElement={<Codes ruby_code={multipleRootsRuby(t)} />}
		/>
	)
}

MultipleRoots.propTypes = {}

export default MultipleRoots
