const db = firebase.firestore()
const auth = firebase.auth()

export const verifyFunc = () => {
    db.collection('Movies_Accounts/users/accounts').get().then((results) => {
        console.log(results)
        results.forEach(res => {
            const f_data = res.data()
  
        })
    })
}