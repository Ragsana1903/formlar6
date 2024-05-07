

import { useState } from 'react'
import './Form.css'
function Form() {
    const [mg, setMg]= useState('')

    return (
        
       <div>
         <div>{mg}</div>
            <div>
            
                <label for='name' >Name:  
                    <input className='text' type='text' placeholder='Adınızı daxil edin'></input>
                </label><br />
                <label for='Soyad'>Soyad:  
                    <input className='soyad' type='text' placeholder='Soyadınızı daxil edin'></input>
                </label><br />
                <label for='tel'>Telefon:  
                    <input className='tel'  type='number' placeholder='Tel. nömrənizi daxil edin'></input>
                </label><br />
                <label for='serh'>Şərh:  </label>
                <textarea></textarea><br />
                
                    <div>
                    <button onClick={()=>{setMg('Müvəffəqiyyətlə keçdiniz')}}>Send</button>
                    </div>
            </div>
       </div>
           
        
            
    )
}


export default Form