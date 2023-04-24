import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  
  return (
    <>
     <header>
        <div className="contenedorTitulo">
            <h2>404 NO FOUND</h2>
        </div>     
    </header>   
    <main>

       
<div className="seccion">
    <img src="./scarecrow.png"  alt=""/>
</div>
<section>
    <div >
        <h1>I have bad news for you</h1>
  </div>

<div className=" texto2">
<p>The page you are looking  for might be removed or is  Temporarily Unavailable</p>
</div>

<a target="_blank" className ="btn">BACK TO HOMEPAGE</a>
</section>


</main>


<div className="attribution">
Coded by <a href="#">Alex Herrera</a>.
</div>     
   
      
    </>
  )
}

export default App
