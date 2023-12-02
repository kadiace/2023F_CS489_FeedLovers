import { Round, RoundInformation } from "components/Round";
import { atom } from "recoil";

export const roundCountAtom = atom<number>({
  key: "selectRoundAtom",
  default: 0,
});

export const waveCountAtom = atom<number>({
  key: "waveCountAtom",
  default: 0,
});
