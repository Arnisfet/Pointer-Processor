import FileUploader from '../components/FileUploader.jsx';
import { TextField } from '../components/TextField.jsx';
import { TextBlock } from '../components/MainBody.jsx';
import React from 'react';

export function AuditoryCalcPage() {
  return (
    <div className="base">
      <TextBlock title={"Расчет аудиторий"}
                 description={"Для расчета необходимо заполнить следующие поля:"} />
      <ul>
        <li>Прикрепить файл с координатами для сбора аудиторий</li>
        <li>Указать радиус в метрах</li>
        <li>Указать дату старта сбора</li>
        <li>Указать дату конца сбора</li>
      </ul>
      <div>
        <FileUploader />
        <p>Поле</p>
        <TextField />
      </div>
    </div>
  );
}