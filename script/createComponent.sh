#!/bin/bash

capitalize() {
  echo "$1" | awk '{print toupper(substr($0,1,1)) substr($0,2);}'
}

# Vérifiez si un nom de composant a été fourni
if [ -z "$1" ]
then
  echo -n "Entrez le nom du composant: "
  read COMPONENT_NAME
else
  COMPONENT_NAME=$1
fi

# Vérifiez à nouveau si un nom de composant a été fourni ou entré
if [ -z "$COMPONENT_NAME" ]
then
  echo "Aucun nom de composant fourni."
  exit 1
fi

CAPITALIZED_NAME=$(capitalize $COMPONENT_NAME)

# Créez un nouveau dossier pour le composant dans components/
mkdir -p components/$CAPITALIZED_NAME

# Accédez au dossier
cd components/$CAPITALIZED_NAME

# Créez le fichier .tsx
echo "import React from 'react';
import styles from './${COMPONENT_NAME}.module.css';

interface ${CAPITALIZED_NAME}Props {
  // props here
}

const $CAPITALIZED_NAME: React.FC<${CAPITALIZED_NAME}Props> = () => {
  return (
    <div className={styles.container}>
      $CAPITALIZED_NAME Component
    </div>
  );
}

export default $CAPITALIZED_NAME;
" > ${CAPITALIZED_NAME}.tsx

# Créez le fichier .css.module avec le nom en minuscules
echo ".container {
  /* styles here */
}
" > ${COMPONENT_NAME}.module.css

echo "Composant $CAPITALIZED_NAME créé avec succès!"





