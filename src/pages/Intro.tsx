import CoinseLogo from 'assets/img/logo/coinse.png';
import ReactLogo from 'assets/img/logo/react.png';

import { IntroAnimation } from 'components/Animation';

import { useNavigate } from 'react-router-dom';

function Intro() {
  const navigate = useNavigate();
  const navigateLobby = () => {
    navigate('/lobby');
  };
  const initDelay = 1;
  const duration = 5;
  return (
    <div
      className='Intro'
      style={{
        position: 'absolute',
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <IntroAnimation
        path={ReactLogo}
        delay={`${initDelay}s`}
        duration={`${duration}s`}
        style={{
          // overlap
          position: 'absolute',
          zIndex: 1,
        }}
      />
      <IntroAnimation
        onAnimationEnd={navigateLobby}
        path={CoinseLogo}
        delay={`${initDelay + duration}s`}
        duration={`${duration}s`}
        style={{
          // overlap
          position: 'absolute',
          zIndex: 2,
        }}
      />
    </div>
  );
}

export default Intro;
