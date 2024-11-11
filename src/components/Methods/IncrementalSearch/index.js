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

// Utils

const get_columns = (t) => [
	{
		key: 'interval',
		title: t('columns.interval'),
		align: 'center',
		render: (value) => `[ ${value.x0} , ${value.x1} ]`,
	},
	{ key: 'result', title: t('columns.result'), align: 'center', render: () => t('results.interval_found') },
]

const MethodLogic = ({ t }) => {
	const [rows, setRows] = useState([])
	const [loading, setLoading] = useState(false)

	console.log(rows)

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
				<Table rows={rows} columns={get_columns(t)} loading={loading} />
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
