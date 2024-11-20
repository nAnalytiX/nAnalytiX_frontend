/**
 *
 *  Ui/Inputs/Matrix
 *
 */

import React from 'react'

// NPM Libraries
import styled from '@emotion/styled'
import colors from 'styles/colors'
import { TextField, Typography } from '@mui/material'
// import PropTypes from 'prop-types'
// import { useTranslation } from 'react-i18next'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components

// Utils

const Input = styled(TextField)`
	width: auto;

	input {
		text-align: center;
	}
`

export const OpenParenthesis = styled.div`
	width: 10px;
	border-radius: 10px;
	border-left: 2px solid ${colors.GREY[50]};
	margin-right: 10px;
`

export const CloseParenthesis = styled.div`
	width: 10px;
	border-radius: 10px;
	border-right: 2px solid ${colors.GREY[50]};
	margin-left: 10px;
`

const MatrixInput = ({ base_matrix, setMatrix, name }) => {
	// const { t } = useTranslation('', { keyPrefix: 'components.Ui.Inputs.Matrix' })
	const matrix_size_x = base_matrix[0].length
	const matrix_size_y = base_matrix.length

	const handleChangeValue = (indexI, indexJ, new_value) => {
		let matrix = [...base_matrix]

		matrix[indexJ][indexI] = new_value

		setMatrix(matrix)
	}

	return (
		<div className="d-flex">
			{name && (
				<Typography variant="caption" sx={{ fontSize: '1.2rem', mr: '10px', mt: '15px' }}>
					{name} =
				</Typography>
			)}
			<OpenParenthesis />
			<div className="d-flex flex-column">
				{[...Array(matrix_size_y)].map((_, indexJ) => (
					<div
						key={indexJ}
						style={{
							display: 'grid',
							gridTemplateColumns: `repeat(${matrix_size_x}, 100px)`,
							gridGap: '20px',
							marginBottom: '10px',
						}}
					>
						{[...Array(matrix_size_x)].map((_, indexI) => (
							<Input
								key={indexI}
								variant="standard"
								value={base_matrix[indexJ][indexI]}
								onChange={(event) => handleChangeValue(indexI, indexJ, event.target.value)}
							/>
						))}
					</div>
				))}
			</div>
			<CloseParenthesis />
		</div>
	)
}

MatrixInput.propTypes = {}

export default MatrixInput
