import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: .5rem 1rem;
  background: ${props => props.theme.primary};
  font-size: 1.5rem;
  border-radius: 50%;
  font-weight: bold;
  border: 0;
  cursor: pointer;

  &:not(:first-of-type) {
    margin-left: .5rem;
  }

  &:disabled {
    color: ${props => props.theme.blackTransparent};
  }
`;

export default Button;
