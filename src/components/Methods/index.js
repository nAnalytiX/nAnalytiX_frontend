/**
 *
 *  /Methods
 *
 */

import React, { useState } from 'react'

// NPM Libraries
import { Box, Tab, Tabs, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
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

const Methods = ({ method, methodElement, codeElement, pseudoElement }) => {
	const { t } = useTranslation('', { keyPrefix: 'components.Methods' })
	const [value, setValue] = useState(0)

	const handleChange = (_, newValue) => {
		setValue(newValue)
	}

	return (
		<Box sx={{ px: 2, py: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Typography variant="h3" sx={{ mb: 1 }}>
				{method}
			</Typography>

			<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
				<Tab label={t('tabs.method')} disableRipple />
				<Tab label={t('tabs.code')} disableRipple />
				<Tab label={t('tabs.pseudo')} disableRipple />
			</Tabs>

			<TabPanel value={value} index={0}>
				{methodElement}
			</TabPanel>

			<TabPanel value={value} index={1}>
				{codeElement}
			</TabPanel>

			<TabPanel value={value} index={2}>
				{pseudoElement}
			</TabPanel>
		</Box>
	)
}

Methods.propTypes = {}

export default Methods
