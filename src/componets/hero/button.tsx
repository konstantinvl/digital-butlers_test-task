import React from 'react';

export function Button(props: { children: JSX.Element[]; classes?: string[] }) {
  const { children, classes } = props;
  return (
    <button type='button' className={'button ' + classes?.join(' ')}>
      {children}
    </button>
  );
}
