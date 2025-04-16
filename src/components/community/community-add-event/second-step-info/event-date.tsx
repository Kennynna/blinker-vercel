import { CalendarInputIcon } from '../../icons/calendar-input';
import { InputEvent } from '../shared/input-event';

export const EventDate = () => {

  return <InputEvent title="Дата" type="date" icon={<CalendarInputIcon />} strong={true} placeholder="--_--_----" />;
};
