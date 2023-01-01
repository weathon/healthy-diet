import { IonButton, IonButtons, IonMenuButton, IonCard, IonCardContent, IonCardHeader, IonItem, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, IonMenu, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { add } from 'ionicons/icons';
import './Home.css';
import ImageUpload from "../components/Imageupload"
import React from 'react';


const colorList=[
  "#453C67",
  "#6D67E4",
  "#46C2CB",
  "#F2F7A1"
];
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

          {[1, 2, 3, 4, 5, 6, 7].map((key) =>
            <IonCard style={{backgroundColor: colorList[key%colorList.length]}}>
              <IonCardHeader>
                <IonCardTitle>Name</IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="text-lg">
                <b className="font-bold mb-1 inline-block">Type: </b> Fruit
                <br />
                <b className="font-bold mb-1 inline-block">Date: </b> Dec 22, 2022
                <br />
                <b className="font-bold mb-1 inline-block">Time: </b> 12:10 AM
              </IonCardContent>
            </IonCard>
          )}



        </IonContent>

        <input accept='image/*' hidden id="uploader" type="file" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { //type matters
          console.log(e.target.files![0])
          const url = URL.createObjectURL(e.target.files![0]);
          // HappieEE123/Project_310
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
