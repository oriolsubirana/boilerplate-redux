import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { memberRequestStart } from '../../actions';

interface Props {
    members: MemberEntity[];
    loadMembers: () => void;
}

export const MemberAreaComponent = (props: Props) => {
    const { loadMembers, members } = props;

    return (
        <>
            <button onClick={loadMembers}>Load</button>
            <ul>
                {
                    members.map(member => <li key={member.id}>{member.login}</li>)
                }
            </ul>
        </>
    );
};
