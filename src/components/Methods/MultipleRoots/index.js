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
import MultipleRootsForm from './Form'
import { multipleRootsRuby } from './codes'

// Utils

const MethodLogic = () => {
	return (
		<div className="row" style={{ flexGrow: 1 }}>
			<div className="col-12 col-lg-5">
				<MultipleRootsForm />
			</div>

			<div className="col-12 col-lg-7"></div>
		</div>
	)
}

const MultipleRoots = (props) => {
	const { t } = useTranslation('', { keyPrefix: 'components.MultipleRoots' })

	return <Methods {...props} methodElement={<MethodLogic />} codeElement={<Codes ruby_code={multipleRootsRuby(t)} />} />
}

MultipleRoots.propTypes = {}

export default MultipleRoots
