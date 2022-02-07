import React from 'react';
import { TextGilroy } from '../textGilroy';
import { TextProxima } from '../textProxima';
import './whyWeContent.scss';

export function WhyWeContent() {
  return (
    <div className='whywe-content'>
      <TextGilroy>Мы работаем быстро и наши отчеты проходят согласование с первого раза</TextGilroy>
      <TextProxima>
        Над вашим объектом работает целая команда: 3 ГИПа (главных инженеров проектов) с опытом
        работы от 6 лет и 2 штатных сотрудника для камеральных работ
      </TextProxima>
    </div>
  );
}
