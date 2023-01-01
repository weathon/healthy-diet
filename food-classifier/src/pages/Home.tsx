import { IonButton, IonButtons, IonMenuButton, IonCard, IonCardContent, IonCardHeader, IonItem, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, IonMenu, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { add } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonItem>
            <IonLabel>Weekly Report</IonLabel>
          </IonItem>
          <IonButton color="danger" expand="block"        >Log Out</IonButton>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Healthy Diet Tracker</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <img src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000"></img>
              <IonCardTitle>Name</IonCardTitle>

            </IonCardHeader>

            <IonCardContent>
              Class
            </IonCardContent>

          </IonCard>


        </IonContent>
        <IonFab slot="fixed" vertical="bottom" horizontal="end" style={{ marginRight: "15px", marginBottom: "10px" }}>
          <IonFabButton>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonPage></>
  );
};

export default Home;
