/**
 *
 *  Ui/FunctionInput
 *
 */

import React, { useEffect, useState } from 'react'

// NPM Libraries
import styled from '@emotion/styled'
import * as math from 'mathjs'
import { Box, Button, Grid, InputAdornment, Tooltip, Typography, TextField, FormHelperText } from '@mui/material'
import { Info } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
// import PropTypes from 'prop-types'

// GraphQL
// import { useQuery } from 'hooks'
// import { gql, useMutation } from '@apollo/client'

// Components

// Utils
// import S from './styles'
import { Warning } from '@mui/icons-material'
import { formatter } from './helpers'
import { useField, useFormikContext } from 'formik'

const FieldContainer = styled.div`
	.MuiInputBase-root {
		.MuiInputAdornment-root {
			& p {
				letter-spacing: 1px;
			}
		}
	}
`

const Input = ({ value, onChange, onSave, onCancel, controlled, editing, error, main_button_text }) => {
	const { t } = useTranslation('', { keyPrefix: 'components.FunctionInput' })
	const [internal_error, setInternalError] = useState(false)

	const internalOnChange = (equation) => {
		const formated_equation = formatter(equation)

		if (formated_equation === 'error') {
			onChange(equation)
			setInternalError(true)
			return
		} else {
			onChange(formated_equation)
		}

		try {
			math.parse(formated_equation)

			const scope = { x: 1 }
			math.evaluate(formated_equation, scope)

			setInternalError(false)
		} catch (e) {
			setInternalError(true)
		}
	}

	const has_errors = internal_error || error

	return (
		<FieldContainer>
			<Grid container sx={{ alignItems: 'center' }}>
				<Grid item xs={4}>
					<Typography variant="caption" color={has_errors ? 'error' : ''} sx={{ fontSize: '0.95rem' }}>
						{t('label')}
					</Typography>
				</Grid>

				<Grid item xs={8}>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<TextField
							value={value}
							onChange={(e) => internalOnChange(e.target.value)}
							onKeyDown={(e) => {
								if (e.keyCode == 13) onSave(value)
							}}
							sx={{ width: '100%', paddingLeft: 0 }}
							placeholder={t('placeholder')}
							InputProps={{
								sx: { paddingLeft: 0 },
								startAdornment: <InputAdornment position="start">f(x)</InputAdornment>,
								endAdornment: has_errors ? (
									<InputAdornment position="end">
										<Warning color="warning" />
									</InputAdornment>
								) : null,
							}}
							error={has_errors}
						/>

						<Tooltip title="Add" placement="right">
							<Info color="primary" sx={{ ml: 2, cursor: 'help' }} />
						</Tooltip>
					</Box>

					{error && <FormHelperText error>{error}</FormHelperText>}
				</Grid>
			</Grid>

			{!controlled && (
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
							sx={{ opacity: value && value.length > 0 ? 1 : 0 }}
						>
							{t('actions.clear')}
						</Button>
					)}
					<Button size="small" variant="contained" onClick={onSave}>
						{main_button_text || t('actions.save')}
					</Button>
				</Box>
			)}
		</FieldContainer>
	)
}

const ControlledField = ({ name: field_name, onChange: customOnChange }) => {
	const [field, meta] = useField({ name: 'fx' })

	const { setFieldValue } = useFormikContext()
	const { value } = field
	const { error } = meta

	return <Input onChange={(value) => setFieldValue(field_name, value)} value={value} error={error} controlled />
}

const FunctionInput = ({
	name,
	default_value,
	editing,
	handleSave,
	handleCancel,
	main_button_text,
	controlled = false,
}) => {
	const [value, setValue] = useState('')

	useEffect(() => {
		default_value && setValue(default_value)
	}, [default_value])

	const onSave = () => {
		if (value !== '') {
			handleSave(value)
			setValue('')
		}
	}

	const onCancel = () => {
		setValue('')
		handleCancel()
	}

	if (controlled) return <ControlledField name={name} />

	return (
		<Input {...{ value, onChange: (val) => setValue(val), onSave, onCancel, controlled, main_button_text, editing }} />
	)
}

FunctionInput.propTypes = {}

export default FunctionInput
