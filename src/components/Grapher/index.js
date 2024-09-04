/**
 *
 *  /Grapher
 *
 */

import React from 'react'

// NPM Libraries
import { Card, CardContent, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'
// import styled from '@emotion/styled'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components
import Graph from './Graph'

// Utils
//

const Grapher = () => {
	const { t } = useTranslation('', { keyPrefix: 'components.Grapher' })

	return (
		<div className="container-fluid">
			<div className="row mb-3">
				<div className="col">
					<Typography variant="h4">{t('title')}</Typography>
				</div>
			</div>
			<div className="row">
				<div className="col-4">
					<Card>
						<CardContent>Test</CardContent>
					</Card>
				</div>
				<div className="col-8">
					<Card>
						<CardContent>
							<Graph functions={['2', 'x^3', '2+3x', '-x^2', '1']} />
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}

Grapher.propTypes = {}

export default Grapher
