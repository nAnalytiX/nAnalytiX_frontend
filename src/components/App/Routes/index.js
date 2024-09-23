/**
 *
 *  App/Routes
 *
 */

import React from 'react'

// NPM Libraries
// import PropTypes from 'prop-types'
import { Routes, Route } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import styled from '@emotion/styled'

// Components
import NavigationBar from 'components/UI/NavigationBar'
import Grapher from 'components/Grapher'
import IncrementalSearch from 'components/Methods/IncrementalSearch'

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
					<Route
						path="/"
						element={
							<div>
								<Typography variant="h1" gutterBottom>
									h1. Heading
								</Typography>
								<Typography variant="h2" gutterBottom>
									h2. Heading
								</Typography>
								<Typography variant="h3" gutterBottom>
									h3. Heading
								</Typography>
								<Typography variant="h4" gutterBottom>
									h4. Heading
								</Typography>
								<Typography variant="h5" gutterBottom>
									h5. Heading
								</Typography>
								<Typography variant="h6" gutterBottom>
									h6. Heading
								</Typography>
								<Typography variant="subtitle1" gutterBottom>
									subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
								</Typography>
								<Typography variant="subtitle2" gutterBottom>
									subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
								</Typography>
								<Typography variant="body1" gutterBottom>
									body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
									suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos
									laborum fugiat deleniti? Eum quasi quidem quibusdam.
								</Typography>
								<Typography variant="body2" gutterBottom>
									body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
									suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos
									laborum fugiat deleniti? Eum quasi quidem quibusdam.
								</Typography>
								<Typography variant="button" display="block" gutterBottom>
									button text
								</Typography>
								<Typography variant="caption" display="block" gutterBottom>
									caption text
								</Typography>
								<Typography variant="overline" display="block" gutterBottom>
									overline text
								</Typography>
							</div>
						}
					/>

					<Route path="/grapher" element={<Grapher />} />

					{/* Methods */}
					<Route path="/methods/incremental-search" element={<IncrementalSearch />} />
				</Routes>
			</MainWrapper>
		</Box>
	)
}

export default AppRoutes
