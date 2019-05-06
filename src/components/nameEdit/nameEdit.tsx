import * as React from 'react';

interface Props {
    username: string;
    onChange: (name: string) => void;
}

export const NameEditComponent = (props: Props) => {
    return (
        <>
            <label>Update name: </label>
            <input
                value={props.username}
                onChange={(e) => props.onChange(e.target.value)} />

        </>
    )
}