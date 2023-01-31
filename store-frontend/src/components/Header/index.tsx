import { useEffect, useState } from 'react';
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
  const [company, setCompany] = useState('');
  const [user, setUser] = useState('');
  const userName = useSelector(selectUserState);
  const { name } = useSelector(selectCompanyState);

  useEffect(() => {
    const user = localStorage.getItem('userName') || '';
    const companyData = JSON.parse(
      localStorage.getItem('companyData') as string,
    );

    if (user.length > 1 && companyData.name) {
      setUser(user);
      setCompany(companyData.name);
    } else {
      setUser(userName);
      setCompany(name);
    }
  }, []);

  return (
    <HeaderContainer>
      <CompanyContainer>{company}</CompanyContainer>
      <HelloContainer>
        <FaUserCircle size={30} />
        Olá, {user}
      </HelloContainer>
    </HeaderContainer>
  );
}
