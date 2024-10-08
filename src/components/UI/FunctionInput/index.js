/**
 *
 *  Ui/FunctionInput
 *
 */

import React, { useEffect, useState } from 'react'

// NPM Libraries
import styled from '@emotion/styled'
import * as math from 'mathjs'
import { Button, InputAdornment, InputLabel, TextField } from '@mui/material'
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

const sin_values = ['sen', 'zen']
const exp_values = ['e']

const valid_nodes = ['sin', 'cos', 'tan', 'sqrt', 'exp', 'ln', 'log', 'x']
const separation_nodes = ['+', '-', '/', '*', ')', '(']

const formatter = (string = '') => {
	let format_string = string.toLowerCase().split('')

	let nodes = []

	const result = format_string.reduce((acc, current) => {
		if (separation_nodes.includes(current) || current == ' ') {
			nodes = [...nodes, acc, current]

			acc = ''
		} else {
			acc += current
		}

		return acc
	}, '')

	nodes = [...nodes, result].filter((node) => node != '')

	nodes = nodes.map((curr, index) => {
		if (curr === ' ') return curr

		if ([...valid_nodes, ...separation_nodes].includes(curr) || Number(curr).isNaN || curr.includes('x')) {
			return curr
		}

		if (nodes[index + 1] === '(') {
			if (sin_values.includes(curr)) {
				return 'sin'
			} else if (exp_values.includes(curr)) {
				return 'exp'
			}
		}

		return Number(curr)
	})

	if (nodes.includes(NaN)) {
		return 'error'
	} else {
		return nodes.join('')
	}
}

const FunctionInput = ({ default_value, editing, handleSave, handleCancel, main_button_text }) => {
	const { t } = useTranslation('', { keyPrefix: 'components.FunctionInput' })

	const [value, setValue] = useState('')
	const [error, setError] = useState(false)

	useEffect(() => {
		default_value && setValue(default_value)
	}, [default_value])

	const onChange = (equation) => {
		const formated_equation = formatter(equation)
		console.log(equation)
		console.log(formated_equation)

		if (formated_equation === 'error') {
			setValue(equation)
			setError(true)
			return
		} else {
			setValue(formated_equation)
		}

		try {
			math.parse(formated_equation)

			const scope = { x: 1 }
			math.evaluate(formated_equation, scope)

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
			<InputLabel>{t('label')}</InputLabel>
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
						onClick={onCancel}
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
