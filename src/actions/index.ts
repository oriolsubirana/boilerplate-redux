import { actionEnums } from "../common/actionEnums";
import { BaseAction } from "../common/baseAction";
import { MemberEntity } from "../model/member";
import { memberAPI } from "../api/member";
import { Dispatch } from "redux";

//updateUserProfileName => action creator
//lo de dentro => action
export const updateUserProfilename = (newname: string): BaseAction => ({
    type: actionEnums.UPDATE_USER_PROFILE_NAME,
    payload: newname,
});

export const memberRequestCompleted = (members: MemberEntity[]): BaseAction => ({
    type: actionEnums.MEMBER_REQUEST_COMPLETED,
    payload: members,
});

export const memberRequestStart = () => (dispatcher: Dispatch) => {
    const promise = memberAPI.getAllMembers();
    promise.then(data => dispatcher(memberRequestCompleted(data)))
    return promise;
}