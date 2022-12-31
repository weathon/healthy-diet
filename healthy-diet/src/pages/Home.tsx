import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://nfvkhbydxwxdvwecegxz.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mdmtoYnlkeHd4ZHZ3ZWNlZ3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI0NDc1ODEsImV4cCI6MTk4ODAyMzU4MX0.OXIQcWfvGtW28BNmKJ1JNwUeegxVIiNUn-9nPfvEU3Y")

async function signInWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
}

async function signout() {
  const { error } = await supabase.auth.signOut()
}

async function signInIfNot(){
  const res = await supabase.auth.getUser()
  if(!res.data.user)
  {
    signInWithGitHub()
    console.log("Loged in!")
    return
  }
  console.log("Already logged in!")

}

signInIfNot();
const Home: React.FC = () => {
  // supabase.auth.getUser() kouganotinthedoc
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <IonButton onClick={signout}>Log Out</IonButton> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
