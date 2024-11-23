/**
 *
 *  Ui/Inputs/Points
 *
 */

import React from 'react'

// NPM Libraries
import styled from '@emotion/styled'
import { TextField, Typography } from '@mui/material'
import { AddBox, Delete } from '@mui/icons-material'
// import { useTranslation } from 'react-i18next'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components

// Utils
import colors from 'styles/colors'

const MainContainer = styled.div`
	&:hover {
		.delete-button {
			visibility: visible;
		}
	}

	.delete-button {
		text-align: center;
		border-top: 0;
		visibility: hidden;
		cursor: pointer;
	}
`

export const Input = styled(TextField)`
	width: auto;

	input {
		text-align: center;
		padding: 0 !important;
	}
`

const Container = styled.div`
	display: flex;
	border: 1px solid ${colors.GREY[10]};
	border-right: 0;
	border-bottom: 0;

	.box {
		width: 80px;
		padding: 20px;
		text-align: center;
	}

	.add-button {
		height: calc(100% - 24px);
		cursor: pointer;

		&:hover {
			background-color: rgba(0, 0, 0, 0.05);
		}
	}
`

const PointsInput = ({ points = { x: [], y: [] }, setPoints }) => {
	// const { t } = useTranslation('', { keyPrefix: 'components.Ui.Inputs.PointsInput' })

	const handleAdd = () => setPoints({ x: [...points.x, 0], y: [...points.y, 0] })

	const handleDelete = (index) => {
		const new_points = { ...points }
		points.x.splice(index, 1)
		points.y.splice(index, 1)

		setPoints({ x: new_points.x, y: new_points.y })
	}

	const handleXChange = (new_value, index) => {
		const new_points = points.x

		new_points[index] = new_value

		setPoints({ x: new_points, y: points.y })
	}

	const handleYChange = (new_value, index) => {
		const new_points = points.y

		new_points[index] = new_value

		setPoints({ x: points.x, y: new_points })
	}

	return (
		<div className="d-flex px-1 pt-3">
			<div>
				<Container>
					<div className="box">
						<Typography>X</Typography>
					</div>
				</Container>
				<Container>
					<div className="box border-bottom">
						<Typography>Y</Typography>
					</div>
				</Container>
			</div>

			{points.x.map((_, index) => (
				<MainContainer key={index}>
					<Container>
						<div className="box">
							<Input
								variant="standard"
								value={points.x[index]}
								onChange={(event) => handleXChange(event.target.value, index)}
							/>
						</div>
					</Container>
					<Container>
						<div className="box border-bottom">
							<Input
								variant="standard"
								value={points.y[index]}
								onChange={(event) => handleYChange(event.target.value, index)}
							/>
						</div>
					</Container>

					<div className="delete-button" onClick={() => handleDelete(index)}>
						<Delete color="primary" fontSize="small" />
					</div>
				</MainContainer>
			))}

			<Container className="border-0">
				<div className="px-3 d-flex align-items-center add-button border" onClick={handleAdd}>
					<AddBox color="primary" />
				</div>
			</Container>
		</div>
	)
}

PointsInput.propTypes = {}

export default PointsInput
