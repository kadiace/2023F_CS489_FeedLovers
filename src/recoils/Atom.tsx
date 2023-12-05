import { RoundState } from "components/Round";
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

export const roundStateAtom = atom<RoundState>({
  key: "roundStateAtom",
  default: "progress",
});

export const isEventAtom = atom<boolean>({
  key: "isEventAtom",
  default: false,
});

export const contentsAtom = atom<number[]>({
  key: "contentsAtom",
  default: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
});

export const timeAtom = atom<number>({
  key: "timeAtom",
  default: 0,
});
