import React, { useEffect } from 'react';
import chef from '../../../assets/chef-removebg-preview.png'
import './bio.css';
 
function Bio(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <> 
            <div className='bio'>
                <p>    Formada em Gastronomia pela UFRPE, sou confeiteira e trabalho com encomendas desde 2018. Minha especialidade
                    é com Confeitaria, porém trabalho com massas italiana, doces internacionais e principalmente bolos de Noiva.
                    Meu TCC obteve nota máxima pela banca com o tema: " Desenvolvimento do bolo de Noiva Pernambucano Vegano ", 
                    no qual possibilitei a recrição da receita substituindo elementos de origem animal.
                </p>
                <h1>Cris Aquino</h1>
                <figure>
                    <img src={chef} className='bio__img'></img>
                </figure>
                
            </div>
           

        </>
    )
}

export default Bio;