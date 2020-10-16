import React from "react"
import { Navigation } from "./components/Navigation/Navigation"
import { Trending } from "./components/Trending/Trending"
import { PopularList } from "./components/Popular/Popular"
import { MoviePage } from "./pages/movie-page/MoviePage"
import { TVPage } from "./pages/tv-page/TVPage"
import { HashRouter as Router, Route, Switch } from "react-router-dom"

const App: React.FC = () => {
	return (
		<>
			<Router>
				<Navigation />
				<Switch>
					<Route path='/movie/:id' component={MoviePage} />
					<Route path='/tv/:id' component={TVPage} />
					<div>
						<Trending />
						<PopularList />
					</div>
				</Switch>
			</Router>
		</>
	)
}

export { App }
