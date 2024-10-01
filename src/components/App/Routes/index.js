/**
 *
 *  App/Routes
 *
 */

import React from 'react'

// NPM Libraries
// import PropTypes from 'prop-types'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import styled from '@emotion/styled'

// Components
import NavigationBar from 'components/UI/NavigationBar'
import Grapher from 'components/Grapher'
import IncrementalSearch from 'components/Methods/IncrementalSearch'
import Bisection from 'components/Methods/Bisection'
import FalsePosition from 'components/Methods/FalsePosition'
import FixedPoint from 'components/Methods/FixedPoint'
import MultipleRoots from 'components/Methods/MultipleRoots'
import Newton from 'components/Methods/Newton'
import Secant from 'components/Methods/Secant'
import GaussSimple from 'components/Methods/GaussSimple'
import GaussTotal from 'components/Methods/GaussTotal'
import GaussPartial from 'components/Methods/GaussPartial'

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
					<Route path="/methods/incremental-search" element={<IncrementalSearch />} />
					<Route path="/methods/bisection" element={<Bisection />} />
					<Route path="/methods/false-position" element={<FalsePosition />} />
					<Route path="/methods/fixed-point" element={<FixedPoint />} />
					<Route path="/methods/multiple-roots" element={<MultipleRoots />} />
					<Route path="/methods/newton" element={<Newton />} />
					<Route path="/methods/secant" element={<Secant />} />

					<Route path="/methods/gauss-simple" element={<GaussSimple />} />
					<Route path="/methods/gauss-partial" element={<GaussPartial />} />
					<Route path="/methods/gauss-total" element={<GaussTotal />} />
				</Routes>
			</MainWrapper>
		</Box>
	)
}

export default AppRoutes
