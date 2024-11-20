/**
 *
 *  /GaussPartial
 *
 */

import React, { useState } from 'react'

// NPM Libraries
// import PropTypes from 'prop-types'
// import styled from '@emotion/styled'
import { Box, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components
import Codes from '../Codes'
import Methods from '..'
import { gaussPartialRuby } from './codes'
import GaussPartialForm from './Form'

// Utils

const Solution = ({ solution: { result, iterations } }) => {
	console.log(result, iterations)
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Paper sx={{ px: 3, py: 2, mt: 4 }}></Paper>
		</Box>
	)
}

const MethodLogic = () => {
	const [solution, setSolution] = useState({ iterations: [], errors: [], solution: [] })
	const [loading, setLoading] = useState(false)

	console.log(solution, loading)

	return (
		<div>
			<GaussPartialForm
				onStart={() => setLoading(true)}
				onComplete={(solution) => {
					setLoading(false)
					setSolution(solution)
				}}
			/>
			{solution && <Solution solution={solution} />}
		</div>
	)
}

const GaussPartial = () => {
	const { t } = useTranslation('', { keyPrefix: 'components.GaussPartial' })

	return (
		<Methods
			method_key="gauss_partial"
			name={t('name')}
			methodElement={<MethodLogic />}
			codeElement={<Codes ruby_code={gaussPartialRuby(t)} />}
		/>
	)
}

GaussPartial.propTypes = {}

export default GaussPartial
