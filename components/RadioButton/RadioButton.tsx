import React from 'react';
import styles from './radioButton.module.css';
import Button from '../ui/Button/Button';

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
    <Button
      text={display}
      color={name !== vehicleActive ? 'color' : ''}
      onClick={() => setVehicleActive(name)}
    />
  );
};

export default RadioButton;
