/**
 *
 *  Methods/Bisection
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
import BisectionForm from './Form'
import Codes from '../Codes'
import Methods from '..'
import { bisectionRuby } from './codes'

// Utils

const MethodLogic = () => {
	return (
		<div className="row" style={{ flexGrow: 1 }}>
			<div className="col-12 col-lg-5">
				<BisectionForm />
			</div>

			<div className="col-12 col-lg-7">
				<Card>
					<CardContent></CardContent>
				</Card>
			</div>
		</div>
	)
}

const Bisection = (props) => {
	const { t } = useTranslation('', { keyPrefix: 'components.Bisection' })

	return <Methods {...props} methodElement={<MethodLogic />} codeElement={<Codes ruby_code={bisectionRuby(t)} />} />
}

Bisection.propTypes = {}

export default Bisection
