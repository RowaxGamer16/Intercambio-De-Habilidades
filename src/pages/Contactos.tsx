import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonButton,
} from '@ionic/react';

const Contactos: React.FC = () => {
  // Ejemplo de contactos
  const contactos = [
    {
      id: 1,
      nombre: "Daurys Heredia",
      correo: "daurisyjoniken@gmail.com",
      telefono: "849-410-1686",
      foto: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      nombre: "Eury Caraballo",
      correo: "maria.lopez@example.com",
      telefono: "555-987-6543",
      foto: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      nombre: "Juan Miguel",
      correo: "juanmiguel63908@gmail.com",
      telefono: "829-728-0208",
      foto: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      nombre: "Brainel Ramirez",
      correo: "carlos.gomez@example.com",
      telefono: "555-654-7890",
      foto: "https://via.placeholder.com/150",
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CONTACTOS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Lista de contactos */}
        <IonList>
          {contactos.map((contacto) => (
            <IonItem key={contacto.id}>
              <IonAvatar slot="start">
                <img src={contacto.foto} alt={contacto.nombre} />
              </IonAvatar>
              <IonLabel>
                <h2>{contacto.nombre}</h2>
                <p>Correo: {contacto.correo}</p>
                <p>Teléfono: {contacto.telefono}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Contactos;
