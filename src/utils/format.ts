import { ServerError } from './types';

export function formatCurrency(
  value: number | string,
  locale = 'en-US',
  currency = 'USD'
) {
  return value
    .toLocaleString(locale, { style: 'currency', currency })
    .replace(/\D\d\d$/, '');
}

export function formatNumber(value: number) {
  return value.toLocaleString('en');
}

export function formatDate(
  date: string | Date | number,
  options?: Intl.DateTimeFormatOptions
) {
  return new Date(date).toLocaleDateString('en', options);
}

export function formatPhoneNumber(phoneNumber: string, defaultValue?: string) {
  const cleaned = `${phoneNumber}`.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return defaultValue || phoneNumber;
}

export function formatServerError(
  e: ServerError,
  defaultErrorMessage?: string
) {
  let errorMessage = defaultErrorMessage || 'There was an error';
  if (e && e.Violations && e.Violations.length) {
    const errors = e.Violations;
    errorMessage = errors[0].Message;
  }
  return errorMessage;
}
