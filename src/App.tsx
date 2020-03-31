import React from 'react'
import { Header } from './components/Header/Header'
import { Trending } from './components/Trending/Trending'

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <Trending />
        </div>
    )
}

export { App }
