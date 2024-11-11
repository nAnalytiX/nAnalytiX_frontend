/**
 *
 *  UI/Inputs/Interval
 *
 */

import React from 'react'

// NPM Libraries
// import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Box, FormControl, FormHelperText, Grid, OutlinedInput, Tooltip, Typography } from '@mui/material'
import { useField } from 'formik'
import { useTranslation } from 'react-i18next'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components

// Utils
import colors from 'styles/colors'
import { Info } from '@mui/icons-material'

const InputsContainer = styled.div`
	display: flex;
	align-items: center;
	flex: 1;

	& span {
		font-size: 1.7rem;
		font-weight: 200;
		color: ${colors.GREY[50]};
	}
`

const IntervalInput = ({ form_control_props = {}, disabled }) => {
	const { t } = useTranslation('', { keyPrefix: 'components.IntervalInput' })

	const [field_a, meta_a] = useField({ name: 'a_interval' })
	const [field_b, meta_b] = useField({ name: 'b_interval' })

	const show_error = !!meta_a.error || !!meta_b.error

	return (
		<FormControl
			error={show_error}
			disabled={disabled}
			sx={{ width: '100%', ...form_control_props.sx }}
			{...form_control_props}
		>
			<Grid container sx={{ alignItems: 'center' }}>
				<Grid item xs={4}>
					<Typography variant="caption" sx={{ fontSize: '0.95rem' }}>
						{t('label')}:
					</Typography>
				</Grid>

				<Grid xs={8}>
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
						<InputsContainer>
							<span>[</span>
							<OutlinedInput
								id={`${field_a.name}_id`}
								type="number"
								{...field_a}
								value={field_a.value ?? ''}
								inputProps={{
									style: { textAlign: 'right', width: '50px' },
								}}
								sx={{ mx: '10px' }}
							/>

							<span className="">,</span>

							<OutlinedInput
								id={`${field_b.name}_id`}
								type="number"
								{...field_b}
								value={field_b.value ?? ''}
								inputProps={{
									style: { textAlign: 'right', width: '50px' },
								}}
								sx={{ mx: '10px' }}
							/>
							<span>]</span>
						</InputsContainer>

						<Tooltip title="Add" placement="right">
							<Info color="primary" sx={{ ml: 2, cursor: 'help' }} />
						</Tooltip>
					</Box>

					{show_error && <FormHelperText>TODO</FormHelperText>}
				</Grid>
			</Grid>
		</FormControl>
	)
}

IntervalInput.propTypes = {}

export default IntervalInput
