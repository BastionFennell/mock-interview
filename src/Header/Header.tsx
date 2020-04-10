import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  align-items: center;
  background: #e2e2e2;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  height: 50px;
  padding-left: 15px;
`;

const Header: React.SFC = () => <StyledHeader>Blerp Corp</StyledHeader>;

export default Header;
