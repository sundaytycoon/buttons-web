export const spacing = (space) => `${space * 8}px`;

export const combineSpace = (...args) =>
  `${args.reduce((prev, next) => prev + parseInt(next), 0)}px`;
