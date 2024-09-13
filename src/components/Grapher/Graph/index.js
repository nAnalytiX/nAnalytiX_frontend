/**
 *
 *  Grapher/Graph
 *
 */

import React, { useEffect, useRef, useState } from 'react'

// NPM Libraries
import functionPlot from 'function-plot'
import { Box, Card, CardContent, IconButton, Popover, Switch, TextField, Typography } from '@mui/material'
import { Settings } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components

// Utils
import S from './styles'

const DomainInput = ({ value, handleUpdate }) => {
	const [internal_value, setInternalValue] = useState(value)

	return (
		<TextField
			value={internal_value}
			onChange={(e) => setInternalValue(e.target.value)}
			onBlur={() => {
				const updated = handleUpdate(internal_value)

				if (!updated) setInternalValue(value)
			}}
			type="number"
			size="small"
			variant="outlined"
			hiddenLabel
		/>
	)
}

const Graph = ({ functions = [] }) => {
	const { t } = useTranslation('', { keyPrefix: 'components.Graph' })

	const node = useRef(null)
	const [anchorEl, setAnchorEl] = useState(null)
	const [width, setwidth] = useState(0)
	const [grid, setGrid] = useState(true)
	const [x_domain, setXDomain] = useState([-10, 10])
	const [y_domain, setYDomain] = useState([-10, 10])

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
				yAxis: { domain: y_domain },
				xAxis: { domain: x_domain },
			}

			const instance = functionPlot(options)

			instance.meta.xAxis.tickPadding(10)
			instance.meta.yAxis.tickPadding(15)

			functionPlot(options)
		}
	}, [node, width, grid, functions, y_domain, x_domain])

	const handleOpenSettings = (event) => setAnchorEl(event.target)
	const handleCloseSettings = () => setAnchorEl(null)

	const format_data = (functions) => {
		if (functions.length === 0) []

		return functions.reduce((acc, current) => {
			if (!current.disabled)
				acc = [
					...acc,
					{
						fn: current.fn,
						color: current.color,
						graphType: 'polyline',
					},
				]

			return acc
		}, [])
	}

	const handleChangeDomain = (domain, axis, val, callback) => {
		let changed = false
		let new_domain = [...domain]
		const new_value = parseFloat(val)

		if (new_value <= 100 && new_value >= -100) {
			if (axis === 0) {
				if (new_value < domain[1]) changed = true
			} else {
				if (new_value > domain[0]) changed = true
			}

			if (changed) new_domain[axis] = new_value
		}

		callback([...new_domain])

		return changed
	}

	return (
		<Card>
			<CardContent sx={{ p: '0 !important' }}>
				<Box sx={{ float: 'right', mr: '10px', mb: '-7px' }}>
					<IconButton onClick={handleOpenSettings} color="primary" size="small">
						<Settings />
					</IconButton>
				</Box>
				<S.GraphContainer ref={node} />

				<Popover
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
					<Box sx={{ width: '200px', p: 2 }}>
						<Typography variant="subtitle1" align="center">
							{t('settings.title')}
						</Typography>

						<S.SettingsFieldContainer>
							<Typography variant="body2">x Max</Typography>
							<DomainInput
								value={x_domain[1]}
								handleUpdate={(new_value) => handleChangeDomain(x_domain, 1, new_value, setXDomain)}
							/>
						</S.SettingsFieldContainer>

						<S.SettingsFieldContainer>
							<Typography variant="body2">x Min</Typography>
							<DomainInput
								value={x_domain[0]}
								handleUpdate={(new_value) => handleChangeDomain(x_domain, 0, new_value, setXDomain)}
							/>
						</S.SettingsFieldContainer>

						<S.SettingsFieldContainer>
							<Typography variant="body2">y Max</Typography>
							<DomainInput
								value={y_domain[1]}
								handleUpdate={(new_value) => handleChangeDomain(y_domain, 1, new_value, setYDomain)}
							/>
						</S.SettingsFieldContainer>

						<S.SettingsFieldContainer>
							<Typography variant="body2">y Min</Typography>
							<DomainInput
								value={y_domain[0]}
								handleUpdate={(new_value) => handleChangeDomain(y_domain, 0, new_value, setYDomain)}
							/>
						</S.SettingsFieldContainer>

						<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
							<Typography variant="body2">{t('settings.grid')}</Typography>
							<Switch checked={grid} onChange={() => setGrid(!grid)} />
						</Box>
					</Box>
				</Popover>
			</CardContent>
		</Card>
	)
}

Graph.propTypes = {}

export default Graph
