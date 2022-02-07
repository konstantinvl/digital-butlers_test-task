import React from 'react';

export function TextGilroy(props: { children: string; classes?: string[] }) {
  const { children, classes } = props;
  return (
    <span className={classes ? 'textGilroy ' + classes?.join(' ') : 'textGilroy'}>{children}</span>
  );
}
