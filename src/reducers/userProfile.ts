import { string } from 'prop-types';
import { BaseAction } from '../common/baseAction';
import { actionEnums } from '../common/actionEnums';

export interface UserProfileState {
    firstname: string;
}

const defaultUserState = (): UserProfileState => ({
    firstname: 'Jane Doe',
});

//llega la action y si nos llega lo que esperamos, hacemos el update del 
//estado 
export const userProfileReducer = (state = defaultUserState(), action: BaseAction) => {
    switch (action.type) {
        case actionEnums.UPDATE_USER_PROFILE_NAME:
            return handleUserProfileAction(state, action.payload);
    }
    return state;
}
const handleUserProfileAction = (state: UserProfileState, firstname) => ({
    ...state,
    firstname,
});