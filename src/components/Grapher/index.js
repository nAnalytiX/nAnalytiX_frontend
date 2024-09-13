/**
 *
 *  /Grapher
 *
 */

import React, { useState } from 'react'

// NPM Libraries
import styled from '@emotion/styled'
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components
import Graph from './Graph'
import colors from 'styles/colors'
import FunctionInput from 'components/UI/FunctionInput'

// Utils
//

const Circle = styled.span`
	width: 20px;
	height: 20px;
	border-radius: 20px;
	border: 1px solid black;
	margin-right: 15px;
	cursor: pointer;
`

const BlockedBanner = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: white;
	z-index: 1000;
	opacity: 0.8;
`

const functions_colors = [
	colors.PRIMARY['500'],
	colors.ERROR['500'],
	colors.INFO['500'],
	colors.COMPLEMENTARY['orange'],
	colors.COMPLEMENTARY['purple'],
]

const Grapher = () => {
	const { t } = useTranslation('', { keyPrefix: 'components.Grapher' })

	const [editing, setEditing] = useState(null)
	const [colors_list, setColorsList] = useState(functions_colors.slice(1))
	const [functions_list, setFunctionsList] = useState([{ fn: '2+cos(x)', disabled: false, color: functions_colors[0] }])

	const handleCreate = (new_value) => {
		let new_list = [...functions_list]
		let new_colors = [...colors_list]

		const new_function = { fn: new_value, disabled: false, color: new_colors.shift() }

		setFunctionsList([...new_list, new_function])
		reformatColors(new_colors)
	}

	const handleEdit = (index, new_value) => {
		let new_list = [...functions_list]

		new_list = new_list.map((item, i) => (index === i ? new_value : item))

		setFunctionsList(new_list)
		setEditing(null)
	}

	const handleDelete = (index) => {
		let new_list = [...functions_list]
		const fn_to_delete = new_list[index]

		new_list = new_list.filter((_, i) => index !== i)

		setFunctionsList(new_list)
		reformatColors([...colors_list, fn_to_delete.color])
	}

	const reformatColors = (disorder_list) => {
		const ordered_list = functions_colors.reduce((acc, current) => {
			if (disorder_list.includes(current)) acc = [...acc, current]

			return acc
		}, [])

		setColorsList(ordered_list)
	}

	return (
		<div className="container-fluid">
			<div className="row mb-3">
				<div className="col">
					<Typography variant="h4">{t('title')}</Typography>
				</div>
			</div>
			<div className="row">
				<div className="col-4">
					<Card sx={{ mb: 2 }}>
						<CardContent>
							<FunctionInput
								default_value={editing && functions_list[editing - 1].fn}
								handleSave={(new_function) => {
									if (editing) {
										handleEdit(editing - 1, { ...functions_list[editing - 1], fn: new_function })
									} else {
										handleCreate(new_function)
									}
								}}
								handleCancel={() => setEditing(null)}
								main_button_text={t('input.plot')}
								editing={editing}
							/>
						</CardContent>
					</Card>

					{functions_list.map((fn, index) => (
						<Card key={index} sx={{ mb: 1, position: 'relative' }}>
							<CardContent sx={{ padding: '0.7rem 1.1rem !important' }}>
								{editing && editing !== index + 1 && <BlockedBanner />}
								<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
									<Box sx={{ display: 'flex', alignItems: 'center' }}>
										<Circle
											onClick={() => handleEdit(index, { ...fn, disabled: !fn.disabled })}
											style={{ backgroundColor: fn.disabled ? 'transparent' : fn.color }}
										/>
										<Typography sx={{ mt: '1px' }}>f(x) = {fn.fn}</Typography>
									</Box>

									<div>
										<IconButton onClick={() => setEditing(index + 1)} edge="end" size="small" sx={{ mr: '2px ' }}>
											<Edit fontSize="small" color="warning" />
										</IconButton>
										<IconButton onClick={() => handleDelete(index)} edge="end" size="small">
											<Delete fontSize="small" color="error" />
										</IconButton>
									</div>
								</Box>
							</CardContent>
						</Card>
					))}

					{functions_list.length === 0 && (
						<Card>
							<CardContent
								sx={{
									padding: '0.7rem 1.1rem !important',
									display: 'flex',
									justifyContent: 'center',
								}}
							>
								<Typography variant="subtitle1">{t('list.empty')}</Typography>
							</CardContent>
						</Card>
					)}
				</div>
				<div className="col-8">
					<Card>
						<CardContent>
							<Graph functions={functions_list} />
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}

Grapher.propTypes = {}

export default Grapher
