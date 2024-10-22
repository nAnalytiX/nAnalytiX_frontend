/**
 *
 *  Ui/Inputs/Tolerance
 *
 */

import React from 'react'

// NPM Libraries
import { Info } from '@mui/icons-material'
import { Box, FormControl, Grid, MenuItem, Select, Tooltip, Typography } from '@mui/material'
import { useField, useFormikContext } from 'formik'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components

// Utils

const tolerance_options = [
	{ value: '1e-1', label: '-1' },
	{ value: '1e-2', label: '-2' },
	{ value: '1e-3', label: '-3' },
	{ value: '1e-4', label: '-4' },
	{ value: '1e-5', label: '-5' },
	{ value: '1e-6', label: '-6' },
	{ value: '1e-7', label: '-7' },
	{ value: '1e-8', label: '-8' },
	{ value: '1e-9', label: '-9' },
	{ value: '1e-10', label: '-10' },
	{ value: '1e-11', label: '-11' },
	{ value: '1e-12', label: '-12' },
	{ value: '1e-13', label: '-13' },
	{ value: '1e-14', label: '-14' },
	{ value: '1e-15', label: '-15' },
]

const ToleranceInput = ({ label, form_control_props = {}, disabled, ...props }) => {
	const { t } = useTranslation('', { keyPrefix: 'components.Tolerance' })

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
							label={label}
							id={id}
							onChange={(e) => {
								const onChangeLogic = new Promise((resolve) => {
									resolve(field?.onChange(e))
								})

								onChangeLogic.then(() => form.validateField(field.name))
							}}
							sx={{ width: '45%' }}
							MenuProps={{
								sx: {
									maxHeight: '400px',
								},
							}}
						>
							{tolerance_options.map((opt) => {
								const { label, value } = opt

								return (
									<MenuItem key={value} value={value} sx={{ py: 1 }}>
										<Box sx={{ display: 'flex', justifyContent: 'center' }}>
											<Typography align="right">1 * 10</Typography>

											<span style={{ fontSize: '0.7rem', marginTop: '-7px', marginLeft: '5px' }}>{label}</span>
										</Box>
									</MenuItem>
								)
							})}
						</Select>

						<Tooltip title="Add" placement="right">
							<Info color="primary" sx={{ ml: 2, cursor: 'help' }} />
						</Tooltip>
					</Box>
				</Grid>
			</Grid>
		</FormControl>
	)
}

ToleranceInput.propTypes = {}

export default ToleranceInput
