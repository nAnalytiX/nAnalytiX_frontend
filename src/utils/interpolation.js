import { gql } from '@apollo/client'

export const default_values = {
	x: [-1, 0, 3, 4],
	y: [15.5, 3, 8, 1],
}

export const format_special_points = (points) => {
	let new_values = []

	points.x.forEach((_, index) => {
		new_values = [...new_values, [points.x[index], points.y[index]]]
	})

	return new_values
}

export const RESOLVE_INTERPOLATION = gql`
	mutation interpolationResolver($method: String!, $points: JSON!) {
		interpolationResolver(input: { method: $method, points: $points }) {
			result
		}
	}
`
