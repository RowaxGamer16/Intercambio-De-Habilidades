import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonButton, IonGrid, IonRow, IonCol, IonText } from '@ionic/react';
import './Login.css'; // Asegúrate de tener este archivo CSS

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí iría la lógica de inicio de sesión
    console.log('Iniciado sesión:', { email, password });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>LOGIN</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="content-center">
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <h2 className="form-title">Iniciar sesión</h2>
              <IonText color="medium">
                <p>Ingresa tus credenciales para acceder a tu cuenta.</p>
              </IonText>
            </IonCol>
          </IonRow>

          {/* Formulario de inicio de sesión */}
          <IonRow>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating">Correo electrónico</IonLabel>
                <IonInput
                  type="email"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                  placeholder="Ingresa tu correo electrónico"
                />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                  placeholder="Ingresa tu contraseña"
                />
              </IonItem>
            </IonCol>
          </IonRow>

          {/* Botón de inicio de sesión */}
          <IonRow>
            <IonCol size="12">
              <IonButton expand="block" color="primary" onClick={handleLogin}>
                Iniciar sesión
              </IonButton>
            </IonCol>
          </IonRow>

          {/* Enlace para redirigir a la página de registro */}
          <IonRow>
            <IonCol size="12" className="text-center">
              <IonText color="medium">
                <p>¿No tienes cuenta? <a href="/tab5">Regístrate aquí</a></p>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
