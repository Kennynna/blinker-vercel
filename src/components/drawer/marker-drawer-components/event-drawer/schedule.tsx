import React from 'react';
import styled from '@emotion/styled';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

import { Title } from '../body/about/title';

// Стили остаются без изменений
const Container = styled.div`
  margin-top: 24px;
`;

const ScheduleBlock = styled.div`
  margin-top: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  background: #e9e1e1;
`;

const RowBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const LeftBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  p {
    font-size: 16px;
    font-weight: 700;
    margin: 0;
  }
  span {
    font-size: 14px;
    font-weight: 400;
  }
`;

const CenterBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  p {
    font-size: 16px;
    font-weight: 700;
    margin: 0;
  }
  span {
    font-size: 14px;
    font-weight: 400;
  }
`;

const PriceButton = styled.button`
  flex: 1;
  max-width: max-content;
  padding: 8px 16px;
  border-radius: 39px;
  background: #00a3ff;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  border: none;
`;

// Компонент Schedule с учетом zoneOffset
export const Schedule = ({ dates, zoneOffset }: { dates: string[]; zoneOffset: string }) => {
  // Функция для получения частей даты с учетом смещения
  const getLocalDateParts = (isoDate: string, zoneOffset: string) => {
    // Создаем объект Date из ISO-строки (предполагается UTC)
    const date = parseISO(isoDate);

    // Парсим zoneOffset, например "+03:00" или "-07:00"
    const [hours, minutes] = zoneOffset.split(':').map(Number);
    const offsetInMinutes = hours * 60 + (hours < 0 ? -minutes : minutes);

    // Корректируем время с учетом смещения
    const localDate = new Date(date.getTime() + offsetInMinutes * 60 * 1000);

    // Извлекаем части даты, используя UTC-методы, чтобы получить локальное время события
    const localYear = localDate.getUTCFullYear();
    const localMonth = localDate.getUTCMonth();
    const localDay = localDate.getUTCDate();
    const localHour = localDate.getUTCHours();
    const localMinute = localDate.getUTCMinutes();

    // Форматируем день и месяц, день недели с использованием date-fns
    const dayMonth = format(new Date(localYear, localMonth, localDay), 'd MMMM', { locale: ru });
    const weekDay = format(new Date(localYear, localMonth, localDay), 'EEEEEE', { locale: ru });

    // Форматируем время вручную в формате "HH:mm"
    const time = `${String(localHour).padStart(2, '0')}:${String(localMinute).padStart(2, '0')}`;

    return { dayMonth, weekDay, time };
  };

  return (
    <Container>
      <Title title="Расписание" id="Расписание" />
      <ScheduleBlock>
        {dates.map((dateStr, index) => {
          // Получаем отформатированные части даты
          const { dayMonth, weekDay, time } = getLocalDateParts(dateStr, zoneOffset);

          return (
            <React.Fragment key={index}>
              <RowBlock>
                <LeftBlock>
                  <p>{dayMonth}</p>
                  <span>{weekDay}</span>
                </LeftBlock>
                <CenterBlock>
                  <p>{time}</p>
                  <span>Название локации</span>
                </CenterBlock>
                <PriceButton>от 900 ₽</PriceButton>
              </RowBlock>
              {index < dates.length - 1 && <Border />}
            </React.Fragment>
          );
        })}
      </ScheduleBlock>
    </Container>
  );
};
