import { State } from "../../reducers";
import { updateUserProfilename } from "../../actions";
import { NameEditComponent } from "./nameEdit";
import { Dispatch } from "redux";
import { connect } from "react-redux";


const mapStateToProps = (state: State) => ({
    username: state.userProfileReducer.firstname,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onChange: (name: string) => dispatch(updateUserProfilename(name)),
});

export const NameEditConainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NameEditComponent);