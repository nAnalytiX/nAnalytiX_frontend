/**
 *
 *  Methods/Jacobi/Form
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
import NormInput from 'components/UI/Inputs/Norm'
import { RestartAlt } from '@mui/icons-material'

// Utils
import {
	a_default_value,
	b_default_value,
	generateMatrix,
	formatVector,
	RESOLVE_LINEAR_EQUATION,
	x0_default_value,
} from 'utils/matrix'
import NumberInput from 'components/UI/Inputs/Number'
import ToleranceInput from 'components/UI/Inputs/Tolerance'
import { Form, Formik } from 'formik'

const JacobiForm = ({ onComplete, onStart }) => {
	const { t } = useTranslation('', { keyPrefix: 'components.Jacobi.form' })

	const [matrix_size, setMatrixSize] = useState(4)
	const [matrix_a, setMatrixA] = useState(a_default_value)
	const [matrix_b, setMatrixB] = useState(b_default_value)
	const [matrix_x0, setMatrixX0] = useState(x0_default_value)

	useEffect(() => {
		if (matrix_size === 4) {
			setMatrixA(a_default_value)
			setMatrixB(b_default_value)
			setMatrixX0(x0_default_value)
		} else {
			setMatrixA(generateMatrix(matrix_size, matrix_size))
			setMatrixB(generateMatrix(1, matrix_size))
			setMatrixX0(generateMatrix(0, matrix_size))
		}
	}, [matrix_size])

	const handleSubmit = (values) => {
		onStart()
		resolve_method({
			variables: {
				method: 'jacobi',
				matrixA: JSON.stringify(matrix_a),
				vectorB: JSON.stringify(formatVector(matrix_b)),
				vectorX0: JSON.stringify(formatVector(matrix_x0)),
				...values,
			},
		})
	}

	const handleComplete = (value) => onComplete(value.linearEquationResolver.result)

	const [resolve_method] = useMutation(RESOLVE_LINEAR_EQUATION, { onCompleted: handleComplete })

	const initial_values = {
		norm: 1,
		tolerance: 1e-7,
		nmax: 100,
	}

	return (
		<Formik initialValues={initial_values} onSubmit={handleSubmit}>
			<Form>
				<div className="d-flex flex-column align-items-center">
					<Paper elevation={0} sx={{ width: '1000px', px: 3, py: 2, mb: 2 }}>
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: `48% 48%`,
								gridGap: '20px',
							}}
						>
							<div>
								<MatrixSizeInput value={matrix_size} setValue={(value) => setMatrixSize(value)} />
							</div>

							<div>
								<NormInput name="norm" />
								<NumberInput
									name="nmax"
									label={t('fields.nmax')}
									adornment={{ start: 'NMax' }}
									gutter_bottom
									hide_help
									width="150px"
								/>
								<ToleranceInput name="tolerance" hide_help />
							</div>
						</div>
					</Paper>

					<div className="d-flex">
						<Paper elevation={0} sx={{ px: 3, py: 2 }}>
							<MatrixInput base_matrix={matrix_a} setMatrix={setMatrixA} name="A" />
						</Paper>
						<Paper elevation={0} sx={{ px: 3, py: 2, ml: 2 }}>
							<MatrixInput base_matrix={matrix_b} setMatrix={setMatrixB} name="B" />
						</Paper>
						<Paper elevation={0} sx={{ px: 3, py: 2, ml: 2 }}>
							<MatrixInput base_matrix={matrix_x0} setMatrix={setMatrixX0} name="x0" />
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

						<Button type="submit" variant="contained">
							{t('buttons.run')}
						</Button>
					</div>
				</div>
			</Form>
		</Formik>
	)
}

export default JacobiForm
