export const convertHMin = (min: number) => {
  if (min < 0) {
    return `-${Math.trunc((-1 * min) / 60)}h${(-1 * min) % 60}min`;
  }
  return `${Math.trunc(min / 60)}h${min % 60}min`;
};
