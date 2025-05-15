import {useState, useEffect} from 'react';

export default () => {
    const [time, setTime] = useState(new Date);

    useEffect(() => {
        const intervalId = setInterval(
            () => setTime(new Date),
            1000
        );

        return () => clearInterval(intervalId);
    }, []);

    return (<div>
        <span>{time.toLocaleString()}</span>
        {time.getMinutes() % 5 === 0 ? <span>(Время делится на 5)</span> : null}
    </div>)
}