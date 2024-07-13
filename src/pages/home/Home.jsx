import React from 'react'
import Header from '../../components/header/Header'
import MissionStatement from '../../components/missionStatement/MissionStatement'
import './home.css'
import ItemDisplay from '../../components/items/Items'
import ItemsDispay from '../../components/itemsDisplay/ItemsDisplay'
import SendMessage from '../../components/sendAMessage/SendMessage'


//api_id 4b1422cdaed540cc85c77daa419cbafe20240713194321193225
//app_id MR4DW0OPRHAG4OG
// organisation=== d23f4f58d1bf45209baf5c65743e20a5


// https://timbu-get-all-products.reavdev.workers.dev/?organization_id=d23f4f58d1bf45209baf5c65743e20a5&reverse_sort=false&page=1&size=10&Appid=MR4DW0OPRHAG4OG&Apikey=4b1422cdaed540cc85c77daa419cbafe20240713194321193225

const Home = () => {
    return (
        <div>
            <Header />
            <MissionStatement />
            <ItemsDispay />
       
            <SendMessage />
        </div>
    )
}

export default Home



// https://timbu-get-all-products.reavdev.workers.dev/?organization_id=9ad65f77a7cd4743afe18860cad45f78&reverse_sort=false&page=1&size=10&Appid=4WVJ24YM4M5Q0P2&Apikey=e244455cc2fc4a3ca8e60f3981e6fd6720240713165657076297