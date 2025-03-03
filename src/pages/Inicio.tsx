<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonText, IonImg } from '@ionic/react';
import { Redirect } from 'react-router-dom'; // Asegúrate de importar Redirect
import './Inicio.css'; // Asegúrate de tener este archivo

// Interfaces
interface Boton {
  color: 'primary' | 'secondary';
  link: string;
  texto: string;
}

interface Habilidad {
  titulo: string;
  descripcion: string;
}

interface Testimonio {
  nombre: string;
  habilidad: string;
  comentario: string;
}

interface Servicio {
  titulo: string;
  descripcion: string;
}

const Inicio: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya está logueado
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  if (isLoggedIn) {
    // Si el usuario está logueado, redirigir a la página "Inicio_Usuario"
    return <Redirect to="/Inicio_Usuario" />;
  }

  // Botones principales
  const botones: Boton[] = [
    { color: 'primary', link: '/Cursos', texto: 'Explorar Habilidades' },
    { color: 'secondary', link: '/Login', texto: 'Publicar Habilidad' }
  ];

  // Habilidades destacadas
  const habilidadesDestacadas: Habilidad[] = [
    { titulo: 'Clases de Guitarra', descripcion: 'Aprende a tocar guitarra acústica desde cero con un mentor experimentado.' },
    { titulo: 'Programación Web', descripcion: 'Enseña y aprende a desarrollar sitios web modernos con HTML, CSS y JavaScript.' }
  ];

  // Testimonios
  const testimonios: Testimonio[] = [
    { nombre: 'Juan Pérez', habilidad: 'Aprendiz de Guitarra', comentario: 'Gracias a Habilix, encontré un mentor increíble para aprender guitarra. ¡Mis habilidades mejoraron rápidamente!' }
  ];

  // Servicios
  const servicios: Servicio[] = [
    { titulo: 'Conexión con Mentores', descripcion: 'Conecta con expertos que te guiarán y enseñarán habilidades de forma personalizada.' },
    { titulo: 'Publicación de Habilidades', descripcion: 'Publica tus habilidades y ofrece tu conocimiento a la comunidad.' }
  ];

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
            {botones.map((boton, index) => (
              <IonCol size="auto" key={index}>
                <IonButton expand="block" color={boton.color} routerLink={boton.link}>
                  {boton.texto}
                </IonButton>
              </IonCol>
            ))}
          </IonRow>

          {/* Ejemplo de habilidades destacadas */}
          <IonRow>
            <IonCol>
              <h2 className="featured-title">Habilidades Destacadas</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            {habilidadesDestacadas.map((habilidad, index) => (
              <IonCol size="12" sizeMd="6" key={index}>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>{habilidad.titulo}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    {habilidad.descripcion}
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>

          {/* Sección de Testimonios */}
          <IonRow>
            <IonCol>
              <h2 className="testimonials-title">Comentarios</h2>
              {testimonios.map((testimonio, index) => (
                <IonCard key={index}>
                  <IonCardHeader>
                    <IonCardTitle>{testimonio.nombre}</IonCardTitle>
                    <IonCardSubtitle>{testimonio.habilidad}</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    "{testimonio.comentario}"
                  </IonCardContent>
                </IonCard>
              ))}
            </IonCol>
          </IonRow>

          {/* Sección de Galería de Imágenes */}
          <IonRow>
            <IonCol>
              <h2 className="gallery-title">Galería</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            {[1, 2, 3].map((_, index) => (
              <IonCol size="12" sizeMd="4" key={index}>
                <IonImg src={`https://via.placeholder.com/300`} />
              </IonCol>
            ))}
          </IonRow>

          {/* Sección de Servicios */}
          <IonRow>
            <IonCol>
              <h2 className="services-title">Nuestros Servicios</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            {servicios.map((servicio, index) => (
              <IonCol size="12" sizeMd="6" key={index}>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>{servicio.titulo}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    {servicio.descripcion}
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Inicio;
>>>>>>> 96af63cd69f0605e4237f256e6b95640af35a3a0
