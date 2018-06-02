import React, {Component} from 'react';
import FormLogin from '../components/Forms/FormLogin'
import {signInAction} from '../actions/Login/actionCreator'
import {connect} from 'react-redux';

class LoginView extends Component {
  loginSubmit = (values) => {
    return new Promise((resolve, reject) => {
      this.props.signInAction(values, this.props.history, resolve, reject);

    })
      .catch(err => {
        if(err === 'null' || err === 'undefined'){
          console.warn('Credenciais Inválidas!')
        } else{
          console.warn(err)
        }

      })
  };

  render() {
    return (
      <div>
        <FormLogin onSubmit={this.loginSubmit} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    signInAction: (values, history, resolve, reject) => dispatch(signInAction(values, history, resolve, reject))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
