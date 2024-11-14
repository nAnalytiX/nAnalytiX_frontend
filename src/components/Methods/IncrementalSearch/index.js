/**
 *
 *  Methods/IncrementalSearch
 *
 */

import React, { useState } from 'react'

// NPM Libraries
// import PropTypes from 'prop-types'
// import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components
import Codes from '../Codes'
import Methods from '..'
import IncrementalSearchForm from './Form'
import Table from 'components/UI/Table'
import { incrementalSearchRuby } from './codes'
import colors from 'styles/colors'
import { Alert } from '@mui/material'

// Utils

const get_columns = (t) => [
	{
		key: 'interval',
		title: t('columns.interval'),
		align: 'center',
		render: (value) => (
			<React.Fragment>
				<span style={{ color: colors.GREY[50], fontSize: '1.4rem', marginRight: '3px' }}>[</span>
				<span style={{ fontSize: '1rem' }}>{value.x0}</span>
				<span style={{ margin: '0 4px', color: colors.GREY[50] }}>,</span>
				<span style={{ fontSize: '1rem' }}>{value.x1}</span>
				<span style={{ color: colors.GREY[50], fontSize: '1.4rem', marginLeft: '3px' }}>]</span>
			</React.Fragment>
		),
	},
	{ key: 'result', title: t('columns.result'), align: 'center', render: () => t('results.interval_found') },
]

const MethodLogic = ({ t }) => {
	const [rows, setRows] = useState([])
	const [loading, setLoading] = useState(false)

	return (
		<div className="row" style={{ flexGrow: 1 }}>
			<div className="col-12 col-lg-5">
				<IncrementalSearchForm
					onStart={() => setLoading(true)}
					onComplete={(result) => {
						setRows(result)
						setLoading(false)
					}}
				/>
			</div>

			<div className="col-12 col-lg-7">
				{rows.length > 0 ? (
					<Table rows={rows} columns={get_columns(t)} loading={loading} />
				) : (
					<Alert severity="info">{t('empty_table')}</Alert>
				)}
			</div>
		</div>
	)
}

const IncrementalSearch = (props) => {
	const { t } = useTranslation('', { keyPrefix: 'components.IncrementalSearch' })

	return (
		<Methods
			{...props}
			methodElement={<MethodLogic t={t} />}
			codeElement={<Codes ruby_code={incrementalSearchRuby(t)} />}
		/>
	)
}

IncrementalSearch.propTypes = {}

export default IncrementalSearch
