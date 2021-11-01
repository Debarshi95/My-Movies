import React from 'react';

export default function loadable(importfunc) {
  return React.lazy(importfunc);
}
