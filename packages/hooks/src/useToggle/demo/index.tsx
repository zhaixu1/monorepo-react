import React from 'react';

import { useToggle } from '../../index';

export default () => {
    const [state, { toggle, setLeft, setRight }] = useToggle('hhh', 'ccc');

    return (
        <div>
            <p>Effect: {`${state}`}</p>

            <button onClick={toggle} style={{marginRight: '10px'}}>Toggle</button>

            <button onClick={setLeft} style={{marginRight: '10px'}}>setLeft</button>

            <button onClick={setRight}>setRight</button>
        </div> 
    )
}