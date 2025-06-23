import React from 'react'

const Livro = ({ titulo, autor, ano }) => {
    return (
        <div>
            <h3
                style={{
                    color:'blueviolet'
                }}
            >
                {titulo}
            </h3>
            Autor: {autor} <br />
            Ano: {ano}
            <hr style={{ width: '90vw' }} />
        </div>
    )
}

export default Livro