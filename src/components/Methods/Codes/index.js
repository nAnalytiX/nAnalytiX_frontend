/**
 *
 *  Methods/Codes
 *
 */

import React from 'react'

// NPM Libraries
import PropTypes from 'prop-types'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { Card, CardContent } from '@mui/material'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism' // Tema de Prism.js
// import { useTranslation } from 'react-i18next'
// import styled from '@emotion/styled'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components

// Utils

const Codes = ({ ruby_code = '' }) => {
	// const { t } = useTranslation('', { keyPrefix: 'components.Methods.Codes' })

	return (
		<Card sx={{ mb: 2 }}>
			<CardContent>
				<SyntaxHighlighter language="ruby" style={dracula} showLineNumbers={true}>
					{ruby_code}
				</SyntaxHighlighter>
			</CardContent>
		</Card>
	)
}

Codes.propTypes = {
	ruby_code: PropTypes.string,
}

export default Codes
