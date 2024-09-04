import styled from '@emotion/styled'

const GraphContainer = styled.div`
	width: 100%;
	height: 100%;
	padding-bottom: 10px;

	.function-plot {
		font-size: 0.8rem;
		font-family: 'Rubik Variable', sans-serif !important;

		path.line {
			stroke-width: 2.5;
		}

		.top-right-legend {
			display: none;
		}

		.y.origin {
			opacity: 0.8 !important;
			stroke-width: 1.3;
		}

		.x.origin {
			opacity: 1 !important;
			stroke-width: 1.3;
		}

		.y.axis {
			.tick {
				font-size: 0.7rem;
			}
			path.domain {
			}
		}

		.x.axis {
			.tick {
				font-size: 0.7rem;
			}
			path.domain {
				opacity: 0.3 !important;
			}
		}
	}
`

export default { GraphContainer }
