/**
 *
 *  /Grapher
 *
 */

import React, { useMemo, useState } from 'react'

// NPM Libraries
import styled from '@emotion/styled'
import { Card, CardContent, IconButton, List, ListItem, Typography } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components
import Graph, { functions_colors } from './Graph'
import colors from 'styles/colors'

// Utils
//

const Circle = styled.span`
	width: 25px;
	height: 25px;
	border-radius: 25px;
	border: 1px solid black;
	margin-right: 15px;
	cursor: pointer;
`

const Grapher = () => {
	const { t } = useTranslation('', { keyPrefix: 'components.Grapher' })

	const [functions_list, setFunctionsList] = useState([
		{ fn: '2', disabled: false },
		{ fn: 'x^3', disabled: false },
		{ fn: '2+cos(x)', disabled: true },
		{ fn: '-x^3', disabled: false },
	])

	const formated_functions_list = useMemo(
		() =>
			functions_list.reduce((acc, current) => {
				if (!current.disabled) acc = [...acc, current.fn]

				return acc
			}, []),
		[functions_list]
	)

	const handleDelete = (index) => {
		let new_list = [...functions_list]

		new_list = new_list.filter((_, i) => index !== i)

		setFunctionsList(new_list)
	}

	const handleEdit = (index, new_value) => {
		let new_list = [...functions_list]

		new_list = new_list.map((item, i) => (index === i ? new_value : item))
		console.log(new_list)

		setFunctionsList(new_list)
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
					<Card>
						<CardContent>
							<List sx={{ p: 0, borderTop: `1px solid ${colors.COMPLEMENTARY.border}` }}>
								{functions_list.map(({ fn, disabled }, index) => (
									<ListItem
										key={index}
										sx={{
											p: 3,
											borderBottom: `1px solid ${colors.COMPLEMENTARY.border}`,
										}}
										secondaryAction={
											<IconButton onClick={() => handleDelete(index)} edge="end" size="small">
												<Delete color="error" />
											</IconButton>
										}
									>
										<Circle
											onClick={() => handleEdit(index, { fn, disabled: !disabled })}
											style={{ backgroundColor: disabled ? 'transparent' : functions_colors[index] }}
										/>
										F(x) = {fn}
									</ListItem>
								))}

								{functions_list.length === 0 && (
									<ListItem
										sx={{
											p: 3,
											borderBottom: `1px solid ${colors.COMPLEMENTARY.border}`,
											justifyContent: 'center',
										}}
									>
										<Typography variant="subtitle1">{t('list.empty')}</Typography>
									</ListItem>
								)}
							</List>
						</CardContent>
					</Card>
				</div>
				<div className="col-8">
					<Card>
						<CardContent>
							<Graph functions={formated_functions_list} />
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}

Grapher.propTypes = {}

export default Grapher
