/**
 *
 *  Methods/GF/Form
 *
 */

import React, { useEffect, useState } from 'react'

// NPM Libraries
import { Button, IconButton, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'

// GraphQL
import { useMutation } from '@apollo/client'

// Components
import MatrixInput from 'components/UI/Inputs/Matrix'
import MatrixSizeInput from 'components/UI/Inputs/MatrixSize'
import { RestartAlt } from '@mui/icons-material'

// Utils
import { a_default_value, b_default_value, generateMatrix, formatVector, RESOLVE_LINEAR_EQUATION } from 'utils/matrix'

const FactorizationLuSimpleForm = ({ onComplete, onStart }) => {
	const { t } = useTranslation('', { keyPrefix: 'components.FactorizationLuSimple.form' })

	const [matrix_size, setMatrixSize] = useState(4)
	const [matrix_a, setMatrixA] = useState(a_default_value)
	const [matrix_b, setMatrixB] = useState(b_default_value)

	useEffect(() => {
		if (matrix_size === 4) {
			setMatrixA(a_default_value)
			setMatrixB(b_default_value)
		} else {
			setMatrixA(generateMatrix(matrix_size, matrix_size))
			setMatrixB(generateMatrix(1, matrix_size))
		}
	}, [matrix_size])

	const handleSubmit = () => {
		onStart()
		resolve_method({
			variables: {
				method: 'lu_simple',
				matrixA: JSON.stringify(matrix_a),
				vectorB: JSON.stringify(formatVector(matrix_b)),
			},
		})
	}

	const handleComplete = (value) => onComplete(value.linearEquationResolver.result)

	const [resolve_method] = useMutation(RESOLVE_LINEAR_EQUATION, { onCompleted: handleComplete })

	return (
		<div className="d-flex flex-column align-items-center">
			<Paper elevation={0} sx={{ width: '500px', px: 3, py: 2, mb: 2 }}>
				<MatrixSizeInput value={matrix_size} setValue={(value) => setMatrixSize(value)} />
			</Paper>

			<div className="d-flex">
				<Paper elevation={0} sx={{ px: 3, py: 2 }}>
					<MatrixInput base_matrix={matrix_a} setMatrix={setMatrixA} name="A" />
				</Paper>
				<Paper elevation={0} sx={{ px: 3, py: 2, ml: 2 }}>
					<MatrixInput base_matrix={matrix_b} setMatrix={setMatrixB} name="B" />
				</Paper>
			</div>

			<div className="d-flex justify-content-between mt-3">
				<IconButton
					type="reset"
					color="default"
					sx={{ mr: 1 }}
					title={t('buttons.reset')}
					onClick={() => {
						setMatrixSize(4)
						setMatrixA(a_default_value)
						setMatrixB(b_default_value)
						onComplete({})
					}}
				>
					<RestartAlt />
				</IconButton>

				<Button onClick={handleSubmit} variant="contained">
					{t('buttons.run')}
				</Button>
			</div>
		</div>
	)
}

export default FactorizationLuSimpleForm
