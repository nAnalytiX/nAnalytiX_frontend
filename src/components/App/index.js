/**
 *
 * App
 *
 */

import React from 'react'

// Libraries
import { BrowserRouter } from 'react-router-dom'

// Components
import ApolloProvider from 'components/App/ApolloProvider'
import ThemeProvider from 'components/App/ThemeProvider'

const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<ApolloProvider></ApolloProvider>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App
