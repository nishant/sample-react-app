import React, { useState } from 'react';

const Counter: React.FC<{}> = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return <>
        <Textbox num={count}/>
        <Button onClick={increment} text={'Increment'} />
        <Button onClick={decrement} text={'Decrement'} bgColor={'red'}/>
    </>
};

const Textbox: React.FC<{num: number}> = ({num}) => {
    return <p>{num}</p>
};

const Button: React.FC<ButtonProps> = (props) => {
    const color = props.bgColor ?? 'green';

    return(
        <button style={{ background: color }}
                onClick={props.onClick}>
            {props.text}
        </button>
    )
};


interface ButtonProps {
    bgColor?: string;
    text: string;
    onClick: () => void;
}

const API_URL = 'https://catfact.ninja/fact;'

export default Counter;
