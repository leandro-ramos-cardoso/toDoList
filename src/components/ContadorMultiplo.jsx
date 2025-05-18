import React from 'react'
import { useState } from 'react'

const ContadorMultiplo = () => {
  const [contador, setContador] = useState(0)

  function incrementaCinco() {
    if(contador >= 100){
      alert('O contador já atingiu o valor máximo de 100.')
    } else {
      setContador(contador + 5)
    }
  }
  
  return (
    <div>
      <button onClick={incrementaCinco}>
        Incremente
      </button>

      <p>{contador}</p>
    </div>
  )
}

export default ContadorMultiplo