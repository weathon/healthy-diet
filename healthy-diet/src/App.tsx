import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonButton, IonHeader, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Recap from './pages/Recap';
import { createClient } from '@supabase/supabase-js'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const supabase = createClient('https://nfvkhbydxwxdvwecegxz.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mdmtoYnlkeHd4ZHZ3ZWNlZ3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI0NDc1ODEsImV4cCI6MTk4ODAyMzU4MX0.OXIQcWfvGtW28BNmKJ1JNwUeegxVIiNUn-9nPfvEU3Y")

async function signInWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
}
function strmonth(m: number)
{
  return ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dev"][m] 
}

const classMap = {
  "apple":"fruit",
  "orange":"fruit",
  "pizza":"fast food",
  "buger":"fast food",
  "rice":"neutral",

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
async function signout() {
  const { error } = await supabase.auth.signOut()
}
upload("apple");

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/recap">
          <Recap />
        </Route>
        <Route exact path="/login">
          <div style={{
            textAlign: "center", position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>
            <h3>Healthy Eating Tracker</h3>
            <IonButton color="dark" onClick={signInWithGitHub}>Login With GitHub</IonButton>
          </div>
        </Route>
        <Route exact path="/logout" render={()=>{
          signout()
          return         <div style={{
            textAlign: "center", position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>
            <h3>You have been sign out</h3>
            <IonButton color="dark" onClick={signInWithGitHub}>Re-login With GitHub</IonButton>
          </div>
        }}>
          
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
