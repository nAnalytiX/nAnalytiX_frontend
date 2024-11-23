/**
 *
 *  Methods/Vandermonde
 *
 */

import React, { useState } from 'react'

// NPM Libraries
// import PropTypes from 'prop-types'
import { Alert, Box, Paper, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components
import Methods from '..'
import VandermondeForm from './Form'
import Spinner from 'components/UI/Spinner'
import { CloseParenthesis, OpenParenthesis } from 'components/UI/Inputs/Matrix'

// Utils

const Solution = ({ solution, t }) => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Paper sx={{ px: 3, py: 2, my: 4 }} elevation={0}>
				<div className="d-flex mb-4">
					<Typography variant="caption" sx={{ fontSize: '1rem', mr: '10px', mt: '15px' }}>
						{t('solution.matrix')} =
					</Typography>

					<OpenParenthesis />
					<div className="d-flex flex-column">
						{solution.matrix &&
							solution.matrix.map((row, indexJ) => (
								<div
									key={indexJ}
									style={{
										display: 'grid',
										gridTemplateColumns: `repeat(${solution.matrix.length}, 110px)`,
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

					<div style={{ width: '10px' }} />

					<OpenParenthesis />
					<div className="d-flex flex-column">
						{solution.B &&
							solution.B.map((element, index) => (
								<Typography key={index} align="center" sx={{ lineHeight: '3rem' }}>
									{element}
								</Typography>
							))}
					</div>
					<CloseParenthesis />
				</div>

				{solution.Pc && (
					<div className="d-flex align-items-center justify-content-center mb-4">
						<Typography variant="caption" sx={{ fontSize: '1rem', mr: '10px' }}>
							{t('solution.coeff')} =
						</Typography>

						<Typography sx={{ fontSize: '1rem' }}>[{solution.Pc.join(', ')}]</Typography>
					</div>
				)}

				<div className="d-flex align-items-center justify-content-center">
					<Typography variant="caption" sx={{ fontSize: '1rem', mr: '10px' }}>
						{t('solution.poly')} =
					</Typography>

					<div className="d-flex align-items-start">
						{solution.Pc &&
							solution.Pc.map((ele, index) => {
								const is_positive = Number(ele) >= 0
								const is_last = index === solution.Pc.length - 1

								return (
									<Typography key={index} sx={{ fontSize: '1rem', mr: '1px' }}>
										{is_positive && index !== 0 ? '+ ' : ' '}
										{ele}
										{!is_last && (
											<>
												<span>x</span>
												<span style={{ fontSize: '0.6rem', marginBottom: '10px' }}>
													{solution.Pc.length - index - 1}
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
			<VandermondeForm
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

const Vandermonde = () => {
	const { t } = useTranslation('', { keyPrefix: 'components.Vandermonde' })

	return (
		<Methods method_key="vandermonde" name={t('name')} methodElement={<MethodLogic t={t} />} codeElement={<span />} />
	)
}

Vandermonde.propTypes = {}

export default Vandermonde
