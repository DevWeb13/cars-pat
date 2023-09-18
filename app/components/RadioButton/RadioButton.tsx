import React from 'react';
import styles from './radioButton.module.css';

interface RadioButtonProps {
  name: string;
  display: string;
  vehicleActive: string;
  setVehicleActive: React.Dispatch<React.SetStateAction<string>>;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  display,
  vehicleActive,
  setVehicleActive,
}) => {
  return (
    <button
      onClick={() => setVehicleActive(name)}
      className={`${styles.radioButton} textBold ${
        name === vehicleActive ? styles.radioButtonActive : ''
      }`}>
      {display}
    </button>
  );
};

export default RadioButton;
