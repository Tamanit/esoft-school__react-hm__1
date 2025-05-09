import {useState, useEffect} from 'react';

export default () => {
    const [time, setTime] = useState(new Date);
    const [showSecretMessage, setShowSecretMessage] = useState(false);

    useEffect(() => {
        setShowSecretMessage(time.getMinutes() % 5 === 0);
    }, [time]);

    function changeTimeWithTimeout(timeInSeconds) {
        setTimeout(() => {
            setTime(new Date);
            changeTimeWithTimeout(timeInSeconds);
        }, timeInSeconds * 1000)
    }

    changeTimeWithTimeout(1);

    return (<div>
        <span>{time.toLocaleString()}</span>
        {showSecretMessage ? <span>(Время делится на 5)</span> : null}
    </div>)
}