import React from 'react';
import {
  HeaderContainer,
  HelloContainer,
  CompanyContainer,
} from './Header.styles';
import { FaUserCircle } from 'react-icons/fa';
import { selectUserState } from 'redux/store/userSlice';
import { selectCompanyState } from 'redux/store/companySlice';
import { useSelector } from 'react-redux';

export default function Header() {
  const userName = useSelector(selectUserState);
  const { name } = useSelector(selectCompanyState);
  return (
    <HeaderContainer>
      <CompanyContainer>{name}</CompanyContainer>
      <HelloContainer>
        <FaUserCircle size={30} />
        Olá, {userName}
      </HelloContainer>
    </HeaderContainer>
  );
}
