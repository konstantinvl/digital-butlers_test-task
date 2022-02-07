import React from 'react';
import { TextProxima } from '../textProxima';

export function StepNumber(props: { number: number }) {
  const { number } = props;

  return <TextProxima classes={['steps-step__number']}>{`ШАГ №${number}.`}</TextProxima>;
}
