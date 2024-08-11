function generateTypographyStyle(fontSize = '1rem', lineHeight = '24px', fontWeight = 'normal', letterSpacing) {
	return {
		fontFamily: '"Rubik Variable", sans-serif',
		fontSize,
		fontWeight,
		lineHeight,
		letterSpacing,
	}
}

const T1 = generateTypographyStyle('3rem', '3.5rem', 700, '-0.02em') // 64px
const T2 = generateTypographyStyle('2.5rem', '3rem', 700, '-0.02em') // 48px
const T3 = generateTypographyStyle('2.25rem', '2.75rem', 700) // 40px
const T4 = generateTypographyStyle('2rem', '2.5rem', 500) // 32px
const C1 = generateTypographyStyle('1.5rem', '2rem', 700) // 24px
const C2 = generateTypographyStyle('1.5rem', '2rem', 500) // 24px
const C3 = generateTypographyStyle('1rem', '24px', 500, '0.02em') // 16px
const C4 = generateTypographyStyle('1rem', '1.5rem', 400, '0.02em') // 16px
const C5 = generateTypographyStyle('0.875rem', '20px', 500, '0.02em') // 14px
const C6 = generateTypographyStyle('0.875rem', '20px', 400, '0.02em') // 14px
const C7 = generateTypographyStyle('0.75rem', '16px', 500, '0.02em') // 12px
const C8 = generateTypographyStyle('0.8rem', '16px', 300, '0.02em') // 12px

export const typoStyles = {
	T1,
	T2,
	T3,
	T4,
	C1,
	C2,
	C3,
	C4,
	C5,
	C6,
	C7,
	C8,
}
