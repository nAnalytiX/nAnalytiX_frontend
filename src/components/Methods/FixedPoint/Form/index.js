/**
 *
 *  Methods/FixedPoint/Form
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
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components
import ErrorTypeInput from 'components/UI/Inputs/ErrorType'
import FunctionInput from 'components/UI/FunctionInput'
import NumberInput from 'components/UI/Inputs/Number'
import ToleranceInput from 'components/UI/Inputs/Tolerance'

// Utils
import i18next from 'utils/languages/i18n.js'

const validateSchema = () => {
	const required_message = i18next.t('ui.form.validation.required')

	return yup.object().shape({
		fx: yup.string().required(required_message),
		tolerance: yup.number().required(required_message),
	})
}

const FixedPointForm = () => {
	const { t } = useTranslation('', { keyPrefix: 'components.Methods.form' })

	return (
		<Formik
			initialValues={{ fx: 'cos(x)', nmax: 100, tolerance: 1e-7, error_type: 'absolute' }}
			onSubmit={(values) => console.log(values)}
			validationSchema={() => validateSchema()}
		>
			<Form>
				<Paper sx={{ p: 2, mb: 2 }} elevation={0}>
					<FunctionInput name="fx" controlled hide_actions gutter_bottom />
					<FunctionInput name="gx" adornment="g(x)" controlled hide_actions />
				</Paper>

				<Paper sx={{ p: 2, mb: 2 }} elevation={0}>
					<NumberInput name="x0" label={t('fields.x0')} adornment={{ start: 'x0' }} />
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

FixedPointForm.propTypes = {}

export default FixedPointForm
