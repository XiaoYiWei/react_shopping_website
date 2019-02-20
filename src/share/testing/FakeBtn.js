import React from 'react'
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import loginActionCreator from './../../components/login/action'

const FakeBtn = (props) => <Button onClick={() => props.setUserName('aaa')} >Click Me!</Button>

const mapDispatchToProps = (dispatch, ownProps) => ({
    setUserName: (userName) => {
        dispatch(loginActionCreator.setUserName(userName));
    }
});
export default connect(
    mapDispatchToProps
)(FakeBtn);
