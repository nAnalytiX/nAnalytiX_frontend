/**
 *
 *  Ui/Inputs/MatrixSize
 *
 */

import React from 'react'

// NPM Libraries
import { Box, Grid, MenuItem, Select, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components

// Utils
const size_options = [
	{ value: 2, label: '2 x 2' },
	{ value: 3, label: '3 x 3' },
	{ value: 4, label: '4 x 4' },
	{ value: 5, label: '5 x 5' },
	{ value: 6, label: '6 x 6' },
]

const MatrixSize = ({ value, setValue }) => {
	const { t } = useTranslation('', { keyPrefix: 'components.MatrixSize' })

	return (
		<Grid container sx={{ alignItems: 'center' }}>
			<Grid item xs={6}>
				<Typography variant="caption" sx={{ fontSize: '0.95rem' }}>
					{t('label')}:
				</Typography>
			</Grid>

			<Grid xs={6}>
				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
					<Select
						value={value ?? ''}
						onChange={(e) => setValue(e.target.value)}
						sx={{ width: '120px' }}
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
	)
}

MatrixSize.propTypes = {}

export default MatrixSize
