import React from 'react';
import {Link} from 'react-router-dom';
import style from './LandingPage.module.css'


export default function LandingPage(){
    return (
        <section className={style.landingPage}>
        <div className={style.container}>
          <div >
            <div className={style.box}>
            
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className={style.content}>
                <h2>Welcome to: </h2>
                <h1>Countries App</h1>
                <Link to ='/home' className={style.linkLanding}>Enter</Link>
              </div> 
              </div>
          </div>
        </div>
      </section>
       
    )

}