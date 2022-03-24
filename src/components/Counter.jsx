import { useState } from "react";

//hook! gancho!

export function Counter() {
// Aqui ocorre desestruturação de um array. Pega-se o
// array e o "fragmenta" em duas variáveis: counter e setCounter
// const [VARIAVEL, FUNCAO]. setCounter é a FUNÇÃO que dá
// possibilidade do counter mudar de estado como um contador.
const [counter, setCounter] = useState(0);

function increment() {
    setCounter(counter + 1);
}

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment</button>
        </div> 
    )
}