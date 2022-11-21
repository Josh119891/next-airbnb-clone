import { format } from "date-fns";

export const getDateString = (date: any) =>
  format(new Date(date), "dd MMMM yy");
