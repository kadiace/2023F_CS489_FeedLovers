import { atom } from "recoil";

export const roundWaveCountAtom = atom<{ round: number; wave: number }>({
  key: "selectRoundWaveAtom",
  default: {
    round: 0,
    wave: 0,
  },
});
