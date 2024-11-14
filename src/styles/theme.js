import { createTheme } from '@mui/material/styles'
import colors from './colors'
import { typoStyles } from './typo'

const { BLACK, WHITE, PRIMARY, SECONDARY, ERROR, WARNING, INFO, SUCCESS, GREY } = colors

export const generateTheme = () => {
	//this base theme is to generate the tone colors variations
	//to be used in the theme
	const base_theme = createTheme({
		palette: {
			common: {
				black: BLACK,
				white: WHITE,
			},
			primary: {
				dark: PRIMARY[600],
				main: PRIMARY[500],
				light: PRIMARY[300],
			},
			secondary: {
				dark: SECONDARY[700],
				main: SECONDARY[500],
				light: SECONDARY[400],
			},
			info: {
				dark: INFO[700],
				main: INFO[500],
				light: INFO[300],
			},
			success: {
				dark: SUCCESS[700],
				main: SUCCESS[500],
				light: SUCCESS[300],
			},
			warning: {
				dark: WARNING[700],
				main: WARNING[500],
				light: WARNING[300],
			},
			error: {
				dark: ERROR[700],
				main: ERROR[500],
				light: ERROR[300],
			},
			grey: {
				...GREY,
			},
			action: {
				hover: PRIMARY[100],
				selected: PRIMARY[600],
				disabled: GREY[400],
				disabledBackground: GREY[400],
				focus: PRIMARY[600],
			},
		},
		typography: {
			fontFamily: '"Rubik Variable", sans-serif',
			h1: { ...typoStyles.T1 },
			h2: { ...typoStyles.T2 },
			h3: { ...typoStyles.T3 },
			h4: { ...typoStyles.T4 },
			h5: { ...typoStyles.C1 },
			h6: { ...typoStyles.C2 },
			subtitle1: { ...typoStyles.C3 },
			subtitle2: { ...typoStyles.C5 },
			body1: { ...typoStyles.C4 },
			body2: { ...typoStyles.C6 }, // mui applies body2 to global <body> tag
			// (?) no variant to put C7 style (?)
			caption: { ...typoStyles.C8 },
		},
		components: {
			MuiIconButton: {
				styleOverrides: {
					root: {
						borderRadius: '7px',
					},
				},
			},

			MuiList: {
				styleOverrides: {
					root: {
						padding: 7,
					},
				},
			},

			MuiMenuItem: {
				styleOverrides: {
					root: {
						fontSize: '0.9rem',
						borderRadius: '7px',

						'&:hover': {
							backgroundColor: `${PRIMARY[50]} !important`,
						},

						'&.Mui-selected': {
							backgroundColor: PRIMARY[300],
							color: WHITE,
							'&:hover': {
								backgroundColor: PRIMARY[300],
								opacity: 0.9,
							},
						},
					},
					dense: {
						padding: '6px 10px ',
					},
				},
			},

			MuiPaper: {
				styleOverrides: {
					root: {
						backfaceVisibility: 'hidden !important',
					},
				},
			},

			MuiCard: {
				styleOverrides: {
					root: {
						boxShadow: 'none',
					},
				},
			},

			MuiCardContent: {
				styleOverrides: {
					root: {
						padding: '1rem !important',
					},
				},
			},

			MuiInputBase: {
				styleOverrides: {
					input: {
						padding: '10px !important',
					},
				},
			},

			MuiSelect: {
				styleOverrides: {
					select: {
						paddingLeft: '15px !important',
					},
				},
			},

			MuiInputAdornment: {
				styleOverrides: {
					root: {},
					positionStart: {
						minWidth: '30px',
						backgroundColor: 'rgba(0, 0, 0, 0.12)',
						padding: '21px 15px',
						borderTopLeftRadius: '4px',
						borderBottomLeftRadius: '4px',
						justifyContent: 'center',
						marginRight: '0 !important',
						'& p': {
							fontSize: '0.8rem !important',
							lineHeight: '45px',
						},
					},
				},
			},

			MuiTableRow: {
				styleOverrides: {
					root: {
						'&:hover': {
							backgroundColor: `${PRIMARY[50]} !important`,
						},
					},
				},
			},

			MuiAlert: {
				styleOverrides: {
					message: {
						lineHeight: '22px',
					},
				},
			},
		},
	})

	return base_theme
}
