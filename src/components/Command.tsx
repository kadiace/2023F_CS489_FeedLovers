import CommandBackground from 'assets/img/ui/command_background.png';
import CommandGrid from 'assets/img/ui/command_grid.png';
import CommandShiny from 'assets/img/ui/command_shiny.png';

import { ReactNode } from 'react';

function Command(props: { message: ReactNode }) {
  const { message } = props;
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '150px',
        alignItems: 'center',
      }}
    >
      <img
        alt=''
        style={{
          position: 'absolute',
          left: '0px',
          top: '5px',
          height: '97%',
          objectFit: 'contain',
          zIndex: 0,
          opacity: 0.5,
        }}
        src={CommandBackground}
      />
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          left: '40px',
          right: '40px',
          top: '60px',
          bottom: '20px',
          zIndex: 4,
          fontFamily: 'SairaCondensed',
          fontSize: '21px',
          alignItems: 'center',
          flex: 1,
          color: '#71ff2f',
          // background: "red",
        }}
      >
        {message}
      </div>
      <img
        alt=''
        style={{
          position: 'absolute',
          left: '10px',
          top: '5px',
          width: '100%',
          height: '95%',
          objectFit: 'contain',
          zIndex: 2,
        }}
        src={CommandShiny}
      />
      <img
        alt=''
        style={{
          position: 'absolute',
          height: '100%',
          objectFit: 'contain',
          zIndex: 3,
        }}
        src={CommandGrid}
      />
      <p
        style={{
          position: 'absolute',
          left: '160px',
          top: '-11px',
          zIndex: 4,
          fontFamily: 'Retro Gaming',
          fontSize: '21px',
          textAlign: 'center',
          color: 'white',
        }}
      >
        from someone...
      </p>
    </div>
  );
}

export default Command;
