/**
 *
 *  Methods/SplineCubicc
 *
 */

import React, { useState } from 'react'

// NPM Libraries
// import PropTypes from 'prop-types'
import { Alert, Box, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { useTranslation } from 'react-i18next'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components
import Methods from '..'
import SplineCubicForm from './Form'
import Spinner from 'components/UI/Spinner'

const Solution = ({ solution }) => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Paper sx={{ px: 3, py: 2, my: 4 }} elevation={0}>
				{solution.coefficients && (
					<Table sx={{ minWidth: 650 }} className="border mb-4">
						<TableHead>
							<TableRow>
								<TableCell align="center">I</TableCell>
								<TableCell align="center">Coeff1</TableCell>
								<TableCell align="center">Coeff2</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{solution.coefficients.map((value, index) => (
								<TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
									<TableCell align="center">{index}</TableCell>
									<TableCell align="center">{value[0]}</TableCell>
									<TableCell align="center">{value[1]}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				)}

				{solution.polynomials && (
					<Table sx={{ minWidth: 650 }} className="border">
						<TableHead>
							<TableRow>
								<TableCell align="center">I</TableCell>
								<TableCell align="center">Tracers</TableCell>
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
			<SplineCubicForm
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

			{solution && !solution.errors?.length && <Solution solution={solution} />}

			{loading && (
				<div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
					<Spinner />
				</div>
			)}
		</div>
	)
}

const SplineCubic = () => {
	const { t } = useTranslation('', { keyPrefix: 'components.SplineCubic' })

	return (
		<Methods method_key="cubic_spline" name={t('name')} methodElement={<MethodLogic t={t} />} codeElement={<span />} />
	)
}

SplineCubic.propTypes = {}

export default SplineCubic
