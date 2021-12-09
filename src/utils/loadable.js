import React from 'react';

const loadable = (importfunc) => {
  return React.lazy(importfunc);
};

export default loadable;
