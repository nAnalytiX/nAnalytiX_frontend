/**
 *
 *  Methods/FalsePosition
 *
 */

import React from 'react'

// NPM Libraries
// import PropTypes from 'prop-types'
// import styled from '@emotion/styled'
import { Card, CardContent } from '@mui/material'
import { useTranslation } from 'react-i18next'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components
import Codes from '../Codes'
import FalsePositionForm from './Form'
import Methods from '..'
import { falsePositionRuby } from './codes'

// Utils

const MethodLogic = () => {
	return (
		<div className="row" style={{ flexGrow: 1 }}>
			<div className="col-12 col-lg-5">
				<FalsePositionForm />
			</div>

			<div className="col-12 col-lg-7">
				<Card>
					<CardContent></CardContent>
				</Card>
			</div>
		</div>
	)
}

const FalsePosition = (props) => {
	const { t } = useTranslation('', { keyPrefix: 'components.FalsePosition' })

	return <Methods {...props} methodElement={<MethodLogic />} codeElement={<Codes ruby_code={falsePositionRuby(t)} />} />
}

FalsePosition.propTypes = {}

export default FalsePosition
