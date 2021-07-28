import firebase from 'firebase/app'
import 'firebase/firestore'

export default function GetDonantes() {
    const recentlyAdded = []
    const db = firebase.firestore()
    return db.collection("novedades").orderBy("timestamp", "desc").limit(9).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            recentlyAdded.push({
                name: doc.data().name,
                description: doc.data().description,
                url: doc.data().url,
                date: doc.data().date,
                id: doc.id,
            })
        })
        return recentlyAdded
    })
}