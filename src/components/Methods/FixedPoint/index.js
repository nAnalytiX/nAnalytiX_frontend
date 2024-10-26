/**
 *
 *  Methods/FixedPoint
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
import FixedPointForm from './Form'
import Methods from '..'
import { fixedPointRuby } from './codes'

// Utils

const MethodLogic = () => {
	return (
		<div className="row" style={{ flexGrow: 1 }}>
			<div className="col-12 col-lg-5">
				<FixedPointForm />
			</div>

			<div className="col-12 col-lg-7"></div>
		</div>
	)
}

const FixedPoint = (props) => {
	const { t } = useTranslation('', { keyPrefix: 'components.FixedPoint' })

	return <Methods {...props} methodElement={<MethodLogic />} codeElement={<Codes ruby_code={fixedPointRuby(t)} />} />
}

FixedPoint.propTypes = {}

export default FixedPoint
