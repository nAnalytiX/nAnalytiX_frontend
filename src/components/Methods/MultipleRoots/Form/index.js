/**
 *
 *  Methods/MultipleRoots/Form
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
import { common_initial_values } from 'components/Methods/helpers'

const RESOLVE_NON_LINEAR_EQUATION = gql`
	mutation nonLinearEquationResolver(
		$method: String!
		$fx: String
		$derivate: String
		$secondDerivate: String
		$x0: Float
		$tolerance: Float
		$nmax: Int
		$errorType: String
	) {
		nonLinearEquationResolver(
			input: {
				method: $method
				fx: $fx
				derivate: $derivate
				secondDerivate: $secondDerivate
				x0: $x0
				tolerance: $tolerance
				nmax: $nmax
				errorType: $errorType
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
		derivate: yup.string().required(required_message),
		secondDerivate: yup.string().required(required_message),
		x0: yup.number().required(required_message),
		nmax: yup.number().required(required_message),
		tolerance: yup.number().required(required_message),
		errorType: yup.string().required(required_message),
	})
}

const MultipleRootsForm = ({ onStart, onComplete }) => {
	const { t } = useTranslation('', { keyPrefix: 'components.Methods.form' })

	const initial_values = {
		fx: 'exp(x) - x -1',
		derivate: 'exp(x) - 1',
		secondDerivate: 'exp(x)',
		x0: 1,
		nmax: common_initial_values.nmax,
		tolerance: common_initial_values.tolerance,
		errorType: common_initial_values.errorType,
	}

	const handleSubmit = (values) => {
		onStart()
		resolve_method({ variables: { ...values, method: 'multiple_roots' } })
	}

	const handleComplete = (value) => {
		const result = value.nonLinearEquationResolver.result

		onComplete(result)
	}

	const [resolve_method] = useMutation(RESOLVE_NON_LINEAR_EQUATION, { onCompleted: handleComplete })

	return (
		<Formik initialValues={initial_values} onSubmit={handleSubmit} validationSchema={() => validateSchema()}>
			<Form>
				<Paper sx={{ p: 2, mb: 2 }} elevation={0}>
					<FunctionInput name="fx" controlled hide_actions gutter_bottom />

					<FunctionInput
						name="derivate"
						label={t('fields.derivate')}
						adornment="f'(x)"
						controlled
						gutter_bottom
						hide_actions
					/>

					<FunctionInput
						name="secondDerivate"
						label={t('fields.secondDerivate')}
						adornment="f''(x)"
						controlled
						hide_actions
					/>
				</Paper>

				<Paper sx={{ p: 2, mb: 2 }} elevation={0}>
					<NumberInput name="x0" label={t('fields.x0')} adornment={{ start: 'x0' }} />
				</Paper>

				<Paper sx={{ p: 2 }} elevation={0}>
					<NumberInput name="nmax" label={t('fields.nmax')} adornment={{ start: 'NMax' }} gutter_bottom />
					<ToleranceInput name="tolerance" />
					<ErrorTypeInput name="errorType" />
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

MultipleRootsForm.propTypes = {}

export default MultipleRootsForm
