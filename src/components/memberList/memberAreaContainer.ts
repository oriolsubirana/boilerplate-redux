import { State } from "../../reducers";
import { memberRequestStart } from "../../actions";
import { MemberAreaComponent } from "./memberArea";
import { connect } from "react-redux";

const mapStateToProps = (state: State) => ({
    members: state.memberReducer,
});

const mapDispatchToProps = (dispatch) => ({
    loadMembers: () => dispatch(memberRequestStart())
});

export const MemberAreaContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MemberAreaComponent);