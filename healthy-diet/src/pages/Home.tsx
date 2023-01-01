import { IonButton, IonFabButton, IonIcon, IonFab, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonButtons, IonMenuButton, IonCard, IonCardContent, IonCardHeader, IonItem, IonCardSubtitle, IonCardTitle, IonMenu, IonLabel } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { createClient } from '@supabase/supabase-js'
import { add } from 'ionicons/icons';
import { useState, useEffect } from 'react';

const supabase = createClient('https://nfvkhbydxwxdvwecegxz.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mdmtoYnlkeHd4ZHZ3ZWNlZ3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI0NDc1ODEsImV4cCI6MTk4ODAyMzU4MX0.OXIQcWfvGtW28BNmKJ1JNwUeegxVIiNUn-9nPfvEU3Y")


async function signInWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
}
const colorList = [
  "rgb(6 182 212)",//4th
  "rgb(180 83 9)",//1st
  "rgb(249 115 22)",// 2nd
  "rgb(34 197 94)"//3rd
];
async function signout() {
  const { error } = await supabase.auth.signOut()
}

async function signInIfNot() {
  const res = await supabase.auth.getUser()
  if (!res.data.user) {
    document.location = "/login"
  }
  console.log("Already logged in!")

}



function strmonth(m: number) {
  return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][m]
}
const classMap = {
  "apple": "fruit",
  "orange": "fruit",
  "pizza": "fast food",
  "buger": "fast food",
  "rice": "neutral",

};
async function upload(foodName: string) {
  console.log(foodName)

  const user = await supabase.auth.getUser();
  const now = new Date();
  const { data, error } = await supabase
    .from('main')
    .insert([
      {
        username: user.data.user?.email,
        date: `${strmonth(now.getMonth())} ${now.getDate()}, ${now.getFullYear()}}`,
        time: now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
        //https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format 
        foodName: foodName,
        // @ts-ignore
        foodClass: classMap[foodName],
        img: "na"
      },
    ])
  console.log(error)
}


// signout()
const Home: React.FC = () => {
  // supabase.auth.getUser() kouganotinthedoc
  const [fetchedData, setFetchedData] = useState([{ foodClass: "-", foodName: "-", date: "-", time: "-" }]);
  async function fetchData() {
    let { data: main, error } = await supabase
      .from('main')
      .select('*');
    // @ts-ignore
    setFetchedData(main.reverse());//yiweidatashitypeknunnyunxoukunyunex  why i ahve to reverse here
  }

  useEffect(() => {
    fetchData();
    signInIfNot();
  },[])
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
              () => {
                document.location = "/recap"
              }}>Weekly Report</IonLabel>
          </IonItem>
          <IonButton color="danger" expand="block" onClick={
            () => {
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

          {fetchedData.map((item, index) =>
            <IonCard key={index} style={{ backgroundColor: colorList[index % colorList.length] }}>
              <IonCardHeader>
                <IonCardTitle className='text-white'>{item?.foodName.toUpperCase()}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="text-lg">
                <b className="font-bold mb-1 inline-block text-white"  >Type: </b> <span style={{ color: 'rgb(249 250 251)' }} >{item.foodClass.toUpperCase()}</span>
                <br />
                <b className="font-bold mb-1 inline-block text-white">Date: </b> <span style={{ color: 'rgb(249 250 251)' }} > {item.date} </span>
                <br />
                <b className="font-bold mb-1 inline-block text-white">Time: </b> <span style={{ color: 'rgb(249 250 251)' }} >{item.time}</span>
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
            document.getElementById("uploader")?.click();
            upload("apple");
          }}>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonPage></>
  );
};

export default Home;


