<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react';
import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonToast,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
      if (usuario.role === 1) {
        history.push('/Inicio_Usuario');
      } else if (usuario.role === 2) {
        history.push('/Inicio_Admin');
      }
    }
  }, [history]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Por favor ingrese su correo y contraseña');
      return;
    }

    if (!validateEmail(email)) {
      setError('Por favor ingrese un correo electrónico válido');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: password.trim() }), 
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      localStorage.setItem('token', data.token);
      localStorage.setItem('usuario', JSON.stringify(data.usuario));

      // Recargar la página
      window.location.reload();

      // Redireccionar según el rol
      if (data.usuario.role === 1) {
        history.push('/Inicio_Usuario');
      } else if (data.usuario.role === 2) {
        history.push('/Inicio_Admin');
      } else {
        setError('Rol de usuario no reconocido');
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleRegister = async () => {
    if (!name || !email || !password) {
      setError('Por favor ingrese todos los campos');
      return;
    }

    if (!validateEmail(email)) {
      setError('Por favor ingrese un correo electrónico válido');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre_usuario: name, email, password: password.trim() }), 
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      setIsLogin(true);
      setError('Registro exitoso, ahora puede iniciar sesión');

      // Recargar la página después de registrar al usuario
      window.location.reload();
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="login-container">
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" size-md="8" size-lg="5">
              <IonCard className="login-card">
                <IonCardContent>
                  <h2 className="ion-text-center">{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>

                  {!isLogin && (
                    <IonItem className="custom-input">
                      <IonLabel position="floating">Nombre</IonLabel>
                      <IonInput type="text" value={name} onIonChange={(e) => setName(e.detail.value!)} />
                    </IonItem>
                  )}

                  <IonItem className="custom-input">
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
                  </IonItem>

                  <IonItem className="custom-input">
                    <IonLabel position="floating">Contraseña</IonLabel>
                    <IonInput type="password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
                  </IonItem>

                  <IonButton expand="full" className="main-button" onClick={isLogin ? handleLogin : handleRegister}>
                    {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
                  </IonButton>

                  <IonButton expand="full" fill="outline" className="switch-button" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Crear una cuenta' : 'Ya tengo una cuenta'}
                  </IonButton>
                </IonCardContent>
              </IonCard>
              <IonToast isOpen={!!error} message={error} duration={3000} onDidDismiss={() => setError('')} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
>>>>>>> 96af63cd69f0605e4237f256e6b95640af35a3a0
