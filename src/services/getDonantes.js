import firebase from 'firebase/app'
import 'firebase/firestore'

export default function GetDonantes() {
    const recentlyAdded = []
    const db = firebase.firestore()
    return db.collection("donantes")
        .orderBy("timestamp", "desc")
        .limit(3)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            recentlyAdded.push({
                name: doc.data().name,
                url: doc.data().url,
                id: doc.id,
                timestamp:doc.data().timestamp
            })
        })
        return recentlyAdded
    })
}