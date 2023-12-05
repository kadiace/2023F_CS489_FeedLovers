export type RemainTime = number;
export type Round = {
  alias: string;
  goal: number;
  wave: RemainTime[];
  hasEvent: boolean;
  newsMessage: string;
  commandMessage: string;
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
    newsMessage: "Mass shooting left 80 victims...",
    commandMessage: "What are you waiting for?",
  },
  {
    alias: "E",
    goal: 500,
    wave: [5],
    hasEvent: true,
    newsMessage:
      "“Promotes hate speech”... Starts regulating platform <Feed lovers>",
    commandMessage:
      "Wait...what? We just do our best!.. This can't be happened!",
  },
];
