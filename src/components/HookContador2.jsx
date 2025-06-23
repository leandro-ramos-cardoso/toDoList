import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { FaPlus, FaTrash, FaArrowDown, FaSyncAlt, FaStopwatch } from 'react-icons/fa'

const HookContador2 = () => {
    const [contador, setContador] = useState(0)

    function incrementaValor() {
        setContador(contador + 1)
    }

    function decrementarValor() {

        if (contador < 1) {
            Swal.fire({
                icon: 'warning',
                title: 'Atenção',
                text: 'Valor mínimo atingido.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#6495ed',
                timer: 4000,
                timerProgressBar: true,
                allowOutsideClick: false,
            })
            return
        }
        setContador(contador - 1)
    }

    function zerarValor() {
        setContador(0)
    }

    return (
        <>
            <h1>Contador</h1>

            <button
                className='btnadd'
                style={{
                    fontSize: '30px',
                    borderRadius: '16px',
                    backgroundColor: '#3f68b9',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '50px',
                    width: '600px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
                }}
                onClick={incrementaValor}
            >
                <FaPlus /> Incrementar valor
            </button> <br />

            <button
                className='btnrm'
                style={{
                    fontSize: '30px',
                    borderRadius: '16px',
                    backgroundColor: '#b93f3f',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '50px',
                    width: '600px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    opacity: contador <= 0 ? 0.5 : 1,
                    cursor: contador <= 0 ? 'not-allowed' : 'pointer'
                }}
                disabled={contador <= 0}
                onClick={decrementarValor}
            >
                <FaArrowDown /> Decrementar valor
            </button> <br />

            <button
                className='btnzero'
                style={{
                    fontSize: '30px',
                    borderRadius: '16px',
                    backgroundColor: '#55575a',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '50px',
                    width: '600px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    opacity: contador <= 0 ? 0.5 : 1,
                    cursor: contador <= 0 ? 'not-allowed' : 'pointer'
                }}
                onClick={zerarValor}
            >
                <FaTrash /> Zerar
            </button>

            <p
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    backgroundColor: '#dcdcdc',
                    padding: '20px',
                    fontSize: '60px',
                    borderRadius: '16px'
                }}
            >
                <FaStopwatch size={40} />
                {contador}
            </p>

            <footer>
                <p style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    gap:'20px'
                }}>
                    Todos direitos reservados
                </p>
            </footer>
        </>

    )
}

export default HookContador2