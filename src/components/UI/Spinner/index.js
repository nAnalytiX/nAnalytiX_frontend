/**
 *
 *  /UI/Spinner
 *
 */

import React, { memo } from 'react'

// NPM Libraries
import PropTypes from 'prop-types'

import { ClipLoader, BarLoader, FadeLoader, HashLoader, MoonLoader, PuffLoader, PulseLoader } from 'react-spinners'

// GraphQL

// Components

// Utils
import colors from 'styles/colors'

const SPINNERS = {
	clip: ClipLoader,
	bar: BarLoader,
	// BeatLoader,
	fade: FadeLoader,
	hash: HashLoader,
	moon: MoonLoader,
	// PropagateLoader,
	puff: PuffLoader,
	pulse: PulseLoader,
	// RotateLoader,
}

const LoadingSpinner = ({ name, style }) => {
	const Spinner = SPINNERS[name] || Object.values(SPINNERS)[Math.floor(Math.random() * Object.keys(SPINNERS).length)]

	return (
		<div className="mx-auto text-center" style={style}>
			<Spinner color={colors.PRIMARY[500]} size={40} />
		</div>
	)
}

LoadingSpinner.propTypes = {
	name: PropTypes.string,
	style: PropTypes.object,
}

LoadingSpinner.defaultProps = {
	color: colors.PRIMARY[500],
}

export default memo(LoadingSpinner)
