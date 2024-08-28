/**
 *
 *  Ui/NavigationBar/MethodsList
 *
 */

import React, { useState } from 'react'

// NPM Libraries
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'
// import styled from '@emotion/styled'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components

// Utils
import { methods_list } from './helpers'

const MethodsList = () => {
	const { t } = useTranslation('', { keyPrefix: 'components.MethodsList' })
	const { t: t_methods } = useTranslation('', { keyPrefix: 'common.methods' })

	const [anchorEl, setAnchorEl] = useState(null)

	const handleClose = () => setAnchorEl(null)

	const open = Boolean(anchorEl)

	console.log(methods_list)

	return (
		<React.Fragment>
			<Button color="inherit" sx={{ ml: 2 }} onClick={(event) => setAnchorEl(event.currentTarget)}>
				{t('button')}
			</Button>

			<Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
				<Box sx={{ display: 'flex', p: 1 }}>
					{Object.keys(methods_list).map((list, list_index) => (
						<Box key={list_index} sx={{ width: '350px' }}>
							<Typography variant="overline" gutterBottom>
								{t_methods(`${list}._`)}
							</Typography>
							{methods_list[list].map((method, method_index) => (
								<MenuItem key={method_index}>{t_methods(`${list}.${method}`)}</MenuItem>
							))}
						</Box>
					))}
				</Box>
			</Menu>
		</React.Fragment>
	)
}

MethodsList.propTypes = {}

export default MethodsList
