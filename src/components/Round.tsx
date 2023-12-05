import { ReactNode } from "react";
import EmphasizeText from "./EmphasizeText";

export type RemainTime = number;
export type Round = {
  alias: string;
  goal: number;
  wave: RemainTime[];
  hasEvent: boolean;
  newsMessage: ReactNode;
  commandMessage: ReactNode;
};
export type RoundState = "progress" | "success" | "fail";

// // Round constant value.
// export const RoundInformation: Round[] = [
//   {
//     alias: "A",
//     goal: 1000,
//     wave: [30, 40, 50],
//   },
//   {
//     alias: "C",
//     goal: 2000,
//     wave: [30, 40, 50],
//   },
//   {
//     alias: "E",
//     goal: 3000,
//     wave: [30],
//   },
// ];

// Round constant value for debugging.
export const RoundInformation: Round[] = [
  {
    alias: "A",
    goal: 300,
    wave: [5, 5, 5],
    hasEvent: false,
    newsMessage: "",
    commandMessage: "",
  },
  {
    alias: "C",
    goal: 400,
    wave: [5, 5, 5],
    hasEvent: true,
    newsMessage: <EmphasizeText message="Mass shooting left 80 victims..." />,
    commandMessage: (
      <span>
        What are you waiting for? All you have to do is showing{" "}
        <EmphasizeText message="what they want" />.
      </span>
    ),
  },
  {
    alias: "E",
    goal: 500,
    wave: [5],
    hasEvent: true,
    newsMessage: (
      <EmphasizeText
        message="“Promotes hate speech”... Goverment starts regulating platform <Feed
      Lovers>."
      />
    ),
    commandMessage: (
      <p>
        Wait...what? We try our best to{" "}
        <EmphasizeText message="just earn money" />! This can't be happened!
      </p>
    ),
  },
];
