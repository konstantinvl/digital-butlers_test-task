import React from 'react';
import { DownloadIcon } from '../icons/downloadIcon';
import { TextGilroy } from '../textGilroy';
import { TextProxima } from '../textProxima';
import { Button } from './button';
import './heroContent.scss';

export function HeroContent() {
  return (
    <div className='hero-content'>
      <div className='hero-content__left'>
        <TextGilroy>Независимое обследование зданий и сооружений</TextGilroy>
        <TextProxima>
          антенн, труб, теплосетей, канализаций и других объектов строительства
        </TextProxima>
      </div>
      <div className='hero-content__right'>
        <Button classes={['hero-btn', 'yellow']}>
          <DownloadIcon />
          <TextGilroy>получить коммерческое</TextGilroy>
        </Button>
        <TextProxima>
          Отправьте техзадание и получите коммерческое предложение в течении 15 минут на свой email
          или в мессенджер
        </TextProxima>
      </div>
    </div>
  );
}
