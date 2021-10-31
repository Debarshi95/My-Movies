/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { TypeContext } from '../../providers/TypeProvider';
import './ToggleType.css';

function ToggleType() {
  const { type, setType } = React.useContext(TypeContext);
  const [checked, setChecked] = React.useState(true);

  React.useEffect(() => {
    if (type === 'tv') setChecked(false);
  }, [type]);

  const handleCheckbox = () => {
    if (type === 'movie') {
      setChecked(false);
      setType('tv');
      localStorage.setItem('type', 'tv');
    } else {
      setChecked(true);
      setType('movie');
      localStorage.setItem('type', 'movie');
    }
  };
  return (
    <div className="toggle">
      <input
        type="checkbox"
        name="type"
        id="checkbox"
        className="checkbox"
        onChange={handleCheckbox}
        checked={checked}
      />
      <label htmlFor="checkbox" className="switch" />
    </div>
  );
}

export default ToggleType;
