/**
 *
 *  Ui/Inputs/Number
 *
 */

import React from 'react'

// NPM Libraries
// import PropTypes from 'prop-types'
import { Info } from '@mui/icons-material'
import {
	Box,
	FormControl,
	FormHelperText,
	Grid,
	InputAdornment,
	OutlinedInput,
	Tooltip,
	Typography,
} from '@mui/material'
import { useField } from 'formik'
// import { useTranslation } from 'react-i18next'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components

// Utils

const NumberInput = ({ label, form_control_props = {}, disabled, adornment = {}, ...props }) => {
	// const { t } = useTranslation('', { keyPrefix: 'components.Ui.Inputs.Number' })

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
						{label}:
					</Typography>
				</Grid>

				<Grid xs={8}>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<OutlinedInput
							id={id}
							type="number"
							{...field}
							value={value ?? ''}
							inputProps={{
								style: { textAlign: 'right' },
							}}
							sx={{ width: '100%', paddingLeft: adornment?.start ? 0 : '1rem' }}
							startAdornment={adornment?.start && <InputAdornment position="start">{adornment.start}</InputAdornment>}
							endAdornment={adornment?.end && <InputAdornment position="end">{adornment.end}</InputAdornment>}
							{...props}
						/>

						<Tooltip title="Add" placement="right">
							<Info color="primary" sx={{ ml: 2, cursor: 'help' }} />
						</Tooltip>
					</Box>

					{show_error && <FormHelperText>{error}</FormHelperText>}
				</Grid>
			</Grid>
		</FormControl>
	)
}

NumberInput.propTypes = {}

export default NumberInput
