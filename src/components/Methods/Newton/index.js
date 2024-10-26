/**
 *
 *  Methods/Newton
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
import NewtonForm from './Form'
import { newtonRuby } from './codes'

// Utils

const MethodLogic = () => {
	return (
		<div className="row" style={{ flexGrow: 1 }}>
			<div className="col-12 col-lg-5">
				<NewtonForm />
			</div>

			<div className="col-12 col-lg-7"></div>
		</div>
	)
}

const Newton = (props) => {
	const { t } = useTranslation('', { keyPrefix: 'components.Newton' })

	return <Methods {...props} methodElement={<MethodLogic />} codeElement={<Codes ruby_code={newtonRuby(t)} />} />
}

Newton.propTypes = {}

export default Newton
