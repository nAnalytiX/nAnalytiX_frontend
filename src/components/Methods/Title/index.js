/**
 *
 *  Methods/Title
 *
 */

import React from 'react'

// NPM Libraries
import { Box, IconButton, Typography } from '@mui/material'
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import styled from '@emotion/styled'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components

// Utils
import { methods_list_keys } from 'utils/methods'

const Title = ({ method_name, method_key }) => {
	const navigate = useNavigate()

	const current_method_index = methods_list_keys.findIndex((m) => method_key === m)

	const handleChangeMethod = (new_index) => {
		const new_route = `/methods/${methods_list_keys[new_index].replace('_', '-')}`

		navigate(new_route)
	}

	return (
		<Box sx={{ width: '50%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
			<IconButton
				onClick={() => handleChangeMethod(current_method_index - 1)}
				size="small"
				sx={{ mr: '25px', visibility: current_method_index === 0 ? 'hidden' : 'visible' }}
			>
				<KeyboardDoubleArrowLeft color="primary" />
			</IconButton>

			<Typography variant="h3" align="center">
				{method_name}
			</Typography>

			<IconButton
				onClick={() => handleChangeMethod(current_method_index + 1)}
				size="small"
				sx={{ ml: '25px', visibility: current_method_index === methods_list_keys.length ? 'hidden' : 'visible' }}
			>
				<KeyboardDoubleArrowRight color="primary" />
			</IconButton>
		</Box>
	)
}

Title.propTypes = {}

export default Title
