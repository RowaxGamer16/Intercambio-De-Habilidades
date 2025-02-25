import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonAccordion,
  IonAccordionGroup,
  IonText,
} from '@ionic/react';
import './Ayuda.css'; // Asegúrate de personalizar este archivo CSS para estilos adicionales

const Ayuda: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AYUDA</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="content-center">
        <IonList>
          <IonAccordionGroup>
            {/* Pregunta 1 */}
            <IonAccordion value="1">
              <IonItem slot="header">
                <IonLabel>¿Cómo puedo crear una cuenta?</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                <IonText>
                  <p>
                    Para crear una cuenta, simplemente ve a la pantalla de registro y completa tus datos personales. 
                    Asegúrate de proporcionar una dirección de correo válida y crear una contraseña segura.
                  </p>
                </IonText>
              </div>
            </IonAccordion>

            {/* Pregunta 2 */}
            <IonAccordion value="2">
              <IonItem slot="header">
                <IonLabel>¿Cómo publicar una habilidad?</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                <IonText>
                  <p>
                    Para publicar una habilidad, ve a la sección de "Publicar habilidad" y rellena la información 
                    necesaria, como el título, la descripción y tus tarifas (si aplica). También puedes agregar imágenes
                    o videos para mostrar tu trabajo.
                  </p>
                </IonText>
              </div>
            </IonAccordion>

            {/* Pregunta 3 */}
            <IonAccordion value="3">
              <IonItem slot="header">
                <IonLabel>¿Cómo contactar a otros usuarios?</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                <IonText>
                  <p>
                    Para contactar a otros usuarios, simplemente ve a su perfil y utiliza la opción de mensaje directo. 
                    También puedes revisar sus habilidades publicadas y enviar solicitudes personalizadas si deseas
                    trabajar con ellos.
                  </p>
                </IonText>
              </div>
            </IonAccordion>

            {/* Pregunta 4 */}
            <IonAccordion value="4">
              <IonItem slot="header">
                <IonLabel>¿Cómo puedo cambiar mi contraseña?</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                <IonText>
                  <p>
                    Para cambiar tu contraseña, dirígete a la sección de configuración de tu cuenta, selecciona
                    "Seguridad" y sigue las instrucciones para restablecer tu contraseña.
                  </p>
                </IonText>
              </div>
            </IonAccordion>

            {/* Pregunta 5 */}
            <IonAccordion value="5">
              <IonItem slot="header">
                <IonLabel>¿Qué hacer si encuentro un problema?</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                <IonText>
                  <p>
                    Si encuentras un problema, puedes reportarlo a nuestro equipo de soporte técnico. Ve a la sección
                    "Ayuda y soporte" en el menú principal y completa el formulario de contacto. Intentaremos resolver
                    tu problema lo más rápido posible.
                  </p>
                </IonText>
              </div>
            </IonAccordion>
          </IonAccordionGroup>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Ayuda;
