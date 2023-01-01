import { IonButton, IonButtons, IonMenuButton, IonCard, IonCardContent, IonCardHeader, IonItem, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, IonMenu, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { add } from 'ionicons/icons';
import './Home.css';
import ImageUpload from "../components/Imageupload"
import React from 'react';

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

        <input accept='image/*' hidden id="uploader" type="file" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { //type matters
          console.log(e.target.files![0])
          const url = URL.createObjectURL(e.target.files![0]);
          
        }} />

        <IonFab slot="fixed" vertical="bottom" horizontal="end" style={{ marginRight: "15px", marginBottom: "10px" }}>
          <IonFabButton onClick={() => {
            document.getElementById("uploader")?.click()
          }}>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonPage></>
  );
};

export default Home;