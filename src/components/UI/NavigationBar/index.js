/**
 *
 *  UI/NavigationBar
 *
 */

import React from 'react'

// NPM Libraries
import { AppBar, Box, Button, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// import PropTypes from 'prop-types'
// import styled from '@emotion/styled'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components
import LanguageSelector from 'components/UI/LanguageSelector'

// Utils

const NavigationBar = () => {
	const { t } = useTranslation('', { keyPrefix: 'components.Ui.NavigationBar' })
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

						<Button onClick={() => navigate('/grapher')} color="inherit" sx={{ ml: 4 }}>
							{t('actions.grapher')}
						</Button>

						<Button color="inherit" sx={{ ml: 2 }}>
							{t('actions.methods')}
						</Button>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<LanguageSelector />
						<Button color="inherit">{t('actions.login')}</Button>
					</Box>
				</Box>
			</AppBar>
		</Box>
	)
}

NavigationBar.propTypes = {}

export default NavigationBar
