import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { FaPlus, FaTrash, FaArrowDown} from 'react-icons/fa'

const HookContador = () => {
    const [contador, setContador] = useState(0)
    function incrementarContador() {
        setContador(contador + 1)
    }

    function decrementarContador() {
        if(contador < 1){
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

    function zerarContador(){
        setContador(0)
    }
    return (
        <div className='mainContainer'>
            <p style={{fontSize:'45px'}}>
                Contador: {contador}
            </p>

            <p>
                <button className='btnadd'
                    style={{
                        padding: '20px 0 20px 0',
                        width: '350px',
                        borderRadius: '6px',
                        backgroundColor: '#5599FF',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer',
                        fontSize: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        transition:'0.5s'
                    }}
                    onClick={incrementarContador}
                >
                    <FaPlus/> Incrementar contador
                </button>
            </p>

            <button className='btnrm'
                style={{
                    padding: '20px 0 20px 0',
                    width: '350px',
                    borderRadius: '6px',
                    backgroundColor: '#FF7777',
                    border: 'none',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition:'0.5s'
                }}
                onClick={decrementarContador}
            >
                <FaArrowDown/> Decrementar contador
            </button>

            <p>
                <button className='btnzero'
                    style={{
                    padding: '20px 0 20px 0',
                    width: '350px',
                    borderRadius: '6px',
                    backgroundColor: '#A0A0A0',
                    border: 'none',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '20px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition:'0.5s'
                }}
                onClick={zerarContador}
                >
                    <FaTrash/> Zerar contador
                </button>
            </p>
        </div>
    )
}

export default HookContador