import { ReactNode } from "react";
import EmphasizeText from "./EmphasizeText";

export type RemainTime = number;
export type Round = {
  alias: string;
  goal: number;
  wave: RemainTime[];
  hasEvent: boolean;
  newsMessage: ReactNode;
  commandMessage: ReactNode[];
  eventMessage: ReactNode;
};
export type RoundState = "progress" | "pending" | "success" | "fail";

// // Round constant value.
// export const RoundInformation: Round[] = [
//   {
//     alias: "A",
//     goal: 1000,
//     wave: [30, 40, 50],
//     hasEvent: false,
//     newsMessage: "",
//     commandMessage: [""],
//     eventMessage: "",
//   },
//   {
//     alias: "C",
//     goal: 2000,
//     wave: [30, 40, 50],
//     hasEvent: true,
//     newsMessage: <EmphasizeText message="Mass shooting left 80 victims..." />,
//     commandMessage: [
//       <span>
//         See <EmphasizeText message={"the news"} /> below! It smells like{" "}
//         <EmphasizeText message={"huge money"} />
//         ... Ha Ha Ha
//       </span>,
//       <span>
//         What are you waiting for? All you have to do is showing{" "}
//         <EmphasizeText message="what they want" />.
//       </span>,
//       <span>
//         Nah... I don't get it. Why you hesitate like this??
//         <EmphasizeText message={"JUST SHOW THEM."} />
//       </span>,
//     ],
//     eventMessage: <p></p>,
//   },
//   {
//     alias: "E",
//     goal: 3000,
//     wave: [30],
//     hasEvent: true,
//     newsMessage: (
//       <EmphasizeText
//         message="“Promotes hate speech”... Goverment starts regulating platform <Feed
//       Lovers>."
//       />
//     ),
//     commandMessage: [
//       <p>
//         Wait...what? We try our best to{" "}
//         <EmphasizeText message="just earn money" />! This can't be happened!
//       </p>,
//     ],
//     eventMessage: <></>,
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
    commandMessage: [""],
    eventMessage: "",
  },
  {
    alias: "C",
    goal: 2000,
    wave: [40, 5, 5],
    hasEvent: true,
    newsMessage: <EmphasizeText message="Mass shooting left 80 victims..." />,
    commandMessage: [
      <span>
        See <EmphasizeText message={"the news"} /> below! It smells like{" "}
        <EmphasizeText message={"huge money"} />
        ... Ha Ha Ha
      </span>,
      <span>
        What are you waiting for? All you have to do is showing{" "}
        <EmphasizeText message="what they want" />.
      </span>,
      <span>
        Nah... I don't get it. Why you hesitate like this??
        <EmphasizeText message={"JUST SHOW THEM."} />
      </span>,
    ],
    eventMessage: (
      <span>
        Kia~~.. Look at that piles of money~~!! &#10; Nevermind for the loosers~
        lol.
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
    commandMessage: [
      <p>
        Wait...what? We try our best to{" "}
        <EmphasizeText message="just earn money" />! This can't be happened!
      </p>,
    ],
    eventMessage: <p></p>,
  },
];
