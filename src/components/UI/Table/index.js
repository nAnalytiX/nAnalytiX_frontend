/**
 *
 *  Ui/Table
 *
 */

import React from 'react'

// NPM Libraries
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import colors from 'styles/colors'

// Components

// Utils

const Table = ({ rows, columns, loading }) => {
	// const { t } = useTranslation('', { keyPrefix: 'components.Ui.Table' })

	return (
		<TableContainer component={Paper} sx={{ mb: 4 }}>
			<MuiTable sx={{ minWidth: 650 }}>
				<TableHead>
					<TableRow>
						{columns.map((column) => (
							<TableCell key={column.key} align={column.align || 'left'} sx={{ maxWidth: column.maxWidth || 'auto' }}>
								{column.title}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} hover>
							{columns.map((column) => {
								let value = ''

								if (column.render) {
									value = column.render(row)
								} else {
									value = row[column.key] || ''
								}

								return (
									<TableCell
										key={column.key}
										align={column.align || 'left'}
										sx={{ maxWidth: column.maxWidth || 'auto' }}
									>
										{value}
									</TableCell>
								)
							})}
						</TableRow>
					))}
				</TableBody>
			</MuiTable>
			{loading && (
				<Box
					sx={{
						width: '100%',
						height: '100px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						padding: '10px 0',
					}}
				>
					<FontAwesomeIcon icon={faSpinner} size="xl" color={colors.PRIMARY[500]} spin />
				</Box>
			)}
		</TableContainer>
	)
}

Table.propTypes = {
	rows: PropTypes.array,
	columns: PropTypes.array,
	loading: PropTypes.bool,
}

export default Table
