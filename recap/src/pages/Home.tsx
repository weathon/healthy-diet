import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { createClient } from '@supabase/supabase-js'
import { useState } from 'react';
const avt = "data:image/png;base64,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";
const supabase = createClient('https://nfvkhbydxwxdvwecegxz.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mdmtoYnlkeHd4ZHZ3ZWNlZ3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI0NDc1ODEsImV4cCI6MTk4ODAyMzU4MX0.OXIQcWfvGtW28BNmKJ1JNwUeegxVIiNUn-9nPfvEU3Y")
// import {scaleLinear} from "d3-scale";

// We used following designs as refrences 
// https://dribbble.com/shots/10400967-Health-Workout-App-UI-Design
// https://dribbble.com/shots/17734599-Fitness-Workout-App
// https://dribbble.com/tags/workout

const color1 = "#2C3333";
const color2 = "#395B64";
const color3 = "#A5C9CA";
const color4 = "#E7F6F2";
const color5 = "#E9A6A6";
async function signInWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
}

const Home: React.FC = () => {
  const [myavt, setMyAvt] = useState(avt);
  async function signInIfNot() {
    const res = await supabase.auth.getUser()
    if (!res.data.user) {
      signInWithGitHub();
    }
    console.log(res.data.user?.user_metadata.avatar_url)
    console.log("Already logged in!")
    setMyAvt(res.data.user?.user_metadata.avatar_url)
  }
  
  signInIfNot();
  
  return (
    <div
      style={{ backgroundColor: color1, height: "100%" }}>
      <img className="rounded-full inline-block mt-6 ml-6 float-left h-14" src={myavt}></img>
      <div id="date" className="mt-6 ml-6 inline-block">
        <b className="text-slate-400">Dec 31, 2022</b>
        <p className="text-white text-2xl font-bold">Weekly Report</p>
      </div>

      <div className="p-0 m-0 grid grid-rows-1 grid-cols-2">
        <IonCard className="mt-7 mb-0 mr-1 drop-shadow-lg shadow-indigo-500/50" style={{ backgroundColor: color2}}>
          <div className='m-3 my-5'>
            <p className="font-bold text-2xl text-center" style={{color:color4}}>Apple</p>
            <p className="text-base text-center" style={{color:color4}}>Most Common Food</p>
          </div>
        </IonCard>

        <IonCard className="mt-7 mb-0 ml-1 drop-shadow-lg shadow-indigo-500/50" style={{ backgroundColor: color2}}>
          <div className='m-3 my-5'>
            <p className="font-bold text-2xl text-center" style={{color:color4}}>Fruit</p>
            <p className="text-base text-center" style={{color:color4}}>Most Common Type</p>
          </div>
        </IonCard>
      </div>

      <div className="p-0 m-0 grid grid-rows-1 grid-cols-3">
        <IonCard className="mt-5 mb-0 mr-1 drop-shadow-lg shadow-indigo-500/50" style={{ backgroundColor: color5}}>
          <div className='m-3 my-3'>
            <p className="font-bold text-2xl text-center" style={{color:color1}}>20%</p>
            <p className="text-base text-center" style={{color:color1}}>Unhealthy Food</p>
          </div>
        </IonCard>

        <IonCard className="mt-5 mr-1 mb-0 ml-1 drop-shadow-lg shadow-indigo-500/50" style={{ backgroundColor: color5}}>
          <div className='m-3 my-3'>
            <p className="font-bold text-2xl text-center" style={{color:color1}}>30%</p>
            <p className="text-base text-center" style={{color:color1}}>Neutral<br/>Food</p>
          </div>
        </IonCard>

        <IonCard className="mt-5 mb-0 ml-1 drop-shadow-lg shadow-indigo-500/50" style={{ backgroundColor: color5}}>
          <div className='m-3 my-3'>
            <p className="font-bold text-2xl text-center" style={{color:color1}}>50%</p>
            <p className="text-base text-center" style={{color:color1}}>Healthy Food</p>
          </div>
        </IonCard>
      </div>
    </div>


  );
};

export default Home;
