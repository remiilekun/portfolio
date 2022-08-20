import { parse, format } from 'date-fns';

export const parseCompanyDate = date => {
  return parse(date, 'yyyy-MM-dd', new Date());
};

export const formatCompanyDate = date => {
  return format(date, 'MMM yyyy');
};

export const parseAndFormatCompanyDate = date => {
  if (date) return formatCompanyDate(parseCompanyDate(date));
  return '';
};
