import {useState, useLayoutEffect} from 'react';

export default ({name}) => {
    const [greeting, setGreeting] = useState('Привет ' + name + '!');
    const [firstRenderState, setFirstRenderState] = useState(true);

    useLayoutEffect(() => {
        !firstRenderState ?
            setGreeting('Привет, у тебя поменялось имя, теперь ты ' + name + '!') :
            setFirstRenderState(false);
    }, [name]);
    return (<div>
        {greeting}
    </div>)
}
