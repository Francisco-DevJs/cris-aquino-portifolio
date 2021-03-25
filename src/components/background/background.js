import React, {useEffect} from 'react';
import Button from '../button/button';
import backVideo from '../../assets/videoplayback (online-video-cutter.com).mp4'
import './background.css';

function Background() {
  
    return(
    <div className='hero-container'>
        <video  autoplay='autoplay' muted loop src={backVideo} id='video'>
            <source type='video/mp4'></source>
        </video>
        <h1>Gastronomia | Café | Confeitaria | Consultoria </h1>
        <div className='hero-btns'>
            <Button className='btns' path='/services'> Encomendas </Button>
        </div>

    </div>
    )
}


export default Background;