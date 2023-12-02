export type RemainTime = number;
export type Round = { alias: string; goal: number; wave: RemainTime[] };

// Round constant value.
export const RoundInformation: Round[] = [
  {
    alias: "A",
    goal: 1000,
    wave: [30, 40, 50],
  },
  {
    alias: "C",
    goal: 2000,
    wave: [30, 40, 50],
  },
  {
    alias: "E",
    goal: 3000,
    wave: [30],
  },
];
