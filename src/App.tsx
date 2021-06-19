import React, {useEffect, useState} from 'react';
import './App.css';
import Increment from './Component/Inc/Increment';
import Reset from "./Component/Reset/Reset";

function App() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let ValueAsString = localStorage.getItem('counter value') // Закидывает значение в localstorage getItem
        if (ValueAsString) {// Проверка на null | undefined
            const newValue = JSON.parse(ValueAsString) // JSON.parse(ValueAsString) JSON.parse переводит в число
            setCount(newValue) // Перерисовывается компонента и берет новое значение
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counter value', JSON.stringify(count))
        // localStorage.setItem('counter value ', JSON.stringify(count))
        // Фиксирует значение setItem
        // JSON.stringify переводит в строку counter
    }, [count])


    const increment = () => {
        if (count <= 4) {
            setCount(count + 1)
        }
        return
    }
    const reset = () => setCount(0)

    return (
        <div className="App">
            <div className={'wrapper'}>
                <div className={'box'}>
                    <h1 className={count > 4 ? "bgc" : ''}>
                        {count}
                    </h1>
                    <Increment increment={increment}/>
                    <Reset
                        count={count}
                        reset={reset}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
