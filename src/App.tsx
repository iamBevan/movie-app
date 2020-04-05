import React from 'react'
import { Header } from './components/Header/Header'
import { Trending } from './components/Trending/Trending'
import { PopularList } from './components/Popular/Popular'
import { MoviePage } from './pages/MoviePage'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route path="/movie/:id" component={MoviePage} />
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
