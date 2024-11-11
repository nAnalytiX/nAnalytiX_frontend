/**
 *
 *  Methods/FalsePosition/Form
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
import { gql, useMutation } from '@apollo/client'

// Components
import ErrorTypeInput from 'components/UI/Inputs/ErrorType'
import FunctionInput from 'components/UI/FunctionInput'
import NumberInput from 'components/UI/Inputs/Number'
import ToleranceInput from 'components/UI/Inputs/Tolerance'

// Utils
import i18next from 'utils/languages/i18n.js'
import IntervalInput from 'components/UI/Inputs/Interval'
import { common_initial_values } from 'components/Methods/helpers'

const RESOLVE_NON_LINEAR_EQUATION = gql`
	mutation nonLinearEquationResolver(
		$method: String!
		$fx: String
		$a_interval: Float
		$b_interval: Float
		$tolerance: Float
		$nmax: Int
		$error_type: String
	) {
		nonLinearEquationResolver(
			input: {
				method: $method
				fx: $fx
				a_interval: $a_interval
				b_interval: $b_interval
				tolerance: $tolerance
				nmax: $nmax
				error_type: $error_type
			}
		) {
			result
		}
	}
`

const validateSchema = () => {
	const required_message = i18next.t('ui.form.validation.required')

	return yup.object().shape({
		fx: yup.string().required(required_message),
		a_interval: yup.number().required(required_message),
		b_interval: yup.number().required(required_message),
		tolerance: yup.number().required(required_message),
		nmax: yup.number().required(required_message),
	})
}

const FalsePositionForm = () => {
	const { t } = useTranslation('', { keyPrefix: 'components.Methods.form' })

	const [resolve_method] = useMutation(RESOLVE_NON_LINEAR_EQUATION)

	const initial_values = {
		fx: common_initial_values.fx,
		a_interval: common_initial_values.a_interval,
		b_interval: common_initial_values.b_interval,
		nmax: common_initial_values.nmax,
		tolerance: common_initial_values.tolerance,
		error_type: common_initial_values.error_type,
	}

	const handleSubmit = (values) => resolve_method({ variables: { ...values, method: 'bisection' } })

	return (
		<Formik initialValues={initial_values} onSubmit={handleSubmit} validationSchema={() => validateSchema()}>
			<Form>
				<Paper sx={{ p: 2, mb: 2 }} elevation={0}>
					<FunctionInput name="fx" controlled hide_actions />
				</Paper>

				<Paper sx={{ p: 2, mb: 2 }} elevation={0}>
					<IntervalInput name="interval" />
				</Paper>

				<Paper sx={{ p: 2 }} elevation={0}>
					<NumberInput name="nmax" label={t('fields.nmax')} adornment={{ start: 'NMax' }} gutter_bottom />
					<ToleranceInput name="tolerance" />
					<ErrorTypeInput name="error_type" />
				</Paper>

				<Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
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

FalsePositionForm.propTypes = {}

export default FalsePositionForm
