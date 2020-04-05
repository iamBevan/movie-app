import React from 'react'
import { Header } from './components/Header/Header'
import { Trending } from './components/Trending/Trending'
import { PopularList } from './components/Popular/Popular'

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <Trending />
            <PopularList />
        </div>
    )
}

export { App }
