import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: #e2e2e2;
  height: 50px;
`;

const Header: React.SFC = () => <StyledHeader>Blerp Corp</StyledHeader>;

export default Header;
