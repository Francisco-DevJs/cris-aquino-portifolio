import React, { useEffect } from 'react';

import '../../../app.css';

import Background from '../../background/background';
import Cards from '../../cards/cards';

function Home (){
    useEffect(() => {
        window.scrollTo(100, 4)
      }, [])
    return(
        <>
        <Background/>
        <Cards/>
        </>
    )
}

export default Home;