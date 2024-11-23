/**
 *
 *  /DiffDivide
 *
 */

import React, { useState } from 'react'

// NPM Libraries
// import PropTypes from 'prop-types'
import { Alert, Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components
import Methods from '..'
import DiffDivideForm from './Form'
import Spinner from 'components/UI/Spinner'

const Solution = ({ solution, t }) => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Paper sx={{ px: 3, py: 2, my: 4 }} elevation={0}>
				{solution.table && (
					<div className="d-flex mb-4">
						<Table sx={{ minWidth: 650 }} className="border">
							<TableHead>
								<TableRow>
									<TableCell align="center">I</TableCell>
									<TableCell align="center">y = f(xi)</TableCell>
									<TableCell align="center">1</TableCell>
									<TableCell align="center">2</TableCell>
									<TableCell align="center">3</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{solution.table.map((row, indexI) => (
									<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell align="center">{indexI}</TableCell>
										{row.map((value, index) => (
											<TableCell key={index} align="center">
												{value}
											</TableCell>
										))}
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				)}

				{solution.newton_coefficients && (
					<div className="d-flex align-items-center justify-content-center mb-4">
						<Typography variant="caption" sx={{ fontSize: '1rem', mr: '10px' }}>
							{t('solution.coeff')} =
						</Typography>

						<Typography sx={{ fontSize: '1rem' }}>[{solution.newton_coefficients.join(', ')}]</Typography>
					</div>
				)}

				<div className="d-flex align-items-center justify-content-center">
					<Typography variant="caption" sx={{ fontSize: '1rem', mr: '10px' }}>
						{t('solution.poly')} =
					</Typography>

					<div className="d-flex align-items-start">
						{solution.newton_coefficients &&
							solution.newton_coefficients.map((ele, index) => {
								const is_positive = Number(ele) >= 0
								const is_last = index === solution.newton_coefficients.length - 1

								return (
									<Typography key={index} sx={{ fontSize: '1rem', mr: '1px' }}>
										{is_positive && index !== 0 ? '+ ' : ' '}
										{ele}
										{!is_last && (
											<>
												<span>x</span>
												<span style={{ fontSize: '0.6rem', marginBottom: '10px' }}>
													{solution.newton_coefficients.length - index - 1}
												</span>
											</>
										)}
									</Typography>
								)
							})}
					</div>
				</div>
			</Paper>
		</Box>
	)
}

const MethodLogic = ({ t }) => {
	const [solution, setSolution] = useState()
	const [loading, setLoading] = useState(false)

	return (
		<div style={{ position: 'relative' }}>
			<DiffDivideForm
				onStart={() => setLoading(true)}
				onComplete={(solution) => {
					setLoading(false)
					setSolution(solution)
				}}
			/>

			{solution?.errors && (
				<div className="d-flex justify-content-center mt-3">
					<Alert severity="error" sx={{ width: '500px' }}>
						<ul className="m-0">
							{solution.errors.map((error) => (
								<li key={error}>{t(`errors.${error}`)}</li>
							))}
						</ul>
					</Alert>
				</div>
			)}

			{solution && !solution.errors?.length && <Solution solution={solution} t={t} />}

			{loading && (
				<div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
					<Spinner />
				</div>
			)}
		</div>
	)
}

const DiffDivide = () => {
	const { t } = useTranslation('', { keyPrefix: 'components.DiffDivide' })

	return (
		<Methods method_key="diff_divide" name={t('name')} methodElement={<MethodLogic t={t} />} codeElement={<span />} />
	)
}

DiffDivide.propTypes = {}

export default DiffDivide
