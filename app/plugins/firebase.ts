import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseInstance = !firebase.apps.length
  ? firebase.initializeApp({ projectId: 'yukito-a3e0c' })
  : firebase.app()
const db = firebaseInstance.firestore()
const { Timestamp, GeoPoint } = firebase.firestore

export { Timestamp, GeoPoint }
export { db }
