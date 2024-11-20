/**
 *
 *  Ui/Inputs/NormInput
 *
 */

import React from 'react'

// NPM Libraries
import { Box, FormControl, Grid, MenuItem, Select, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useField, useFormikContext } from 'formik'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components

// Utils
const size_options = [
	{ value: 1, label: '1' },
	{ value: 2, label: '2' },
	{ value: 3, label: '3' },
	{ value: 'infinite', label: 'Inf.' },
]

const NormInput = ({ disabled, form_control_props = {}, ...props }) => {
	const { t } = useTranslation('', { keyPrefix: 'components.NormInput' })

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
			sx={{ width: '100%', marginBottom: '1rem', ...form_control_props.sx }}
			{...form_control_props}
		>
			<Grid container sx={{ alignItems: 'center' }}>
				<Grid item xs={4}>
					<Typography htmlFor={id} variant="caption" sx={{ fontSize: '0.95rem' }}>
						{t('label')}:
					</Typography>
				</Grid>

				<Grid xs={8}>
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
						<Select
							{...field}
							value={value ?? ''}
							id={id}
							onChange={(e) => {
								const onChangeLogic = new Promise((resolve) => {
									resolve(field?.onChange(e))
								})

								onChangeLogic.then(() => form.validateField(field.name))
							}}
							sx={{ width: '40%' }}
							MenuProps={{
								sx: {
									maxHeight: '400px',
								},
							}}
						>
							{size_options.map((opt) => {
								const { label, value } = opt

								return (
									<MenuItem key={value} value={value} sx={{ py: 1 }}>
										<Box sx={{ display: 'flex' }}>
											<Typography align="right">{label}</Typography>
										</Box>
									</MenuItem>
								)
							})}
						</Select>
					</Box>
				</Grid>
			</Grid>
		</FormControl>
	)
}

NormInput.propTypes = {}

export default NormInput
