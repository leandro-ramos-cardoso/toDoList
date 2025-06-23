import React from 'react'

const Conversor = ({ celsius, fahrenheit, milhas, km }) => {
    const TempEmFahrenheit = (celsius * 9 / 5) + 32
    const TempEmcelsius = (fahrenheit - 32) * 5 / 9
    const QuilometroParaMilhas = milhas / 0.621371
    const MilhasParaQuilometro = km * 0.621371
    return (
        <div>
            <p>25C equivalem a {fahrenheit}F</p>
            <p>77F equivalem a {celsius}C</p>
            <p>2km equivalem a {QuilometroParaMilhas}</p>
            <p>500 metros equivalem a {MilhasParaQuilometro}</p>
        </div>
    )
}

export default Conversor