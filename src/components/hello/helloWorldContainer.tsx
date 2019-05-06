import * as React from 'react';
import { HelloWorldComponent } from './helloWorld';

interface Props {
}

export const HelloWorldContainer = (props: Props) => {

    const [username, setUsername] = React.useState('John Doe');

    return (
        <HelloWorldComponent username={username} />
    )
}