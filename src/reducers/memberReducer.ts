import { actionEnums } from '../common/actionEnums';
import { MemberEntity } from '../model/member';
import { BaseAction } from '../common/baseAction';

export type MemberState = MemberEntity[];

//member reducer para guardar la lista de miembros
export const memberReducer = (state: MemberState = [], action: BaseAction) => {
    switch (action.type) {
        case actionEnums.MEMBER_REQUEST_COMPLETED:
            return handleMemberRequestCompletedAction(state, action.payload);
    }

    return state;
}

const handleMemberRequestCompletedAction = (state: MemberState, members: MemberState): MemberState =>
    members;