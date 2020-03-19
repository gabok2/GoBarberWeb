import React, { useRef } from 'react';
import { Ring } from 'react-spinners-css';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { signInRequest, signFailure } from '../../store/modulos/auth/actions';
import Input from '../../components/input';
import logo from '../../assets/logo.svg';

export default function SignIn() {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit({ email, password }) {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Email invalido')
          .required('O email é obrigatório'),
        password: Yup.string()
          .min(6, 'Minimo 6 caracteres')
          .required('A senha é obrigatória'),
      });
      await schema.validate(
        { email, password },
        {
          abortEarly: false,
        }
      );
      dispatch(signInRequest(email, password));
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
      dispatch(signFailure());
    }
  }
  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <img src={logo} alt="Gobarber" />
      <Input placeholder="Digete seu Email" name="email" />
      <Input placeholder="Digete sua Senha" name="password" type="password" />
      <button type="submit">{loading ? <Ring size={20} /> : 'Acessar'}</button>
      <Link to="/register">Criar conta gratuita</Link>
    </Form>
  );
}
