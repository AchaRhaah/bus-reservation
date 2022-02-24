import React from "react";
import pexels from "./assets/pexels-cytonn-photography-955404.jpg"
import * as styles from './Agencies.module.css'
import { Outlet, Link } from "react-router-dom";

function Agencies() {
    
    // const renderList = Array(10).fill(0).map(()=>)

    return(
        <div>
            <ul className="navbar">
      <div className="logo">
        <a href="#">Book-it</a>
      </div>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Testimonials</a>
      <Link to="/login">
        <a href="#" id="login">
          Login
        </a>
      </Link>
    </ul>
            <div class={styles.maincontainer}>
            <div class={styles.sub1}>
            
            <div class={styles.image}>
    <img class={styles.img} src={pexels} alt="photo" />
    <div class={styles.text}>  <Link to="/SeatPlan"><p><b>Musango</b><br/><i class="fas fa-map-marker-alt"></i> Bamenda 
                        <br/></p></Link> 
    <p class={styles.num}> <b>680829430</b></p></div>
</div>
                    
            <div class={styles.image}>
                        <img class={styles.img} src={pexels} alt="photo" />
                        <div class={styles.text}> <Link to="/SeatPlan"><p><b>Musango</b><br/><i class="fas fa-map-marker-alt"></i> Bamenda 
                        <br/></p></Link> 
                        <p class={styles.num}> <b>680829430</b></p></div>
                </div>
            
            <div class={styles.image}>
            <img class={styles.img} src={pexels} alt="photo" />

                    <div class={styles.text}>  <p><b>Musango</b><br/> <i class="fas fa-map-marker-alt"></i> Bamenda <br/></p>
                    <p class={styles.num}> <b>680829430</b></p></div>
            </div>
            </div>
            <div class={styles.sub2}>
                    <div class={styles.image}>
                    <img class={styles.img} src={pexels} alt="photo" />
                        <div class={styles.text}>  <p><b>Musango</b><br/> <i class="fas fa-map-marker-alt"></i> Bamenda <br/></p>
                            <p class={styles.num}> <b>680829430</b></p></div>
                    </div>
                    <div class={styles.image}>
                        <img class={styles.img} src={pexels} alt="photo" />
                        <div class={styles.text}>  <p><b>Musango</b><br/> <i class="fas fa-map-marker-alt"></i> Bamenda <br/></p>
                            <p class={styles.num}> <b>680829430</b></p></div>
                    </div>
                    <div class={styles.image}>
                    <img class={styles.img} src={pexels} alt="photo" />
                        <div class={styles.text}>  <p><b>Musango</b><br/> <i class="fas fa-map-marker-alt"></i> Bamenda <br/></p>
                            <p class={styles.num}> <b>680829430</b></p></div>
                    </div>
            </div>
            </div>
        </div>
    )
}
export default Agencies