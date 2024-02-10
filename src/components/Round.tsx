import EmphasizeText from 'components/EmphasizeText';

import { ReactNode } from 'react';

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
export type RoundState = 'progress' | 'pending' | 'success' | 'fail';

// Round constant value.
export const RoundInformation: Round[] = [
  {
    alias: 'A',
    goal: 1000,
    wave: [15, 15, 15, 15, 15],
    hasEvent: false,
    newsMessage: '',
    commandMessage: [''],
    eventMessage: '',
  },
  {
    alias: 'B',
    goal: 2000,
    wave: [25, 25, 25, 25],
    hasEvent: false,
    newsMessage: '',
    commandMessage: [''],
    eventMessage: '',
  },
  {
    alias: 'C',
    goal: 3500,
    wave: [30, 30, 30],
    hasEvent: true,
    newsMessage: (
      <span>
        Mass shooting left <EmphasizeText message='80 victims' />, The suspect
        was&#10; a teenage boy who{' '}
        <EmphasizeText message='enjoyed playing FPS games' />.
      </span>
    ),
    commandMessage: [
      <span key='0'>
        See <EmphasizeText message='the news' /> below! It smells like{' '}
        <EmphasizeText message='huge money' />
        ... Ha Ha Ha
      </span>,
      <span key='1'>
        What are you waiting for? All you have to do is showing{' '}
        <EmphasizeText message='what they want' />.
      </span>,
      <span key='2'>
        Nah... I don&apos;t get it. Why you hesitate like this??{' '}
        <EmphasizeText message='JUST SHOW THEM.' />
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
    alias: 'D',
    goal: 3000,
    wave: [20, 20, 20],
    hasEvent: false,
    newsMessage: '',
    commandMessage: [''],
    eventMessage: '',
  },
  {
    alias: 'E',
    goal: 3000,
    wave: [10, 30, 30],
    hasEvent: true,
    newsMessage: (
      <span>
        <EmphasizeText message='“Promotes hate speech”' />
        ... Goverment starts{' '}
        <EmphasizeText
          message='regulating platform <Feed
      Lovers>'
        />
        .
      </span>
    ),
    commandMessage: [
      <p key='0'>
        Wait...what? We try our best to{' '}
        <EmphasizeText message='just earn money' />! This can&apos;t be
        happened!
      </p>,
      <p key='1'>
        We love our consumers, and they love us.{' '}
        <EmphasizeText
          message="We can't leave these hungry
        lovers behind!"
        />
      </p>,
    ],
    eventMessage: <span>After E-1 Event: never see this</span>,
  },
];

// // Round constant value for debugging.
// export const RoundInformation: Round[] = [
//   {
//     alias: "A",
//     goal: 100,
//     wave: [5, 5, 5, 5, 5],
//     hasEvent: false,
//     newsMessage: "",
//     commandMessage: [""],
//     eventMessage: "",
//   },
//   {
//     alias: "B",
//     goal: 100,
//     wave: [5, 5, 5, 5],
//     hasEvent: false,
//     newsMessage: "",
//     commandMessage: [""],
//     eventMessage: "",
//   },
//   {
//     alias: "C",
//     goal: 1700,
//     wave: [15, 10, 5],
//     hasEvent: true,
//     newsMessage: (
//       <span>
//         Mass shooting left <EmphasizeText message="80 victims" />, The suspect
//         was&#10; a teenage boy who{" "}
//         <EmphasizeText message="enjoyed playing FPS games" />.
//       </span>
//     ),
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
//         Nah... I don't get it. Why you hesitate like this??{" "}
//         <EmphasizeText message={"JUST SHOW THEM."} />
//       </span>,
//     ],
//     eventMessage: (
//       <span>
//         Kia~~.. Look at that piles of money~~!! &#10; Nevermind for the loosers~
//         lol.
//       </span>
//     ),
//   },
//   {
//     alias: "D",
//     goal: 100,
//     wave: [5, 5, 5],
//     hasEvent: false,
//     newsMessage: "",
//     commandMessage: [""],
//     eventMessage: "",
//   },
//   {
//     alias: "E",
//     goal: 3000,
//     wave: [10, 30, 30],
//     hasEvent: true,
//     newsMessage: (
//       <span>
//         <EmphasizeText message="“Promotes hate speech”" />
//         ... Goverment starts{" "}
//         <EmphasizeText
//           message="regulating platform <Feed
//       Lovers>"
//         />
//         .
//       </span>
//     ),
//     commandMessage: [
//       <p>
//         Wait...what? We try our best to{" "}
//         <EmphasizeText message="just earn money" />! This can't be happened!
//       </p>,
//       <p>
//         We love our consumers, and they love us.{" "}
//         <EmphasizeText
//           message="We can't leave these hungry
//         lovers behind!"
//         />
//       </p>,
//     ],
//     eventMessage: <span>After E-1 Event: never see this</span>,
//   },
// ];
