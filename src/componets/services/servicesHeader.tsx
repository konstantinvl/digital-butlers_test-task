import React from 'react';
import { TextBebas } from '../textBebas';
import { TextGilroy } from '../textGilroy';
import './servicesHeader.scss';

export function ServicesHeader() {
  return (
    <div className='services-header'>
      <TextBebas>Услуги</TextBebas>
      <TextGilroy>Выполняем как комплексное обследование, так и отдельные виды работ</TextGilroy>
    </div>
  );
}
