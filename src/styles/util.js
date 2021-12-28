export const spacing = (space) => `${space * 8}px`;

export const combineSpace = (...args) =>
  `${args.reduce((prev, next) => prev + parseInt(next), 0)}px`;

export const tint = (hex, amount) => {
  const getSingle = (number) => parseInt((number * (100 + amount)) / 100, 10);
  const getDouble = (number) => number.toString(16).padStart(2, '0');

  let R = parseInt(hex.substring(1, 3), 16);
  let G = parseInt(hex.substring(3, 5), 16);
  let B = parseInt(hex.substring(5, 7), 16);

  R = getSingle(R);
  G = getSingle(G);
  B = getSingle(B);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const RR = getDouble(R);
  const GG = getDouble(G);
  const BB = getDouble(B);

  return `#${RR}${GG}${BB}`;
};
