/**
 *
 *  /Methods
 *
 */

import React, { useState } from 'react'

// NPM Libraries
import { Box, Tab, Tabs } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Title from './Title'
// import PropTypes from 'prop-types'
// import styled from '@emotion/styled'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components

// Utils

const TabPanel = (props) => {
	const { children, value, index, ...other } = props

	return (
		<div
			className="container"
			role="tabpanel"
			hidden={value !== index}
			style={{ width: '100%', marginTop: '15px' }}
			{...other}
		>
			{value === index && children}
		</div>
	)
}

const Methods = ({ method_key, name, methodElement, codeElement }) => {
	const { t } = useTranslation('', { keyPrefix: 'components.Methods' })
	const [value, setValue] = useState(0)

	const handleChange = (_, newValue) => {
		setValue(newValue)
	}

	return (
		<div className="container">
			<Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Title method_name={name} method_key={method_key} />

				<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
					<Tab label={t('tabs.method')} disableRipple />
					<Tab label={t('tabs.code')} disableRipple />
				</Tabs>

				<TabPanel value={value} index={0}>
					{methodElement}
				</TabPanel>

				<TabPanel value={value} index={1}>
					{codeElement}
				</TabPanel>
			</Box>
		</div>
	)
}

Methods.propTypes = {}

export default Methods
