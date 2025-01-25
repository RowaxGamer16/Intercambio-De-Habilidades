import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import './App.css';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonToolbar,
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonFooter,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, school, people, helpCircle, logIn, personCircle } from 'ionicons/icons';
import Inicio from './pages/Inicio';
import Cursos from './pages/Cursos';
import Contactos from './pages/Contactos';
import Ayuda from './pages/Ayuda';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import MaterialesCurso from './components/MaterialesCurso';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

setupIonicReact();

const App: React.FC = () => {
  const materiales = {
    1: ['Introducción a React', 'Componentes y Props', 'Hooks'],
    2: ['Fundamentos de Python', 'Manejo de Archivos', 'OOP'],
    3: ['Principios UX', 'Wireframes', 'Prototipos'],
  };

  return (
    <IonApp>
      <IonReactRouter>
        {/* Header */}
        <IonHeader>
          <IonToolbar>
            <IonGrid>
              <IonRow className="ion-align-items-center">
                <IonCol size="12" size-md="4" className="ion-text-start">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IonImg
                      src="/Habilix.jpg"
                      alt="Logo"
                      style={{ width: '90px', height: 'auto', marginRight: '10px' }}
                    />
                    <IonLabel>Habilix</IonLabel>
                  </div>
                </IonCol>
                <IonCol size="12" size-md="8" className="ion-text-end">
                  <IonButtons>
                    <IonButton routerLink="/Inicio">
                      <IonIcon icon={home} slot="start" />
                      Inicio
                    </IonButton>
                    <IonButton routerLink="/Cursos">
                      <IonIcon icon={school} slot="start" />
                      Cursos
                    </IonButton>
                    <IonButton routerLink="/Contactos">
                      <IonIcon icon={people} slot="start" />
                      Contactos
                    </IonButton>
                    <IonButton routerLink="/Ayuda">
                      <IonIcon icon={helpCircle} slot="start" />
                      Ayuda
                    </IonButton>
                    <IonButton routerLink="/tab5">
                      <IonIcon icon={logIn} slot="start" />
                      Registro
                    </IonButton>
                    <IonButton routerLink="/Login">
                      <IonIcon icon={logIn} slot="start" />
                      Iniciar sesión
                    </IonButton>
                    <IonButton routerLink="/Perfil">
                      <IonIcon icon={personCircle} slot="start" />
                      Perfil
                    </IonButton>
                  </IonButtons>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>

        {/* Content */}
        <IonContent>
          <IonRouterOutlet>
            <Route exact path="/Inicio" component={Inicio} />
            <Route exact path="/Cursos" component={Cursos} />
            <Route exact path="/Contactos" component={Contactos} />
            <Route exact path="/Ayuda" component={Ayuda} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Perfil" component={Perfil} />
            <Route
              exact
              path="/materiales/:id"
              render={(props) => <MaterialesCurso {...props} materiales={materiales} />}
            />
            <Route exact path="/">
              <Redirect to="/Inicio" />
            </Route>
          </IonRouterOutlet>
        </IonContent>

        {/* Footer */}
        <IonFooter>
          <IonToolbar>
            <IonGrid>
              <IonRow>
                <IonCol size="12" size-md="4" className="ion-text-start">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IonImg
                      src="/Habilix.jpg"
                      alt="Logo Habilix"
                      style={{ width: '60px', height: 'auto', marginRight: '10px' }}
                    />
                    <IonText>
                      <h4>Habilix</h4>
                    </IonText>
                  </div>
                </IonCol>
                <IonCol size="12" size-md="4" className="ion-text-center">
                  <IonText color="medium">&copy; 2025 Derechos reservados.</IonText>
                </IonCol>
                <IonCol size="12" size-md="4" className="ion-text-end">
                  <IonText>Redes Sociales:</IonText>
                  <IonButton href="https://facebook.com" fill="clear">
                    <IonImg src="/Facebook.png" alt="Facebook" style={{ width: '24px' }} />
                  </IonButton>
                  <IonButton href="https://instagram.com" fill="clear">
                    <IonImg src="/Instagram.jpeg" alt="Instagram" style={{ width: '24px' }} />
                  </IonButton>
                  <IonButton href="https://twitter.com" fill="clear">
                    <IonImg src="/Twitter.jpeg" alt="Twitter" style={{ width: '24px' }} />
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonFooter>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
