import React from 'react';
import CardItem from './carditem/carditem'
import focaccia from '../../assets/focaccia-genovese1.jpg'
import pavlova from '../../assets/pavlova.jpg'
import noiva from '../../assets/noiva.jpg'
import bronie from '../../assets/bronie.jpg'
import redvelvet from '../../assets/redvelvet.jpg'
import humita from '../../assets/humita.jpeg'
import ratatouile from '../../assets/ratatouille.jpg'
import cupcake from '../../assets/cupcake.jpg'
import banofee from '../../assets/banofee.jpg'
import './cards.css';
import under from '../../assets/28e600e10e6c321583973ce5912c3fd7.png'
function Cards(){
    return(
        <div className='cards'>
            <h1>Nossos Produtos</h1>
            <figure  >
                <img className='under' src={under}></img>
                 </figure>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src={focaccia}
                            text='Focaccia Alecrim e Azeite'
                            label='Italiana'
                            path='/services'
                        />
                        <CardItem 
                            src={pavlova}
                            text='Pavlova'
                            label='Australiana'
                            path='/services'
                        />
                        <CardItem 
                            src={noiva}
                            text='Bolo de Noiva'
                            label='Pernambucana'
                            path='/services'
                        />
                        <CardItem 
                            src={bronie}
                            text='Brownie'
                            label='Americana'
                            path='/services'
                        />
                        <CardItem 
                            src={redvelvet}
                            text='Red Velvet'
                            label='Americana'
                            path='/services'
                        />
                        <CardItem 
                            src={humita}
                            text='Humita'
                            label='Americana Latina'
                            path='/services'
                        />
                        <CardItem 
                            src={ratatouile}
                            text='Ratatouille'
                            label='Francesa'
                            path='/services'
                        />
                        <CardItem 
                            src={banofee}
                            text='Torta Banofee'
                            label='Inglesa'
                            path='/services'
                        />
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Cards;