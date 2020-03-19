import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  display: flex;
  height: 64px;
  max-width: 900px;
  margin: auto;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
    }
    a {
      font-weight: bold;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  border-left: 1px solid #eee;
  align-items: center;

  div {
    margin-right: 20px;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    a {
      margin-top: 2px;
      text-align: right;
      color: #999;
    }
  }
  img {
    border-radius: 50%;
  }
`;
