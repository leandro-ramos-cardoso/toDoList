import React from 'react'

const RenderizandoComFuncoes = () => {
    function escolhaDeRenderizacao(oQueRenderizar) {
        if (oQueRenderizar === 'PB') {
            return <h1 style={{color:'green'}}>Paraiba</h1>
        } else {
            return <h2 style={{color:'blue'}}>João Pessoa</h2>
        }
    }
    return (
        <div>
            {escolhaDeRenderizacao('PB')}
        </div>
    )
}

export default RenderizandoComFuncoes