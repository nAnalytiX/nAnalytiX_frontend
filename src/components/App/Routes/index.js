/**
 *
 *  App/Routes
 *
 */

import React from 'react'

// NPM Libraries
// import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import styled from '@emotion/styled'

// Components
import NavigationBar from 'components/UI/NavigationBar'
import Grapher from 'components/Grapher'
import MethodsProvider from 'components/Methods/Provider'

const MainWrapper = styled.div`
	height: 100% !important;
	flex: 1;
	padding: 20px;
`

const AppRoutes = () => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
			<NavigationBar />
			<MainWrapper>
				<Routes>
					<Route path="/" element={<div></div>} />

					<Route path="/grapher" element={<Grapher />} />

					{/* Methods */}
					<Route path="/methods/:method_key" element={<MethodsProvider />} />
				</Routes>
			</MainWrapper>
		</Box>
	)
}

export default AppRoutes
