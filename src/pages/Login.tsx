import React, { useState } from 'react';
import axios from 'axios';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonButton, IonGrid, IonRow, IonCol, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      console.log('✅ Inicio de sesión exitoso', response.data);
      history.push('/dashboard'); // Redirigir a la página principal
    } catch (err) {
      setError('❌ Credenciales incorrectas');
      console.error('Error en el inicio de sesión', err);
    }
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
              {error && <IonText color="danger"><p>{error}</p></IonText>}
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating">Correo electrónico</IonLabel>
                <IonInput
                  type="email"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
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
                />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonButton expand="block" color="primary" onClick={handleLogin}>Iniciar sesión</IonButton>
            </IonCol>
          </IonRow>

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
