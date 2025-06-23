import React from 'react'

const Mensagem = () => {

    function tipoMensagem(tipo){
        if (tipo === 'sucesso') {
        return <p>Operação realizada com sucesso!</p>
    } else if (tipo === 'erro') {
        return <p>Ocorreu um erro na operação.</p>
    } else if (tipo === 'aviso') {
        return <p>Atenção! Verifique os dados.</p>
    } else {
        return <p>Opção invalida!</p>
    }
    }
    
    return (
        <>
            {tipoMensagem('sucesso')}
            {tipoMensagem('erro')}
            {tipoMensagem('aviso')}
            {tipoMensagem('avisoaviso')}
        </>
    )
}

export default Mensagem