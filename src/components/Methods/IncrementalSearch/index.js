/**
 *
 *  Methods/IncrementalSearch
 *
 */

import React from 'react'

// NPM Libraries
import { Card, CardContent } from '@mui/material'
// import PropTypes from 'prop-types'
// import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components
import Codes from '../Codes'
import Methods from '..'
import { incrementalSearchRuby } from './codes'
import IncrementalSearchForm from './Form'

// Utils

const MethodLogic = () => {
	return (
		<div className="row" style={{ flexGrow: 1 }}>
			<div className="col-12 col-lg-5">
				<Card></Card>
				<IncrementalSearchForm />
			</div>

			<div className="col-12 col-lg-7">
				<Card>
					<CardContent>Parametros</CardContent>
				</Card>
			</div>
		</div>
	)
}

const IncrementalSearch = () => {
	const { t } = useTranslation('', { keyPrefix: 'components.IncrementalSearch' })

	return (
		<Methods
			method={t('name')}
			methodElement={<MethodLogic />}
			codeElement={<Codes ruby_code={incrementalSearchRuby(t)} />}
		/>
	)
}

IncrementalSearch.propTypes = {}

export default IncrementalSearch
