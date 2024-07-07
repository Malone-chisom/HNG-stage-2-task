import React from 'react'
import Header from '../../components/header/Header'
import MissionStatement from '../../components/missionStatement/MissionStatement'
import './home.css'
import ItemDisplay from '../../components/items/Items'
import ItemsDispay from '../../components/itemsDisplay/ItemsDisplay'


const Home = () => {
    return (
        <div>
            <Header />
            <MissionStatement />
            <ItemsDispay />
        </div>
    )
}

export default Home