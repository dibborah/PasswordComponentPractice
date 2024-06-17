import React, { useRef } from 'react';
import track1 from './track1.mp3';

const App = () => {
  const audioRef = useRef(null);
  // React.useEffect(() => {
  //   audioRef.current.play();// This play code is not working
  // }, []);
  return (
    <div>
    <audio src={track1} ref={audioRef} />
    </div>
  )
}

export default App;