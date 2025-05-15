import {fakerRU as faker} from '@faker-js/faker';
import {useState, useEffect} from 'react';
import Greeting from "./Greeting.jsx";
import Clock from "./Clock.jsx";
import Header from "./Header.jsx";

function getName() {
    return faker.person.fullName();
}

export default () => {
    const [name, setName] = useState(getName());

    useEffect(() => {
        const intervalId = setInterval(
            () => setName(getName()),
            10000
        );

        return () => clearInterval(intervalId);
    }, []);

    return (<div>
        <Header/>
        <Clock/>
        <Greeting name={name}/>
    </div>)
}