import * as React from 'react';
import { HelloWorldComponent } from './helloWorld';
import { State } from '../../reducers';
import { connect } from 'react-redux';


const mapStateToProps = (state: State) => ({
    username: state.userProfileReducer.firstname,
});

const mapDispatchProps = (dispatch) => ({

});

export const HelloWorldContainer = connect(
    mapStateToProps,
    mapDispatchProps
)(HelloWorldComponent);