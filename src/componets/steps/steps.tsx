import React from 'react';
import { TextProxima } from '../textProxima';
import { StepNumber } from './stepNumber';
import { StepsHeader } from './stepsHeader';
import { StepsStep } from './stepsStep';

export function Steps() {
  return (
    <div className='steps'>
      <StepsHeader />
      <StepsStep horizontal>
        <div className='step1-photo' />
        <div className='step1-info'>
          <div className='step1-info__header'>
            <div className='title-wrapper'>
              <StepNumber number={1} />
              <TextProxima classes={['title']}>Подготовительные работы</TextProxima>
            </div>
            <TextProxima>
              Мы осматриваем здание, делаем замеры и проверяем наличие визуально заметных дефектов:
              трещин, коррозии, повреждения фундамента и т.д.
            </TextProxima>
          </div>

          <div className='step1-info__quote'>
            <div className='step1-info__quote__photo' />
            <div className='step1-info__quote__text'>
              <TextProxima classes={['quote']}>
                “Задача этого этапа получить максимально полное представление о конструкции здания,
                условиях его эксплуатации и возможных слабых местах“
              </TextProxima>
              <TextProxima classes={['introduction']}>
                Алексей, обследователь и главный инженер проектов
              </TextProxima>
            </div>
          </div>
        </div>
      </StepsStep>
    </div>
  );
}
