import { useContext, createContext, useEffect, useState } from 'react';
import useTranscoding from '../hooks/useTranscoding';

import FilesContext from './FilesContext';
import { process } from '../utilities/processDict';

const TranscodeContext = createContext();

export const TranscodeContextProvider = ({ children }) => {
  const { files } = useContext(FilesContext);
  const { doTranscode, stopTranscoding, progress, status } = useTranscoding();
  const [totalTranscoded, setTotalTranscoded] = useState(0);

  async function transcodeAllFiles () {
    for (const { uuid, name, extension, dataURL, gif } of files) {
      if (!gif) await doTranscode(uuid, `${name}.${extension}`, dataURL);
    }
  }

  useEffect(() => {
    if (status === process.done) setTotalTranscoded(total => total + 1);
  }, [status]);

  return (
    <TranscodeContext.Provider
      value={{
        totalTranscoded,
        setTotalTranscoded,
        doTranscode,
        stopTranscoding,
        transcodeAllFiles,
        progress,
        status
      }}
    >
      {children}
    </TranscodeContext.Provider>
  );
};

export default TranscodeContext;
