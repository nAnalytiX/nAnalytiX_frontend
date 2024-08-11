/**
 *
 *  App/ThemeProvider
 *
 */

import React from 'react'

// NPM Libraries
import PropTypes from 'prop-types'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

// Utils
import colors from 'styles/colors'
import { generateTheme } from 'styles/theme'
import styled from '@emotion/styled'

const MainWrapper = styled.div`
	height: 100%;
	position: absolute;
	left: 0;
	width: 100%;
	overflow: auto;
	background-color: ${colors.COMPLEMENTARY.Bg};
	color: ${colors.GREY[700]};
`

const ThemeProvider = ({ children }) => {
	return (
		<MuiThemeProvider theme={generateTheme()}>
			<MainWrapper id="main-scroll-element">{children}</MainWrapper>
		</MuiThemeProvider>
	)
}

ThemeProvider.propTypes = {
	children: PropTypes.element,
}

export default ThemeProvider
