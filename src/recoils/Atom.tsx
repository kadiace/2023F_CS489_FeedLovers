import { atom } from "recoil";

export const roundWaveCountAtom = atom<{ round: number; wave: number }>({
  key: "roundWaveCountAtom",
  default: {
    round: 0,
    wave: 0,
  },
});

export const goalAtom = atom<number>({
  key: "goalAtom",
  default: 0,
});

export const successRoundAtom = atom<boolean>({
  key: "successRoundAtom",
  default: true,
});

export const contentsAtom = atom<number[]>({
  key: "contentsAtom",
  default: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
});
