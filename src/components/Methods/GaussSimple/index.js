/**
 *
 *  /GaussSimple
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
import Codes from '../Codes'
import Methods from '..'
import { gaussSimpleRuby } from './codes'
import GaussSimpleForm from './Form'
import { CloseParenthesis, OpenParenthesis } from 'components/UI/Inputs/Matrix'
import Spinner from 'components/UI/Spinner'

// Utils

const Solution = ({ solution: { result, iterations }, t }) => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Paper sx={{ px: 3, py: 2, my: 4 }} elevation={0}>
				{iterations.map((iteration, index) => (
					<div key={index} className="d-flex mb-4">
						<Typography variant="caption" sx={{ fontSize: '1rem', mr: '10px', mt: '15px' }}>
							{t('solution.step')} {iteration.step} =
						</Typography>
						<OpenParenthesis />
						<div className="d-flex flex-column">
							{iteration.matrix.map((row, indexJ) => (
								<div
									key={indexJ}
									style={{
										display: 'grid',
										gridTemplateColumns: `repeat(${iteration.matrix.length}, 110px)`,
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
							{iteration.vector.map((element, index) => (
								<Typography key={index} align="center" sx={{ lineHeight: '3rem' }}>
									{element}
								</Typography>
							))}
						</div>
						<CloseParenthesis />
					</div>
				))}

				<Typography align="center" sx={{ mb: 3 }}>
					{t('solution.regressive')}
				</Typography>

				<div className="d-flex justify-content-center mb-3">
					<Typography variant="caption" sx={{ fontSize: '1rem', mr: '10px', mt: '15px' }}>
						x =
					</Typography>
					<OpenParenthesis />
					<div className="d-flex flex-column">
						{result.map((element, index) => (
							<Typography key={index} align="center" sx={{ lineHeight: '3rem' }}>
								{element}
							</Typography>
						))}
					</div>
					<CloseParenthesis />
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
			<GaussSimpleForm
				onStart={() => setLoading(true)}
				onComplete={(solution) => {
					setLoading(false)
					setSolution(solution)
				}}
			/>

			{solution && solution?.result && <Solution solution={solution} t={t} />}

			{loading && (
				<div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
					<Spinner />
				</div>
			)}
		</div>
	)
}

const GaussSimple = () => {
	const { t } = useTranslation('', { keyPrefix: 'components.GaussSimple' })

	return (
		<Methods
			method_key="gauss_simple"
			name={t('name')}
			methodElement={<MethodLogic t={t} />}
			codeElement={<Codes ruby_code={gaussSimpleRuby(t)} />}
		/>
	)
}

GaussSimple.propTypes = {}

export default GaussSimple
