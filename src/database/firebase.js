import firebase from 'firebase/app'
import 'firebase/firestore'
// import {getDates} from '../helpers/helpers'
// import { mailVerify } from '../emailTemplates/receipt'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };
 class Firebase {
    constructor(){
        this.app = firebase.initializeApp(firebaseConfig)
        this.firestore = this.app.firestore()
        this.tables = {
            SUBSCRIBERS:'subscribers'
        }
        this.serverTime = firebase.firestore.Timestamp.now().seconds
        // Date.prototype.addDays = function(days) {
        //     let date = new Date(this.valueOf());
        //     date.setDate(date.getDate() + days);
        //     return date;
        // }

    }

    getServerTime = ()=>{
        return this.serverTime
    }

    storePhoneNumber = async(phone)=>{
        const ref = this.firestore.collection(this.tables.SUBSCRIBERS).doc(phone)
      const doc =   await ref.get()
      if(doc.exists){
          return false
      }
      else{
        await ref.set({phoneNumber:phone})
        return true
      }
       
    }
}
export default new Firebase();