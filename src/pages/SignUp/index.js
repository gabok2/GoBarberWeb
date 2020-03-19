import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { signUpRequest } from '../../store/modulos/auth/actions';
import Input from '../../components/input';
import logo from '../../assets/logo.svg';

export default function SignIn() {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  async function handleSubmit({ nome, email, password }) {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        nome: Yup.string().required('Nome é obrigatório'),

        email: Yup.string()
          .email('Email invalido')
          .required('O email é obrigatório'),
        password: Yup.string()
          .min(6, 'Minimo 6 caracteres')
          .required('A senha é obrigatória'),
      });
      await schema.validate(
        { nome, email, password },
        {
          abortEarly: false,
        }
      );
      dispatch(signUpRequest(nome, email, password));
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }
  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <img src={logo} alt="Gobarber" />
      <Input placeholder="Digete seu Nome" name="nome" />
      <Input placeholder="Digete seu Email" name="email" />
      <Input placeholder="Digete sua Senha" name="password" type="password" />
      <button type="submit">Criar conta</button>
      <Link to="/">já tenho login</Link>
    </Form>
  );
}
