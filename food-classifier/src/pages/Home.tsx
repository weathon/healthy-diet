import { IonButton, IonButtons, IonMenuButton, IonCard, IonCardContent, IonCardHeader, IonItem, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, IonMenu, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { add } from 'ionicons/icons';
import './Home.css';
import ImageUpload from "../components/Imageupload"
import React from 'react';


const colorList=[
  "rgb(6 182 212)",//4th
  "rgb(180 83 9)",//1st
  "rgb(249 115 22)",// 2nd
  "rgb(34 197 94)"//3rd
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
            <IonLabel onClick={
            ()=>{
                document.location = "/recap"
            }}>Weekly Report</IonLabel>
          </IonItem>
          <IonButton color="danger" expand="block" onClick={
            ()=>{
                document.location = "/logout"
            }
          }>Log Out</IonButton>
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
                <b className="font-bold mb-1 inline-block text-white"  >Type: </b> <span style={{color: 'rgb(249 250 251)'}} >Fruit</span> 
                <br />
                <b className="font-bold mb-1 inline-block text-white">Date: </b> <span style={{color: 'rgb(249 250 251)'}} > Dec 22, 2022 </span>
                <br />
                <b className="font-bold mb-1 inline-block text-white">Time: </b> <span style={{color: 'rgb(249 250 251)'}} >12:10 AM</span> 
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
