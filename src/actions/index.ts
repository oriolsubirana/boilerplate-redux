import { actionEnums } from "../common/actionEnums";
import { BaseAction } from "../common/baseAction";


export const updateUserProfilename = (newname: string): BaseAction => ({
    type: actionEnums.UPDATE_USER_PROFILE_NAME,
    payload: newname,
})