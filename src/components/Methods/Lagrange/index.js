/**
 *
 *  /Lagrange
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
import LagrangeForm from './Form'
import Spinner from 'components/UI/Spinner'

const Solution = ({ solution, t }) => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Paper sx={{ px: 3, py: 2, my: 4 }} elevation={0}>
				{solution.polynomials && (
					<div className="d-flex mb-4">
						<Typography variant="caption" sx={{ fontSize: '1rem', mr: '10px', mt: '15px' }}>
							{t('solution.table')} =
						</Typography>
						<Table sx={{ minWidth: 650 }} className="border">
							<TableHead>
								<TableRow>
									<TableCell align="center">I</TableCell>
									<TableCell align="center">Li(x)</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{solution.polynomials.map((value, index) => (
									<TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell align="center">{index}</TableCell>
										<TableCell align="center">{value}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				)}

				{solution.polynom && (
					<div className="d-flex flex-column align-items-center justify-content-center mb-4">
						<Typography variant="caption" sx={{ fontSize: '1rem', mb: '10px' }}>
							{t('solution.coeff')} =
						</Typography>

						<Typography sx={{ fontSize: '1rem' }} textAlign="center">
							{solution.polynom}
						</Typography>
					</div>
				)}
			</Paper>
		</Box>
	)
}

const MethodLogic = ({ t }) => {
	const [solution, setSolution] = useState()
	const [loading, setLoading] = useState(false)

	return (
		<div style={{ position: 'relative' }}>
			<LagrangeForm
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

const Lagrange = () => {
	const { t } = useTranslation('', { keyPrefix: 'components.Lagrange' })

	return <Methods method_key="lagrange" name={t('name')} methodElement={<MethodLogic t={t} />} codeElement={<span />} />
}

Lagrange.propTypes = {}

export default Lagrange
