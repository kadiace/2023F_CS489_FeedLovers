import { atom } from "recoil";

export const selectRoundAtom = atom<{ alias?: string }>({
  key: "selectRoundAtom",
  default: { alias: undefined },
});

export const waveCountAtom = atom<{ count?: number }>({
  key: "waveCountAtom",
  default: { count: undefined },
});

export const goalRemainAtom = atom<{ goal?: number }>({
  key: "goalRemainAtom",
  default: { goal: undefined },
});
