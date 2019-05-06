import { combineReducers } from 'redux';
import { userProfileReducer, UserProfileState } from './userProfile';
import { MemberState, memberReducer } from './memberReducer';

export interface State {
    userProfileReducer: UserProfileState;
    memberReducer: MemberState;
}

export const reducers = combineReducers<State>({
    userProfileReducer,
    memberReducer,
})