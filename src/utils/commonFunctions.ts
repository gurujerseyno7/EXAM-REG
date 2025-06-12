//YYYY-MM-DD to DD/MM/YYYY
export const dateFormat = (date: string) => {
  const splitDate = date.split("-");

  return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
};
