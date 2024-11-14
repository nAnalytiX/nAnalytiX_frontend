/**
 *
 *  UI/Inputs/ErrorType
 *
 */

import React from 'react'

// NPM Libraries
// import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Box, FormControl, FormHelperText, Grid, Typography } from '@mui/material'
import { useField, useFormikContext } from 'formik'
import { useTranslation } from 'react-i18next'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components

// Utils
import colors from 'styles/colors'

const SelectButton = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid ${colors.COMPLEMENTARY.border};
	padding: 3px;
	opacity: ${({ active }) => (active ? '1' : '0.5')};
	background-color: ${({ active }) => (active ? colors.PRIMARY[50] : 'white')};
	transition: 0.5ms;
	cursor: pointer;

	&:hover {
		opacity: 1;
	}
`

const ErrorTypeInput = ({ form_control_props = {}, disabled, ...props }) => {
	const { t } = useTranslation('', { keyPrefix: 'components.ErrorTypeInput' })

	const form = useFormikContext()
	const [field, meta] = useField({ ...props })

	const { name, value } = field
	const { error } = meta

	const id = `${name}_id`
	const show_error = !!error

	return (
		<FormControl
			error={show_error}
			disabled={disabled}
			sx={{ width: '100%', marginTop: '0.3rem', ...form_control_props.sx }}
			{...form_control_props}
		>
			<Grid container sx={{ alignItems: 'center' }}>
				<Grid item xs={4}>
					<Typography htmlFor={id} variant="caption" sx={{ fontSize: '0.95rem' }}>
						{t('label')}:
					</Typography>
				</Grid>

				<Grid xs={8}>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<SelectButton
							onClick={() => form.setFieldValue('errorType', 'absolute')}
							active={value === 'absolute'}
							style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', borderRight: 0 }}
						>
							{t('absolute')}
						</SelectButton>

						<SelectButton
							onClick={() => form.setFieldValue('errorType', 'relative')}
							active={value === 'relative'}
							style={{ borderTopRightRadius: '8px', borderBottomRightRadius: '8px' }}
						>
							{t('relative')}
						</SelectButton>
					</Box>

					{show_error && <FormHelperText>{error}</FormHelperText>}
				</Grid>
			</Grid>
		</FormControl>
	)
}

ErrorTypeInput.propTypes = {}

export default ErrorTypeInput
