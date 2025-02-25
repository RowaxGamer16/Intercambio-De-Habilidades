import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
} from '@ionic/react';
import { useLocation } from 'react-router-dom';

// Define el tipo para el estado de la ubicación
interface CursoState {
  curso: {
    id: number;
    titulo: string;
    descripcion: string;
    entrega: string;
    profesor: string;
  };
}

const CursoDetalle: React.FC = () => {
  const location = useLocation<CursoState>();
  const curso = location.state?.curso;

  if (!curso) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Error</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <p>No se encontró información del curso.</p>
        </IonContent>
      </IonPage>
    );
  }

  const publicaciones = [
    { id: 1, titulo: 'Revisión No. 3', descripcion: 'Revisión de proyecto asignado' },
    { id: 2, titulo: 'Clase en Angular', descripcion: 'Supuesto práctico en Angular e Ionic' },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{curso.titulo}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <h3>{curso.descripcion}</h3>
            <p>Profesor: {curso.profesor}</p>
            <p>Entrega: {curso.entrega}</p>
          </IonCardContent>
        </IonCard>
        <h3>Publicaciones</h3>
        {publicaciones.map((pub) => (
          <IonCard key={pub.id}>
            <IonCardContent>
              <h4>{pub.titulo}</h4>
              <p>{pub.descripcion}</p>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default CursoDetalle;
