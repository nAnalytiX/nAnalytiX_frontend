/**
 *
 *  Ui/LanguageSelector
 *
 */

import React, { useState } from 'react'

// NPM Libraries
import i18n from 'i18next'
import { IconButton, Menu, MenuItem } from '@mui/material'
// import PropTypes from 'prop-types'
// import styled from '@emotion/styled'
// import { useTranslation } from 'react-i18next'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components

// Utils
import SpanishFlag from './spanish_flag.png'
import EnglishFlag from './english_flag.png'
import { ArrowDropDown } from '@mui/icons-material'

const UiLanguageSelector = () => {
	// const { t } = useTranslation('', { keyPrefix: 'components.Ui.LanguageSelector' })
	//
	const [anchorEl, setAnchorEl] = useState(null)
	const [selected_language, setSelectedLanguage] = useState(window.localStorage.getItem('i18nextLng') || 'es')

	const open = Boolean(anchorEl)

	const handleChange = (language) => {
		window.localStorage.setItem('i18nextLng', language)
		i18n.changeLanguage(language)
		setSelectedLanguage(language)
		handleClose()
	}

	const handleClose = () => setAnchorEl(null)

	const language_list = {
		es: { name: 'Español', icon: SpanishFlag },
		en: { name: 'Ingles', icon: EnglishFlag },
	}

	return (
		<React.Fragment>
			<IconButton onClick={(event) => setAnchorEl(event.currentTarget)} color="inherit" sx={{ ml: 1, mt: '-3px' }}>
				<img src={language_list[selected_language].icon} style={{ height: '20px', marginRight: '4px' }} />
				<ArrowDropDown />
			</IconButton>
			<Menu
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				{Object.keys(language_list).map((lang, index) => (
					<MenuItem key={index} onClick={() => handleChange(lang)} sx={{ width: '130px' }}>
						<img src={language_list[lang].icon} style={{ height: '20px', marginRight: '10px', marginTop: '-2px' }} />
						{language_list[lang].name}
					</MenuItem>
				))}
			</Menu>
		</React.Fragment>
	)
}

UiLanguageSelector.propTypes = {}

export default UiLanguageSelector
