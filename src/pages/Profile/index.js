import React from 'react';

import { Form } from '@unform/web';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';
import { updateProfileRequest } from '../../store/modulos/user/actions';
import { signOut } from '../../store/modulos/auth/actions';
import Input from '../../components/input';

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function sair() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Digete seu Email" />

        <hr />

        <Input
          placeholder="Sua senha atual"
          name="oldPassword"
          type="password"
        />
        <Input placeholder="Nova senha" name="password" type="password" />
        <Input
          placeholder="Confirmação de senha"
          name=" confirmPassword"
          type="password"
        />
        <button type="submit">Atualizar perfil</button>
      </Form>
      <button onClick={sair} type="button">
        Sair do GoBarber
      </button>
    </Container>
  );
}
