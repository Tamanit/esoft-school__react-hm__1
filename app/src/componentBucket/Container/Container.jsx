import {fakerRU as faker} from '@faker-js/faker';
import {useState} from 'react';
import Greeting from "../Greeting.jsx";
import Clock from "../Clock.jsx";
import Header from "../Header.jsx";

export default () => {
    const [name, setName] = useState(getName());

    function getName() {
        return faker.person.fullName();
    }

    function changeNameWithTimeout(timeInSeconds) {
        setTimeout(() => {
            setName(getName());
            changeNameWithTimeout(timeInSeconds);
        }, timeInSeconds * 1000)
    }

    changeNameWithTimeout(10);

    return (<div>
        <Header/>
        <Clock/>
        <Greeting name={name}></Greeting>
    </div>)
}