export function formatDate(date: string): string {
  const [year, day, monthWithTime] = date.split("-");
  const month = monthWithTime.slice(0, 2); 
  return `${day}.${month}.${year}`; 
}