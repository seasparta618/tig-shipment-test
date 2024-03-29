import { format, parseISO } from 'date-fns';

export const formatDate = (dateString: string, formatStr: string) => {
  const date = parseISO(dateString);
  return format(date, formatStr);
};
