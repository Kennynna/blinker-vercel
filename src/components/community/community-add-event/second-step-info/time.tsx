
import { ClockInputIcon } from '../../icons/clock-input';
import { InputEvent } from '../shared/input-event';

export const EventTime = () => {
  return <InputEvent  icon={<ClockInputIcon />} title="Время" type="time" placeholder='00:00' strong={true}/>;
};
