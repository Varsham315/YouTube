import React from 'react'
import logo from './youtube.jpg'
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
   
        <div className='col-md-4 bg-info' >
           <i class="fa-solid fa-bars"></i>  
          <img src={logo} width='50' margin='20px'/>
          <span >youtube</span>
          <Link to="Home"><ul><i class="fa-solid fa-house"></i> home</ul></Link>
          <Link to="Shorts"><ul><i class="fa-solid fa-bolt"></i> shorts</ul></Link>
          <ul><i class="fa-solid fa-money-bill"></i> subscription</ul> <hr></hr>
          <ul><i class="fa-solid fa-images"></i> library</ul>
          <ul><i class="fa-solid fa-clock-rotate-left"></i> history</ul>
          <ul><i class="fa-solid fa-circle-play"></i> your vedio</ul>
          <ul><i class="fa-regular fa-clock"></i> watch later</ul>
          <ul><i class="fa-solid fa-thumbs-up"></i> liked vedios</ul><hr></hr>
          <h3>Subscrition</h3>
          <ul><i class="fa-solid fa-circle-plus"></i> browse channels</ul><hr></hr>
          <h3>Explore</h3>
          <ul><i class="fa-solid fa-fire"></i> trending</ul>
          <ul><i class="fa-brands fa-shopify"></i> shopping</ul>
          <ul><i class="fa-solid fa-music"></i> music</ul>
          <ul><i class="fa-solid fa-film"></i> film</ul>
          <ul><i class="fa-solid fa-signal"></i> live</ul>
          <ul><i class="fa-solid fa-gamepad"></i> gaming</ul>
          <ul><i class="fa-solid fa-newspaper"></i> news</ul>
          <ul><i class="fa-solid fa-trophy"></i> sports</ul>
          <ul></ul>
        </div>  
  );
}
