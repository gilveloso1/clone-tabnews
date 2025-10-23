import { useState } from 'react';



function Home() {
    const [troca, setTroca] = useState(true)
    function trocar(){
        if (troca) setTroca(false);
        if (!troca) setTroca(true);
    }
    return (
        <div>
            <h1>:) Você me ama? ❤️</h1>
            <button onClick={trocar} style={{width: 200, height: 30}}>
                {troca ? 'Sim' : 'Não'}
            </button>
            <div style={{paddingBottom: 10}}></div>
            <button onClick={trocar} style={{width: 200, height: 30}}>
                {troca ? 'Não' : 'Sim'}
            </button>
            <h2>{troca ? '' : 'NÃO AMO!!!! 😑'}</h2>
        </div>
    )
}

export default Home;