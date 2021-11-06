const makeReducer = ({ request, success, failure, extraState = {} }) => {
  if (!request) throw new Error('request action is required');
  if (!success) throw new Error('success action is required');
  if (!failure) throw new Error('failure action is required');

  const initialState = {
    loading: true,
    error: '',
    data: {},
    itemType: '',
    ...extraState,
  };

  return (state = initialState, action) => {
    const { type, ...rest } = action;

    switch (type) {
      case request:
        return {
          ...state,
          loading: true,
          error: '',
          ...rest,
        };
      case success:
        return { ...state, loading: false, data: action.data };
      case failure:
        return { ...state, loading: false, data: {}, error: action.error };
      default:
        return state;
    }
  };
};

export default makeReducer;
