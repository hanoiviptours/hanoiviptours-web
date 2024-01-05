import { useState, useCallback } from 'react';

const useBoolean = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const setToTrue = useCallback(() => {
    setState(true);
  }, []);

  const setToFalse = useCallback(() => {
    setState(false);
  }, []);

  return {
    state,
    setToTrue,
    setToFalse,
  };
};

export default useBoolean;
