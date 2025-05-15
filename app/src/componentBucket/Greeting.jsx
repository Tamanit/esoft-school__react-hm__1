import {useEffect, useRef} from 'react';

export default ({name}) => {
    const previousName = useRef(name);

    useEffect(() => {
        previousName.current = name;
    }, [name]);

    return (<div>
        {previousName.current !== name ?
            `Привет, у тебя поменялось имя, теперь ты ${name}!` :
            `Привет, ${name}!`
        }
    </div>)
}
