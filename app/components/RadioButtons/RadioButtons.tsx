import React from 'react';
import styles from './radioButtons.module.css';

import RadioButton from '../RadioButton/RadioButton';

interface RadioButtonsProps {
  vehicleActive: string;
  setVehicleActive: React.Dispatch<React.SetStateAction<string>>;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({
  vehicleActive,
  setVehicleActive,
}) => {
  const vehicles = [
    {
      id: 1,
      name: 'peugeot504',
      display: 'Peugeot 504',
    },

    {
      id: 2,
      name: 'mercedes',
      display: 'Mercedes',
    },
  ];

  return (
    <div className={styles.radioButtons}>
      {vehicles.map((vehicle) => {
        return (
          <RadioButton
            key={vehicle.id}
            name={vehicle.name}
            display={vehicle.display}
            vehicleActive={vehicleActive}
            setVehicleActive={setVehicleActive}
          />
        );
      })}
    </div>
  );
};

export default RadioButtons;
