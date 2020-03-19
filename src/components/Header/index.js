import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';

import logo from '../../assets/header.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBaber" />
          <Link to="Dashboard">DASHBOARD</Link>
        </nav>
        <Notifications />
        <Profile>
          <div>
            <strong>{profile.name}</strong>
            <Link to="profile">Meu perfil</Link>
          </div>
          <img
            src="https://api.adorable.io/avatars/50/abott@adorable.png"
            alt="Gabriel"
          />
        </Profile>
      </Content>
    </Container>
  );
}
