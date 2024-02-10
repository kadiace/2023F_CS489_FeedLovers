import NewsBackground from 'assets/img/ui/news_background.png';
import NewsShiny from 'assets/img/ui/news_shiny.png';

import { ReactNode } from 'react';

function News(props: { message: ReactNode }) {
  // const
  const { message } = props;
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '150px',
      }}
    >
      <img
        alt=''
        style={{
          position: 'absolute',
          right: '0px',
          width: '100%',
          objectFit: 'contain',
          zIndex: 0,
        }}
        src={NewsBackground}
      />
      <img
        alt=''
        style={{
          position: 'absolute',
          right: '150px',
          height: '88%',
          objectFit: 'contain',
          zIndex: 1,
        }}
        src={NewsShiny}
      />

      <div
        style={{
          position: 'absolute',
          display: 'flex',
          left: '30px',
          right: '140px',
          top: '10px',
          bottom: '25px',
          zIndex: 4,
          fontFamily: 'Sairacondensed',
          fontSize: '21px',
          alignItems: 'center',
          flex: 1,
          color: 'black',
          // background: "red",
        }}
      >
        {message}
      </div>
    </div>
  );
}

export default News;
