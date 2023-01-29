import { format } from 'date-fns';

export const formatEventStart = start => {
  return format(Date.parse(start), 'dd MM yyyy, HH:mm');
};
