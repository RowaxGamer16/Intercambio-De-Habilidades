import React, { useEffect, useState } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

const Inicio_Usuario: React.FC = () => {
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const token = localStorage.getItem('token'); // Obtener token
        const userId = localStorage.getItem('user_id'); // Obtener ID del usuario

        if (!token || !userId) {
          console.error('Faltan credenciales');
          return;
        }

        const response = await fetch(`http://localhost:5000/api/usuario?id=${userId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Error al obtener el usuario');
        }

        const data = await response.json();
        setUserName(data.nombre);
      } catch (error) {
        console.error('Error al obtener el nombre del usuario:', error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bienvenido al inicio de usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>
          <h2>¡Hola, {userName || 'usuario'}!</h2>
          <p>Bienvenido a tu panel.</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Inicio_Usuario;
