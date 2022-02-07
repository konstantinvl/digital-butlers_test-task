import React from 'react';
import { TextBebas } from '../textBebas';
import { TextGilroy } from '../textGilroy';
import './stepsHeader.scss';

export function StepsHeader() {
  return (
    <div className='steps-header'>
      <TextBebas>Мы работаем в комплексе</TextBebas>
      <TextGilroy>
        чтобы Вы не тратили время на поиск и организацию множества подрядчиков
      </TextGilroy>
    </div>
  );
}
