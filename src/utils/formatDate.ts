export const formatDate = (date: Date | string) =>
  new Date(date).toLocaleDateString("en-GB");