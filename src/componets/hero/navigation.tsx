import React from 'react';
import './navigation.scss';
import Logo from '../../assets/images/logo.png';
import { BurgerIcon } from '../icons/burgerIcon';
import { Mail } from './mail';
import { Phone } from './phone';

export function Navigation() {
  return (
    <nav className='navigation'>
      <div className='navigation__left'>
        <BurgerIcon></BurgerIcon>
        <img className='navigation__left__logo' src={Logo} alt='logo' />
      </div>
      <div className='navigation__right'>
        <Mail />
        <Phone />
      </div>
    </nav>
  );
}
