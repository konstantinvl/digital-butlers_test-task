import React from 'react';

export function BurgerIcon(): JSX.Element {
  return (
    <div className='navigation__menu-icon'>
      <div className='navigation__menu-icon__whiteline' />
      <div className='navigation__menu-icon__yellow'>
        <div className='navigation__menu-icon__yellowline' />
        <div className='navigation__menu-icon__yellowline' />
      </div>
      <div className='navigation__menu-icon__whiteline' />
    </div>
  );
}
