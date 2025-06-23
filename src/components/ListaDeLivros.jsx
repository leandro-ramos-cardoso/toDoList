import React from 'react'
import Livro from './Livro'

const ListaDeLivros = () => {
    const livros = [
        { titulo: 'Teste 1', autor: 'Fulano', ano: '1980' },
        { titulo: 'Teste 2', autor: 'Fulano 1', ano: '2000' },
        { titulo: 'Teste 3', autor: 'Fulano 2', ano: '1995' },
        { titulo: 'Teste 4', autor: 'Fulano 3', ano: '1980' }
    ]
    return (
        <>
            <h1>- Lista de Livros -</h1>

            {livros.map((livros, index) => (
                <Livro key={index} titulo={livros.titulo} autor={livros.autor} ano={livros.ano} />
            ))}
        </>
    )
}

export default ListaDeLivros