import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {renderField} from "../FormRenders/renderField";
import SlippyButton from '../Slippy/SlippyButton'

const validate = values => {
  const requiredMsg = "Este campo é obrigatório";
  const errors = {};

  if (!values.email) {
    errors.email = requiredMsg
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Endereço de e-mail inválido'
  }

  if (!values.password) {
    errors.password = requiredMsg
  }

  return errors
};


function FormLogin(props) {
  const {handleSubmit, submitting} = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={renderField} label="E-mail" />
      <Field name="password" type="password" component={renderField} label="Senha" />

      <SlippyButton type='submit' disabled={submitting}>
        {submitting ? 'Efetuando Login' : 'Login'}
      </SlippyButton>
    </form>
  )
}

export default reduxForm({
  form: 'formlogin',
  validate
})(FormLogin)
