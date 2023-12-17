import { MouseEvent, MouseEventHandler, useState } from 'react';
import Typist from 'react-typist';

function GuideWindowMessage(props: {
  counter: number;
  messageList: string[];
  navigate: MouseEventHandler;
}) {
  const { counter: initCounter, messageList, navigate } = props;
  const [counter, setCounter] = useState(initCounter);

  const increment: MouseEventHandler = (e: MouseEvent) => {
    if (counter + 1 < messageList.length) setCounter(counter + 1);
    else {
      navigate(e);
    }
  };

  return (
    <div>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          whiteSpace: 'pre-line',
          width: '780px',
          height: '110px',
          color: '#71FF2F',
          fontFamily: 'SairaCondensed',
          fontSize: '26px',
          fontStyle: 'normal',
          lineHeight: '110%' /* 39.6px */,
          letterSpacing: '0.25px',
        }}
      >
        <Typist avgTypingDelay={15} key={counter}>
          {messageList[counter]}
        </Typist>
      </div>

      <div
        style={{
          position: 'relative',
          display: 'flex',
          top: '30px',
          whiteSpace: 'pre-line',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button
          style={{
            width: '100px',
            height: '45px',
            color: '#341948',
            backgroundColor: '#71FF2F',
            fontFamily: 'SairaCondensed',
            fontSize: '26px',
            fontStyle: 'normal',
            lineHeight: '110%' /* 39.6px */,
            letterSpacing: '0.25px',
          }}
          onClick={increment}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default GuideWindowMessage;
