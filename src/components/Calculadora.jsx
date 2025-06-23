import React from 'react'

const Adicao = ({ num1, num2, nomeDaTecnologia }) => {
    function soma() {
        return num1 + num2
    }

    function subtracao() {
        return num1 - num2
    }

    function multiplicacao() {
        return num1 * num2
    }

    function divisao() {
        return num1 / num2
    }

    return (
        <>
            <p>
                O resultado de {num1} + {num2} é igual a {soma()}
            </p>

            <p>
                O resultado de {num1} - {num2} é igual a {subtracao()}
            </p>

            <p>
                O resultado de {num1} x {num2} é igual a {multiplicacao()}
            </p>

            <p>
                O resultado de {num1} / {num2} é igual a {divisao()}
            </p>

            <p>Eu preciso estudar mais {nomeDaTecnologia}</p>

        </>
    )
}

export default Adicao