/**
 *
 *  UI/NavigationBar
 *
 */

import React from 'react'

// NPM Libraries
import { AppBar, Box, Button, IconButton, Typography } from '@mui/material'
import { Settings } from '@mui/icons-material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useLocation } from 'react-router-dom'

// import PropTypes from 'prop-types'
// import styled from '@emotion/styled'
// import { useTranslation } from 'react-i18next'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components

// Utils

const NavigationBar = () => {
	// const { t } = useTranslation('', { keyPrefix: 'components.UI.NavigationBar' })
	const navigate = useNavigate()

	return (
		<Box sx={{ flexGrow: 0, flex: 0 }}>
			<AppBar position="static">
				<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2, px: 3 }}>
					<Box onClick={() => navigate('/')} sx={{ display: 'flex', cursor: 'pointer' }}>
						<FontAwesomeIcon icon={faWaveSquare} style={{ fontSize: '1.8rem', marginTop: '1px' }} />
						<Typography variant="h6" component="div" sx={{ ml: 1, flexGrow: 1, fontSize: '1.7rem' }}>
							AnalytiX
						</Typography>

						<Button color="inherit" sx={{ ml: 4 }}>
							Ver Metodos Numericos
						</Button>
					</Box>
					<Box onClick={() => navigate('/')} sx={{ display: 'flex', alignItems: 'center' }}>
						<Button color="inherit">Login</Button>
						<IconButton color="inherit" sx={{ ml: 1, mt: '-3px' }}>
							<Settings fontSize="small" />
						</IconButton>
					</Box>
				</Box>
			</AppBar>
		</Box>
	)
}

NavigationBar.propTypes = {}

export default NavigationBar
