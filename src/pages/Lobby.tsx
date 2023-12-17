import LogoBeforeEnding from 'assets/img/logo/logo.png';

import TextButton from 'components/TextButton';

import { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

function Lobby() {
  // navigate
  const navigate = useNavigate();
  const navigateGuide: MouseEventHandler = () => {
    navigate('/guide');
  };
  const navigateMain: MouseEventHandler = () => {
    navigate('/main');
  };
  const navigateEnding: MouseEventHandler = () => {
    navigate('/ending');
  };

  // constants
  const color = '#71FF2F';
  const hoverColor = '#FFFFFF';
  const clickColor = '#60DA28';
  return (
    <div
      className='Lobby'
      style={{
        position: 'absolute',
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        display: 'flex',
      }}
    >
      <div
        className='Logo-Layout'
        style={{
          flex: 3,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          className='Logo-Image'
          style={{
            width: '600px',
            height: '600px',
            backgroundImage: `url(${LogoBeforeEnding})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
        ></div>
      </div>
      <div
        className='Button-Layout'
        style={{
          flex: 2,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Retro Gaming',
          fontSize: '40px',
        }}
      >
        <div
          className='button'
          style={{
            width: 'match-parent',
            height: 'fit-content',
          }}
        >
          <TextButton
            text='guide'
            navigate={navigateGuide}
            color={color}
            hoverColor={hoverColor}
            clickColor={clickColor}
          ></TextButton>
        </div>
        <div
          className='button'
          style={{
            width: 'match-parent',
            height: 'fit-content',
          }}
        >
          <TextButton
            text='game'
            navigate={navigateMain}
            color={color}
            hoverColor={hoverColor}
            clickColor={clickColor}
          ></TextButton>
        </div>
        <div
          className='button'
          style={{
            width: 'match-parent',
            height: 'fit-content',
          }}
        >
          <TextButton
            text='ending'
            navigate={navigateEnding}
            color={color}
            hoverColor={hoverColor}
            clickColor={clickColor}
          ></TextButton>
        </div>
      </div>
    </div>
  );
}

export default Lobby;
