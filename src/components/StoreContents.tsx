import Content from 'components/Content';

import { useRecoilState } from 'recoil';
import { contentsAtom } from 'recoils/Atom';

function StoreContents() {
  // state
  /* eslint-disable */
  const [contents, setContents] = useRecoilState(contentsAtom);
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: '100%',
        flexGrow: 1,
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '50px',
            height: '50px',
          }}
        >
          <Content type={contents[0]} id={0} event={false} />
        </div>
        <div
          style={{
            position: 'relative',
            width: '50px',
            height: '50px',
          }}
        >
          <Content type={contents[1]} id={1} event={false} />
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '50px',
            height: '50px',
          }}
        >
          <Content type={contents[2]} id={2} event={false} />
        </div>
        <div
          style={{
            position: 'relative',
            width: '50px',
            height: '50px',
          }}
        >
          <Content type={contents[3]} id={3} event={false} />
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '50px',
            height: '50px',
          }}
        >
          <Content type={contents[4]} id={4} event={false} />
        </div>
        <div
          style={{
            position: 'relative',
            width: '50px',
            height: '50px',
          }}
        >
          <Content type={contents[5]} id={5} event={false} />
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '50px',
            height: '50px',
          }}
        >
          <Content type={contents[6]} id={6} event={false} />
        </div>
        <div
          style={{
            position: 'relative',
            width: '50px',
            height: '50px',
          }}
        >
          <Content type={contents[7]} id={7} event={false} />
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '50px',
            height: '50px',
          }}
        >
          <Content type={contents[8]} id={8} event={false} />
        </div>
        <div
          style={{
            position: 'relative',
            width: '50px',
            height: '50px',
          }}
        >
          <Content type={contents[9]} id={9} event={false} />
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '50px',
            height: '50px',
          }}
        >
          <Content type={contents[10]} id={10} event={false} />
        </div>
        <div
          style={{
            position: 'relative',
            width: '50px',
            height: '50px',
          }}
        >
          <Content type={contents[11]} id={11} event={false} />
        </div>
      </div>
    </div>
  );
}

export default StoreContents;
