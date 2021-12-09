import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const useMemoizedDispatch = () => {
  const dispatch = useDispatch();
  const memoizedDispatch = useCallback((action) => dispatch(action), [dispatch]);
  return memoizedDispatch;
};
export default useMemoizedDispatch;
