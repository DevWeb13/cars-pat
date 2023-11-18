import React from 'react';
import styles from './radioButtons.module.css';

import Button from '../ui/Button/Button';

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
      name: 'mercedes',
      display: 'Mercedes',
    },
    {
      id: 2,
      name: 'fordMustangGt',
      display: 'Ford Mustang Gt',
    },
    {
      id: 3,
      name: 'peugeot504',
      display: 'Peugeot 504',
    },
    {
      id: 4,
      name: 'pret',
      display: 'Vehicules de pret',
    },
    {
      id: 5,
      name: 'divers',
      display: 'Divers',
    },
  ];

  return (
    <div className={styles.radioButtons}>
      {vehicles.map((vehicle) => {
        return (
          <Button
            key={vehicle.id}
            text={vehicle.display}
            color={vehicle.name !== vehicleActive ? 'color' : ''}
            onClick={() => setVehicleActive(vehicle.name)}
          />
        );
      })}
    </div>
  );
};

export default RadioButtons;
