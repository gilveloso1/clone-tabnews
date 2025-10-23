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
            <button onClick={trocar} style={{width: '200px', height: '30px', fontSize: '18px'}}>
                {troca ? 'Sim' : 'Não'}
            </button>
            <div style={{paddingBottom: '10px'}}></div>
            <button onClick={trocar} style={{width: '200px', height: '30', fontSize: '18px'}}>
                {troca ? 'Não' : 'Sim'}
            </button>
            <h2>{troca ? '' : 'NÃO AMO!!!! 😑'}</h2>
        </div>
    )
}

export default Home;