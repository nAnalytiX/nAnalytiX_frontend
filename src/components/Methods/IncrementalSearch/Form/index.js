/**
 *
 *  Methods/IncrementalSearch/Form
 *
 */

import React from 'react'

// NPM Libraries
import { Box, Button, IconButton, Paper } from '@mui/material'
import { RestartAlt } from '@mui/icons-material'
import { Form, Formik } from 'formik'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'

// GraphQL
import { useMutation, gql } from '@apollo/client'

// Components
import FunctionInput from 'components/UI/FunctionInput'
import NumberInput from 'components/UI/Inputs/Number'

// Utils
import i18next from 'utils/languages/i18n.js'
import { common_initial_values } from 'components/Methods/helpers'

const validateSchema = () => {
	const required_message = i18next.t('ui.form.validation.required')

	return yup.object().shape({
		fx: yup.string().required(required_message),
		x0: yup.number().required(required_message),
		delta: yup.number().required(required_message),
		nmax: yup.number().required(required_message),
	})
}

const RESOLVE_NON_LINEAR_EQUATION = gql`
	mutation nonLinearEquationResolver($method: String!, $fx: String, $x0: Float, $delta: Float, $nmax: Int) {
		nonLinearEquationResolver(input: { method: $method, fx: $fx, x0: $x0, delta: $delta, nmax: $nmax }) {
			result
		}
	}
`

const IncrementalSearchForm = ({ onStart, onComplete }) => {
	const { t } = useTranslation('', { keyPrefix: 'components.Methods.form' })

	const initial_values = {
		fx: common_initial_values.fx,
		x0: -3,
		delta: 0.5,
		nmax: common_initial_values.nmax,
	}

	const handleSubmit = (values) => {
		onStart()
		resolve_method({ variables: { ...values, method: 'incremental_search' } })
	}

	const handleComplete = (value) => {
		const result = value.nonLinearEquationResolver.result.iterations

		onComplete(result)
	}

	const [resolve_method] = useMutation(RESOLVE_NON_LINEAR_EQUATION, { onCompleted: handleComplete })

	return (
		<Formik initialValues={initial_values} onSubmit={handleSubmit} validationSchema={() => validateSchema()}>
			<Form>
				<Paper sx={{ p: 2, mb: 2 }} elevation={0}>
					<FunctionInput name="fx" controlled hide_actions />
				</Paper>

				<Paper sx={{ p: 2 }} elevation={0}>
					<NumberInput name="x0" label={t('fields.x0')} adornment={{ start: 'x0' }} gutter_bottom />
					<NumberInput name="delta" label={t('fields.delta')} adornment={{ start: 'Δ' }} gutter_bottom />
					<NumberInput name="nmax" label={t('fields.nmax')} adornment={{ start: 'NMax' }} />
				</Paper>

				<Box sx={{ mt: 2, display: 'flex', justifyContent: 'end' }}>
					<IconButton type="reset" color="default" sx={{ mr: 1 }} title={t('buttons.reset')}>
						<RestartAlt />
					</IconButton>

					<Button type="submit" variant="contained">
						{t('buttons.find_roots')}
					</Button>
				</Box>
			</Form>
		</Formik>
	)
}

IncrementalSearchForm.propTypes = {}

export default IncrementalSearchForm
