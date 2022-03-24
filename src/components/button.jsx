import { useState } from 'react';

function WriteButton() {

const [line, setLine] = useState(false);

function handleButton() {
    setLine(!line)
}

//! <Componente de função propriedade={variável de estado}/> 
return (
    <>
    <div>
        {<ExclusiveContent line={line} />}
        <button onClick={handleButton}>{ !line ? 'Altere aqui!' : 'Volte ao estado inicial :)'}</button>
    </div>
    </>
)
}

function ExclusiveContent(props) {
    return (
        <div>
            {props.line && <h2>Aprendi useState :)</h2>}
        </div>
    )
}

export default WriteButton;