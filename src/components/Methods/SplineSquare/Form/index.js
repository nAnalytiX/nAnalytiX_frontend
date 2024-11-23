/**
 *
 *  Methods/SplineSquare/Form
 *
 */

import React, { useState } from 'react'

// NPM Libraries
import { Button, IconButton, Paper } from '@mui/material'
import { RestartAlt } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

// GraphQL
import { useMutation } from '@apollo/client'

// Components

// Utils
import PointsInput from 'components/UI/Inputs/Points'
import { default_values, format_special_points, RESOLVE_INTERPOLATION } from 'utils/interpolation'

const SplineSquareForm = ({ onComplete, onStart }) => {
	const { t } = useTranslation('', { keyPrefix: 'components.SplineSquare.form' })

	const [points, setPoints] = useState(default_values)

	const handleSubmit = () => {
		onStart()
		resolve_method({
			variables: {
				method: 'spline_cuadratic',
				points: JSON.stringify(format_special_points(points)),
			},
		})
	}

	const handleComplete = (value) => onComplete(value.interpolationResolver.result)

	const [resolve_method] = useMutation(RESOLVE_INTERPOLATION, { onCompleted: handleComplete })

	return (
		<div className="d-flex justify-content-center">
			<Paper elevation={0} sx={{ px: 3, py: 2 }}>
				<PointsInput points={points} setPoints={setPoints} />

				<div className="d-flex justify-content-between mt-1">
					<IconButton
						type="reset"
						color="default"
						sx={{ mr: 1 }}
						title={t('buttons.reset')}
						onClick={() => {
							setPoints({ ...default_values })
							onComplete()
						}}
					>
						<RestartAlt />
					</IconButton>

					<Button onClick={handleSubmit} variant="contained">
						{t('buttons.run')}
					</Button>
				</div>
			</Paper>
		</div>
	)
}

export default SplineSquareForm
