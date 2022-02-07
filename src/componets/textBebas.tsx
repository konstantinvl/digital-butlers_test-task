import React from 'react';

export function TextBebas(props: { children: string; classes?: string[] }) {
  const { children, classes } = props;
  return (
    <span className={classes ? 'textBebas ' + classes.join(' ') : 'textBebas'}>{children}</span>
  );
}
