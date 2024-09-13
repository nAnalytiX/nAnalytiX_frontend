/**
 *
 *  Ui/FunctionInput
 *
 */

import React, { useEffect, useState } from 'react'

// NPM Libraries
import styled from '@emotion/styled'
import * as math from 'mathjs'
import { Button, InputAdornment, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components

// Utils
// import S from './styles'
import { Box } from '@mui/system'
import { Warning } from '@mui/icons-material'

const FieldContainer = styled.div`
	.MuiInputBase-root {
		.MuiInputAdornment-root {
			& p {
				letter-spacing: 1px;
			}
		}
	}
`

const FunctionInput = ({ default_value, editing, handleSave, handleCancel, main_button_text }) => {
	const { t } = useTranslation('', { keyPrefix: 'components.FunctionInput' })

	const [value, setValue] = useState('')
	const [error, setError] = useState(false)

	useEffect(() => {
		default_value && setValue(default_value)
	}, [default_value])

	const onChange = (equation) => {
		setValue(equation)

		try {
			math.parse(equation)

			const scope = { x: 1 }
			math.evaluate(equation, scope)

			setError(false)

			return true
		} catch (e) {
			setError(true)
			return false
		}
	}

	const onSave = () => {
		if (!error && value !== '') {
			handleSave(value)
			setValue('')
		}
	}

	const onCancel = () => {
		setValue('')
		handleCancel()
	}

	return (
		<FieldContainer>
			<TextField
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onKeyDown={(e) => {
					if (e.keyCode == 13) onSave(value)
				}}
				sx={{ width: '100%' }}
				placeholder={t('placeholder')}
				InputProps={{
					startAdornment: <InputAdornment position="start">f(x) =</InputAdornment>,
					endAdornment: error ? (
						<InputAdornment position="end">
							<Warning color="warning" />
						</InputAdornment>
					) : null,
				}}
			/>
			<Box sx={{ mt: '10px', display: 'flex', justifyContent: 'space-between' }}>
				{editing ? (
					<Button size="small" variant="contained" color="error" onClick={onCancel}>
						{t('actions.cancel')}
					</Button>
				) : (
					<Button
						size="small"
						variant="contained"
						color="info"
						onClick={onSave}
						sx={{ opacity: value.length > 0 ? 1 : 0 }}
					>
						{t('actions.clear')}
					</Button>
				)}
				<Button size="small" variant="contained" onClick={onSave}>
					{main_button_text || t('actions.save')}
				</Button>
			</Box>
		</FieldContainer>
	)
}

FunctionInput.propTypes = {}

export default FunctionInput
