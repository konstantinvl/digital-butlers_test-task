export interface ServiceInt {
  id: string;
  photo: string;
  title: string;
  info: string;
  link: string;
}

export const ServicesMock: ServiceInt[] = [
  {
    id: '1',
    photo: 'servicephoto1.png',
    title: 'Общее обследование',
    info: `Экспертиза отдельных конструкций, обмерные работы, определение прочности, расчет несущей способности и т.д.`,
    link: '/',
  },
  {
    id: '2',
    photo: 'servicephoto2.png',
    title: 'Тепловизионная съемка',
    info: 'Исследование системы отопления, вентиляции и кондиционирования, а также оценка энергоэффективности здания',
    link: '/',
  },
  {
    id: '3',
    photo: 'servicephoto3.png',
    title: 'Телеинспекция инженерных сетей',
    info: 'Цветная телевизионная съемка внутренней поверхности любых протяженных объектов до 250 метров',
    link: '/',
  },
  {
    id: '4',
    photo: 'servicephoto4.png',
    title: 'Тахеометрическая съемка',
    info: 'Построение чертежей при помощи лазера, который с точностью до микрона определяет расположение объектов в пространстве',
    link: '/',
  },
  {
    id: '5',
    photo: 'servicephoto5.png',
    title: 'Диагностика высотных сооружений',
    info: 'Оценка состояния антенн и дымовых труб при помощи альпинистов и квадрокоптеров с 30-кратным зумом',
    link: '/',
  },
];