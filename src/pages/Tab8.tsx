import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { useLocation, useHistory } from 'react-router-dom';
import './CursoDetalle.css';

const Tab8: React.FC = () => {
  const location = useLocation<{ curso: any }>();
  const history = useHistory();
  const curso = location.state?.curso;

  if (!curso) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Curso no encontrado</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <p>No se proporcionaron detalles del curso.</p>
          <IonButton onClick={() => history.goBack()}>Volver</IonButton>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{curso.titulo}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {/* Portada */}
          <IonRow className="portada">
            <IonCol size="12">
              <img src={curso.imagen} alt={curso.titulo} className="curso-portada" />
            </IonCol>
          </IonRow>

          {/* Información del curso */}
          <IonRow>
            <IonCol size="12" className="info-curso">
              <h2>Información del Curso</h2>
              <p>{curso.descripcion}</p>
              <p><strong>Profesor:</strong> {curso.profesor}</p>
              <p><strong>Entrega:</strong> {curso.entrega}</p>
              <p><strong>Horario:</strong> {curso.horario}</p>
            </IonCol>
          </IonRow>

          {/* Material y Pruebas */}
          <IonRow>
            <IonCol size="12" className="material-pruebas">
              <h3>Material / Prueba</h3>
              <p>Aquí se listarán los recursos del curso (archivos, enlaces, etc.).</p>
            </IonCol>
          </IonRow>

          {/* Ranking y Comentarios */}
          <IonRow>
            <IonCol size="12" className="ranking-comentarios">
              <h3>Ranking y Comentarios</h3>
              <p>El ranking y los comentarios estarán aquí.</p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton expand="full" onClick={() => history.goBack()}>
            Volver
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Tab8;
