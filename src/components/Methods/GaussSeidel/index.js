/**
 *
 *  Methods/GaussSeidel
 *
 */

import React, { useState } from 'react'

// NPM Libraries
// import PropTypes from 'prop-types'
// import styled from '@emotion/styled'
import { Box, Paper, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components
// import Codes from '../Codes'
import Methods from '..'
// import { gaussTotalRuby } from './codes'
import GaussSeidelForm from './Form'
import { CloseParenthesis, OpenParenthesis } from 'components/UI/Inputs/Matrix'
import Spinner from 'components/UI/Spinner'

// Utils

const Solution = ({ solution: { iterations, T, C, spectral_radius }, t }) => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Paper sx={{ px: 3, py: 2, my: 4 }} elevation={0}>
				<div className="d-flex mb-4">
					<Typography variant="caption" sx={{ fontSize: '1rem', mr: '10px', mt: '15px' }}>
						T =
					</Typography>

					<OpenParenthesis />
					<div className="d-flex flex-column">
						{T.map((row, indexJ) => (
							<div
								key={indexJ}
								style={{
									display: 'grid',
									gridTemplateColumns: `repeat(${T.length}, 110px)`,
									gridGap: '20px',
								}}
							>
								{row.map((element, indexI) => (
									<Typography key={indexI} align="center" sx={{ lineHeight: '3rem' }}>
										{element}
									</Typography>
								))}
							</div>
						))}
					</div>
					<CloseParenthesis />
				</div>

				<div className="d-flex justify-content-center mb-4">
					<Typography variant="caption" sx={{ fontSize: '1rem', mr: '10px', mt: '15px' }}>
						C =
					</Typography>

					<OpenParenthesis />
					<div className="d-flex flex-column">
						{C.map((element, index) => (
							<Typography key={index} align="center" sx={{ lineHeight: '3rem' }}>
								{element}
							</Typography>
						))}
					</div>
					<CloseParenthesis />
				</div>

				<Typography className="mb-3" align="center">
					{t('solution.spectral')} = {spectral_radius}
				</Typography>

				<div className="d-flex flex-column align-items-center">
					{iterations &&
						iterations.map((iteration, index) => (
							<div key={index} className="d-flex mb-4">
								<div className="d-flex flex-column">
									<Typography variant="caption" sx={{ fontSize: '1rem', mr: '10px', mt: '15px' }}>
										{t('solution.iteration')} {iteration.iteration}
									</Typography>
									<Typography variant="caption" sx={{ fontSize: '1rem', mr: '10px', mt: '15px' }}>
										{t('solution.error')} {iteration.error}
									</Typography>
								</div>

								<OpenParenthesis />
								<div className="d-flex flex-column">
									{iteration.value.map((element, index) => (
										<Typography key={index} align="center" sx={{ lineHeight: '3rem' }}>
											{element}
										</Typography>
									))}
								</div>
								<CloseParenthesis />
							</div>
						))}
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
			<GaussSeidelForm
				onStart={() => setLoading(true)}
				onComplete={(solution) => {
					setLoading(false)
					setSolution(solution)
				}}
			/>

			{solution && <Solution solution={solution} t={t} />}

			{loading && (
				<div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
					<Spinner />
				</div>
			)}
		</div>
	)
}

const GaussSeidel = () => {
	const { t } = useTranslation('', { keyPrefix: 'components.GaussSeidel' })

	return (
		<Methods method_key="gauss_seidel" name={t('name')} methodElement={<MethodLogic t={t} />} codeElement={<span />} />
	)
}

GaussSeidel.propTypes = {}

export default GaussSeidel
