import { useReducer } from "react";

const counterReducer =(state, action)=>{
     switch(action.type){
        case'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'MULTX2':
                return state *2;
        case 'RESET':
            return state * 0;
        default:
            return state;
     }
}
const initialState= 0;

const Contador = ()=>{
    const [state, dispatch]= useReducer(counterReducer, initialState);
    return(
        <div>
            <h1>Contador: {state}</h1>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>Incrementar</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrementar</button>
            <button onClick={() => dispatch({type: 'MULTX2'})}>Multiplicar</button>
            <button onClick={() => dispatch({type: 'RESET'})}>Resetear</button>
        </div>
    );
};

export default Contador;
