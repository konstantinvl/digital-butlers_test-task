import React from 'react';
import './stepsStep.scss';

export function StepsStep(props: { horizontal: boolean; children: JSX.Element | JSX.Element[] }) {
  const { horizontal, children } = props;

  return <div className={horizontal ? 'steps-step horizontal' : 'steps-step'}>{children}</div>;
}
