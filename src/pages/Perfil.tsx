<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonText,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonToggle,
  IonInput,
} from "@ionic/react";
import "./Perfil.css";
import { cursosData } from "./cursosData"; // Importar los datos compartidos

const Perfil: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [actividad, setActividad] = useState<any[]>([]);
  const [intercambios, setIntercambios] = useState<any[]>([]);
  const [mensajes, setMensajes] = useState<any[]>([]);
  const [notificaciones, setNotificaciones] = useState<any[]>([]);
  const [suscripciones, setSuscripciones] = useState<{ [id: number]: boolean }>(() =>
    JSON.parse(localStorage.getItem("suscripciones") || "{}")
  );

  useEffect(() => {
    setActividad([
      { id: 1, descripcion: "Completó el curso de React", fecha: "2025-01-10" },
      { id: 2, descripcion: "Inició el curso de Ionic", fecha: "2025-01-12" },
    ]);
    setIntercambios([{ id: 1, descripcion: "Intercambio de habilidades con María", fecha: "2025-01-11" }]);
    setMensajes([
      { id: 1, remitente: "Carlos", contenido: "Hola, ¿quieres intercambiar habilidades?", fecha: "2025-01-13" },
    ]);
    setNotificaciones([{ id: 1, contenido: "Tienes una nueva solicitud de intercambio", fecha: "2025-01-14" }]);
  }, []);

  // Filtrar los cursos suscritos
  const cursosSuscritos = cursosData.filter((curso) => suscripciones[curso.id]);

  const toggleDarkMode = (e: any) => {
    const isDarkModeEnabled = e.detail.checked;
    setDarkMode(isDarkModeEnabled);
    if (isDarkModeEnabled) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  const toggleNotifications = async (e: any) => {
    const isEnabled = e.detail.checked;

    if (isEnabled) {
      if (!("Notification" in window)) {
        alert("Este navegador no soporta notificaciones.");
        return;
      }

      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        setNotificationsEnabled(true);
        new Notification("Notificaciones habilitadas", {
          body: "Las notificaciones ahora están activas.",
          icon: "/assets/icon/icon.png",
        });
      } else {
        setNotificationsEnabled(false);
        alert("Permiso para notificaciones denegado.");
      }
    } else {
      setNotificationsEnabled(false);
    }
  };

  const sendTestNotification = () => {
    if (notificationsEnabled && "Notification" in window) {
      new Notification("Notificación de prueba", {
        body: "¡Esta es una notificación de prueba!",
        icon: "/assets/icon/icon.png",
      });
    } else {
      alert("Las notificaciones no están habilitadas.");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Configuración</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonGrid>
              <IonRow>
                <IonCol size="3">
                  <IonAvatar>
                    <img src="/assets/avatar-placeholder.png" alt="Avatar" />
                  </IonAvatar>
                </IonCol>
                <IonCol>
                  <IonText>
                    <h2>Juan Pérez</h2>
                    <p>juan.perez@email.com</p>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonText color="primary">
              <h3>Panel de Control</h3>
            </IonText>
          </IonCardHeader>
          <IonCardContent>
            {/* Cursos Suscritos */}
            <IonText>
              <h4>Cursos Suscritos</h4>
            </IonText>
            <IonList>
              {cursosSuscritos.length > 0 ? (
                cursosSuscritos.map((curso) => (
                  <IonItem key={curso.id}>
                    <IonLabel>
                      <h2>{curso.titulo}</h2>
                      <p>Profesor: {curso.profesor}</p>
                    </IonLabel>
                  </IonItem>
                ))
              ) : (
                <IonItem>
                  <IonLabel>No estás suscrito a ningún curso.</IonLabel>
                </IonItem>
              )}
            </IonList>

            <IonText>
              <h4>Actividad Reciente</h4>
            </IonText>
            <IonList>
              {actividad.map((item) => (
                <IonItem key={item.id}>
                  <IonLabel>
                    <h2>{item.descripcion}</h2>
                    <p>{item.fecha}</p>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>

            <IonText>
              <h4>Intercambios</h4>
            </IonText>
            <IonList>
              {intercambios.map((item) => (
                <IonItem key={item.id}>
                  <IonLabel>
                    <h2>{item.descripcion}</h2>
                    <p>{item.fecha}</p>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>

            <IonText>
              <h4>Mensajes</h4>
            </IonText>
            <IonList>
              {mensajes.map((item) => (
                <IonItem key={item.id}>
                  <IonLabel>
                    <h2>De: {item.remitente}</h2>
                    <p>{item.contenido}</p>
                    <p>{item.fecha}</p>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>

            <IonText>
              <h4>Notificaciones</h4>
            </IonText>
            <IonList>
              {notificaciones.map((item) => (
                <IonItem key={item.id}>
                  <IonLabel>
                    <h2>{item.contenido}</h2>
                    <p>{item.fecha}</p>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonText color="primary">
              <h3>Preferencias</h3>
            </IonText>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonLabel>Modo oscuro</IonLabel>
                </IonCol>
                <IonCol>
                  <IonToggle checked={darkMode} onIonChange={toggleDarkMode}></IonToggle>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonLabel>Notificaciones</IonLabel>
                </IonCol>
                <IonCol>
                  <IonToggle checked={notificationsEnabled} onIonChange={toggleNotifications}></IonToggle>
                </IonCol>
              </IonRow>
            </IonGrid>

            {notificationsEnabled && (
              <IonButton expand="block" color="secondary" onClick={sendTestNotification} style={{ marginTop: "15px" }}>
                Enviar notificación de prueba
              </IonButton>
            )}
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonText color="primary">
              <h3>Cambiar contraseña</h3>
            </IonText>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel position="stacked">Contraseña actual</IonLabel>
              <IonInput type="password" placeholder="Ingresa tu contraseña actual"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Nueva contraseña</IonLabel>
              <IonInput type="password" placeholder="Ingresa tu nueva contraseña"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Confirmar nueva contraseña</IonLabel>
              <IonInput type="password" placeholder="Confirma tu nueva contraseña"></IonInput>
            </IonItem>
            <IonButton expand="block" color="primary" style={{ marginTop: "15px" }}>
              Guardar cambios
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonText color="danger">
              <h3>Sesión</h3>
            </IonText>
          </IonCardHeader>
          <IonCardContent>
            <IonButton expand="block" color="danger" style={{ marginTop: "15px" }}>
              Cerrar sesión
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Perfil;
=======
import React, { useState, useEffect } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonAvatar,
  IonToggle,
} from '@ionic/react';
import { useHistory } from 'react-router-dom'; // Para la redirección
import './Perfil.css';

const Perfil: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '' });
  const history = useHistory(); // Redirección

  useEffect(() => {
    // Obtener el token del localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // Decodificar el token para obtener el ID del usuario (si el token está en formato JWT, por ejemplo)
      const decodedToken = JSON.parse(atob(token.split('.')[1])); // Esto asume que el token es un JWT
      const userId = decodedToken.id;

      // Realizar solicitud para obtener los datos del usuario desde el backend
      fetch(`/api/usuario/${userId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('No autorizado o sesión expirada');
          }
        })
        .then((data) => {
          setUserData({
            name: data.name, // Suponiendo que la respuesta tiene un campo 'name'
            email: data.email, // Suponiendo que la respuesta tiene un campo 'email'
          });
        })
        .catch((error) => {
          console.error('Error al obtener los datos del usuario:', error);
          // Si hay error (por ejemplo, sesión expirada), redirigir a la página de login
          history.push('/login');
        });
    } else {
      // Si no hay token, redirigir a login
      history.push('/login');
    }

    // Verificar preferencia de modo oscuro
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.body.classList.add('dark');
    }
  }, [history]);

  const toggleDarkMode = (e: any) => {
    const isDarkModeEnabled = e.detail.checked;
    setDarkMode(isDarkModeEnabled);
    if (isDarkModeEnabled) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true'); // Guardar preferencia
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false'); // Guardar preferencia
    }
  };

  const toggleNotifications = async (e: any) => {
    const isEnabled = e.detail.checked;

    if (isEnabled) {
      if (!("Notification" in window)) {
        alert("Este navegador no soporta notificaciones.");
        return;
      }

      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        setNotificationsEnabled(true);
        new Notification("Notificaciones habilitadas", {
          body: "Las notificaciones ahora están activas.",
          icon: "/assets/icon/icon.png",
        });
      } else {
        setNotificationsEnabled(false);
        alert("Permiso para notificaciones denegado.");
      }
    } else {
      setNotificationsEnabled(false);
    }
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    // Eliminar el token de localStorage
    localStorage.removeItem('token');
    // Redirigir a la página de login y recargar la página
    history.push('/login');
    window.location.reload(); // Recargar la página
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* Sección de perfil */}
        <IonCard>
          <IonCardHeader>
            <IonGrid>
              <IonRow className="ion-align-items-center">
                <IonCol size="3">
                  <IonAvatar>
                    <img src="/assets/avatar-placeholder.png" alt="Avatar" />
                  </IonAvatar>
                </IonCol>
                <IonCol>
                  <IonText>
                    <h2>{userData.name || 'Nombre no disponible'}</h2>
                    <p>{userData.email || 'Correo electrónico no disponible'}</p>
                  </IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardHeader>
        </IonCard>

        {/* Sección de actividad reciente, intercambios, mensajes y notificaciones */} 

        {/* Sección de cerrar sesión */}
        <IonCard>
          <IonCardHeader>
            <IonText color="danger">
              <h3>Sesión</h3>
            </IonText>
          </IonCardHeader>
          <IonCardContent>
            <IonButton
              expand="block"
              color="danger"
              style={{ marginTop: '15px' }}
              onClick={handleLogout} // Llamada a la función para cerrar sesión
            >
              Cerrar sesión
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Perfil;
>>>>>>> 96af63cd69f0605e4237f256e6b95640af35a3a0
