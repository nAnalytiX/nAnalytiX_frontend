/**
 *
 *  Methods/Secant
 *
 */

import React, { useState } from 'react'

// NPM Libraries
// import PropTypes from 'prop-types'
// import styled from '@emotion/styled'
import { Alert } from '@mui/material'
import { useTranslation } from 'react-i18next'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components
import Codes from '../Codes'
import Methods from '..'
import SecantForm from './Form'
import Table from 'components/UI/Table'
import Spinner from 'components/UI/Spinner'
import { secantRuby } from './codes'

// Utils
import { get_columns } from '../Newton'

const MethodLogic = ({ t }) => {
	const [solution, setSolution] = useState({ iterations: [], errors: [] })
	const [loading, setLoading] = useState(false)

	return (
		<div className="row" style={{ flexGrow: 1 }}>
			<div className="col-12 col-lg-5">
				<SecantForm
					onStart={() => setLoading(true)}
					onComplete={(result) => {
						setSolution(result)
						setLoading(false)
					}}
				/>
			</div>

			<div className="col-12 col-lg-7" style={{ position: 'relative' }}>
				{solution.errors.length ? (
					<Alert severity="error">
						<ul className="m-0">
							{solution.errors.map((error) => (
								<li key={error}>{t(`errors.${error}`)}</li>
							))}
						</ul>
					</Alert>
				) : (
					<React.Fragment>
						{solution.conclution && (
							<Alert severity="success" className="mb-2">
								{t(`conclution.${'root_found'}`)} <b>{solution.conclution.value}</b>.
							</Alert>
						)}
					</React.Fragment>
				)}

				{solution.iterations.length > 0 ? (
					<Table rows={solution.iterations} columns={get_columns(t)} loading={loading} />
				) : (
					<React.Fragment>
						{!solution.errors.length && <Alert severity="info">{t('empty_table')}</Alert>}
					</React.Fragment>
				)}

				{loading && (
					<div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
						<Spinner />
					</div>
				)}
			</div>
		</div>
	)
}

const Secant = (props) => {
	const { t } = useTranslation('', { keyPrefix: 'components.Secant' })

	return <Methods {...props} methodElement={<MethodLogic t={t} />} codeElement={<Codes ruby_code={secantRuby(t)} />} />
}

Secant.propTypes = {}

export default Secant
