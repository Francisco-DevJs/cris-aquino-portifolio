import React from 'react';
import CardItem from './carditem/carditem'
import focaccia from '../../assets/focaccia-genovese1.jpg'
import pavlova from '../../assets/pavlova.jpg'
import noiva from '../../assets/noiva.jpg'
import bronie from '../../assets/bronie.jpg'
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
                            text='Focaccia Alecrin e Azeite'
                            label='Italiana'
                            path='/services'
                        />
                        <CardItem 
                            src={pavlova}
                            text='Pavlova'
                            label='Nova Zelândia'
                            path='/services'
                        />
                        <CardItem 
                            src={noiva}
                            text='Bolo de Noiva'
                            label='Pernambucano'
                            path='/services'
                        />
                        <CardItem 
                            src={bronie}
                            text='Brownie'
                            label='Americana'
                            path='/services'
                        />
                        <CardItem 
                            src={focaccia}
                            text='Focaccia Alecrin e Azeite'
                            label='Italiana'
                            path='/services'
                        />
                        <CardItem 
                            src={focaccia}
                            text='Focaccia Alecrin e Azeite'
                            label='Italiana'
                            path='/services'
                        />
                        <CardItem 
                            src={focaccia}
                            text='Focaccia Alecrin e Azeite'
                            label='Italiana'
                            path='/services'
                        />
                        <CardItem 
                            src={focaccia}
                            text='Focaccia Alecrin e Azeite'
                            label='Italiana'
                            path='/services'
                        />
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Cards;