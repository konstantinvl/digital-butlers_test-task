import React from 'react';

export function TextProxima(props: { children: string; classes?: string[] }) {
  const { children, classes } = props;
  return (
    <span className={classes ? 'textProxima ' + classes?.join(' ') : 'textProxima'}>
      {children}
    </span>
  );
}
