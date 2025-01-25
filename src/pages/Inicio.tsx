import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonText, IonImg } from '@ionic/react';
import './Inicio.css'; // Asegúrate de tener este archivo


const Inicio: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        
          <IonTitle>INICIO</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="content-center">
        <IonGrid>
          {/* Sección de bienvenida */}
          <IonRow>
            <IonCol>
              <h1 className="welcome-title">¡Bienvenido a Habilix!</h1>
              <p className="welcome-description">
                Conecta con personas para intercambiar habilidades, aprender algo nuevo o enseñar lo que sabes.
              </p>
            </IonCol>
          </IonRow>

          {/* Botones principales */}
          <IonRow className="button-row">
            <IonCol size="auto">
              <IonButton expand="block" color="primary" routerLink="/Cursos">
                Explorar Habilidades
              </IonButton>
            </IonCol>
            <IonCol size="auto">
              <IonButton expand="block" color="secondary" routerLink="/Login">
                Publicar Habilidad
              </IonButton>
            </IonCol>
          </IonRow>

          {/* Ejemplo de habilidades destacadas */}
          <IonRow>
            <IonCol>
              <h2 className="featured-title">Habilidades Destacadas</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" sizeMd="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Clases de Guitarra</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Aprende a tocar guitarra acústica desde cero con un mentor experimentado.
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" sizeMd="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Programación Web</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Enseña y aprende a desarrollar sitios web modernos con HTML, CSS y JavaScript.
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* Sección de Testimonios */}
          <IonRow>
            <IonCol>
              <h2 className="testimonials-title">Comentarios</h2>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Juan Pérez</IonCardTitle>
                  <IonCardSubtitle>Aprendiz de Guitarra</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  "Gracias a Habilix, encontré un mentor increíble para aprender guitarra. ¡Mis habilidades mejoraron rápidamente!"
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* Sección de Galería de Imágenes */}
          <IonRow>
            <IonCol>
              <h2 className="gallery-title">Galería</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" sizeMd="4">
              <IonImg src="https://via.placeholder.com/300" />
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonImg src="https://via.placeholder.com/300" />
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonImg src="https://via.placeholder.com/300" />
            </IonCol>
          </IonRow>

          {/* Sección de Servicios */}
          <IonRow>
            <IonCol>
              <h2 className="services-title">Nuestros Servicios</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12" sizeMd="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Conexión con Mentores</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Conecta con expertos que te guiarán y enseñarán habilidades de forma personalizada.
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" sizeMd="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Publicación de Habilidades</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  Publica tus habilidades y ofrece tu conocimiento a la comunidad.
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Inicio;
