import React from 'react'
import * as styles from './Testimonial.module.css'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
function Testimonial()
{
    return(
        <div class={styles.body}>
            <div class={styles.parent}>
      <div class={styles.underlying}>
       <div id="word"> <h2> Testimonials </h2></div>
        <div id="un"> </div>
        </div>


        <div class={styles.image}>
            <div class={styles.small}>
                <div class={styles.sphere}>
                <img class={styles.img} src={img1} alt="photo" />
                </div>  
                <div class={styles.smallest}> 
                                     
                <p><b>Edward</b> <br/>Lorem ipsum dolor<br/> sit amet consectetur<br/> adipisicing elit.  quos
                <br/>Quia fugit eos ratione <br/>
                numquam deleniti 
            </p>
                </div>
            </div>
           
            <div class={styles.small}>
                <div class={styles.sphere}>
                <img class={styles.img} src={img2} alt="photo" />
                </div>  
                <div class={styles.smallest}> 
                                     
                <p><b className={styles.name}>Randy</b> <br/>Lorem ipsum dolor<br/> sit amet consectetur<br/> adipisicing elit.  quos
                <br/>Quia fugit eos ratione <br/>
                numquam deleniti 
            </p>
                </div>
            </div>
            <div class={styles.small}>
                <div class={styles.sphere}>
                    <img class={styles.img} src={img3} alt="photo" />
                </div>  
                <div class={styles.smallest}> 
                
                <p> 
                <b>Edwin</b>  
                <br/>Lorem ipsum dolor<br/> sit amet consectetur<br/> adipisicing elit.  quos
                <br/>Quia fugit eos ratione <br/>
                numquam deleniti 
            </p>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}
export default Testimonial