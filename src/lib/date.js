const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const parseCompanyDate = dateString => {
  const dateRegex = /(\d{4})-(\d{2})-(\d{2})/;
  const match = dateRegex.exec(dateString);
  if (match) {
    const year = match[1];
    const month = match[2] - 1;
    const day = match[3];
    return new Date(year, month, day);
  }
  return null;
};

export const formatCompanyDate = date => {
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
};

export const parseAndFormatCompanyDate = date => {
  if (date) return formatCompanyDate(parseCompanyDate(date));
  return '';
};
