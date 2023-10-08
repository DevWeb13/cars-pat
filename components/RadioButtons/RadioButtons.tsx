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
      name: 'peugeot504',
      display: 'Peugeot 504',
    },

    {
      id: 2,
      name: 'mercedes',
      display: 'Mercedes',
    },
    {
      id: 3,
      name: 'peugeot404',
      display: 'Peugeot 404',
    },
    {
      id: 4,
      name: 'peugeot204',
      display: 'Peugeot 204',
    },
    {
      id: 5,
      name: 'peugeot304',
      display: 'Peugeot 304',
    },
    {
      id: 6,
      name: 'peugeot104',
      display: 'Peugeot 104',
    },
    {
      id: 7,
      name: 'peugeot604',
      display: 'Peugeot 604',
    },
    {
      id: 8,
      name: 'peugeot305',
      display: 'Peugeot 305',
    },
    {
      id: 9,
      name: 'peugeot505',
      display: 'Peugeot 505',
    },
    {
      id: 10,
      name: 'peugeot605',
      display: 'Peugeot 605',
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
