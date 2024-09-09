import FileUploader from '../components/FileUploader.jsx';
import {CalcAudienceForm} from '../components/Forms.jsx';
import { TextBlock } from '../components/MainBody.jsx';
import {audienceOptions} from '/data/audience-options.js'
import React from 'react';
import { Button } from 'react-bootstrap';

export function AuditoryCalcPage() {
  return (
    <div className="base">
      <TextBlock
        title={audienceOptions[0].firstOption}
        description={'Для расчета необходимо заполнить следующие поля:'}
      />
      <ul>
        <li>Прикрепить файл с координатами для сбора аудиторий</li>
        <li>Указать радиус в метрах</li>
        <li>Указать дату старта сбора</li>
        <li>Указать дату конца сбора</li>
      </ul>
      <p>
        Для корректной вылидации файла в каждой строке должно находиться
        описание геометрии в виде пар широты и долготы через запятую. В обычной
        ситуации в каждой строке будет только 2 числа с плавающей точкой, но для
        переопределения радиуса для конкретной точки можно добавить третье со
        значением радиуса(в метрах).
        <br />Так же код позволяет обрабатывать полигоны. В таком случае в
        одной строке должны находиться все точки полигона, а также первая и
        последняя должны быть одной точкой(так можно понять что это замкнутая
        линия)
      </p>
      <div>
        <CalcAudienceForm />
      </div>
      <p></p>
      <Button variant="outline-dark">Расчитать</Button>
    </div>
  );
}