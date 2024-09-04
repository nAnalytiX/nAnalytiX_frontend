/**
 *
 *  Grapher/Graph
 *
 */

import React, { useEffect, useRef, useState } from 'react'

// NPM Libraries
import functionPlot from 'function-plot'
import { Box, Card, CardContent, IconButton, Menu, MenuItem, Switch, Typography } from '@mui/material'
import { Settings } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components

// Utils
import colors from 'styles/colors'
import S from './styles'

const functions_colors = [
	colors.PRIMARY['500'],
	colors.ERROR['500'],
	colors.INFO['500'],
	colors.COMPLEMENTARY['orange'],
	colors.COMPLEMENTARY['purple'],
]

const Graph = ({ functions = [] }) => {
	const { t } = useTranslation('', { keyPrefix: 'components.Graph' })

	const node = useRef(null)
	const [anchorEl, setAnchorEl] = useState(null)
	const [width, setwidth] = useState(0)
	const [grid, setGrid] = useState(true)

	useEffect(() => {
		const observer = new ResizeObserver((entries) => {
			setwidth(entries[0].contentRect.width)
		})
		observer.observe(node.current)

		return () => node.current && observer.unobserve(node.current)
	}, [])

	useEffect(() => {
		if (node.current) {
			const data = format_data(functions)

			const options = {
				target: node.current,
				data,
				grid,
				width: width,
				height: width * (4 / 6),
				yAxis: { domain: [-10, 10] },
				xAxis: { domain: [-10, 10] },
			}

			const instance = functionPlot(options)

			instance.meta.xAxis.tickPadding(10)
			instance.meta.yAxis.tickPadding(15)

			functionPlot(options)
		}
	}, [node, width, grid, functions])

	const handleOpenSettings = (event) => setAnchorEl(event.target)
	const handleCloseSettings = () => setAnchorEl(null)

	const format_data = (functions) => {
		if (functions.length === 0) []

		return functions.map((fn, index) => ({ fn, color: functions_colors[index] }))
	}

	return (
		<Card>
			<CardContent sx={{ p: '0 !important' }}>
				<IconButton
					onClick={handleOpenSettings}
					color="primary"
					size="small"
					sx={{ float: 'right', mr: '10px', mb: '-7px' }}
				>
					<Settings />
				</IconButton>
				<S.GraphContainer ref={node} />

				<Menu
					open={!!anchorEl}
					anchorEl={anchorEl}
					onClose={handleCloseSettings}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
				>
					<Box sx={{ width: '170px', p: 1 }}>
						<Typography variant="subtitle1" align="center">
							{t('settings.title')}
						</Typography>

						<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
							<Typography variant="body2">{t('settings.grid')}</Typography>
							<Switch checked={grid} onChange={() => setGrid(!grid)} />
						</Box>
					</Box>
				</Menu>
			</CardContent>
		</Card>
	)
}

Graph.propTypes = {}

export default Graph
