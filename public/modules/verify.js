const db = firebase.firestore()
const auth = firebase.auth()

export const verifyFunc = () => {
    document.querySelector('#search').addEventListener('onkeyup',()=>{
        const client = contentful.createClient({
         space:'g83j5mjjg3ig',
        accessToken:'guJQMz5h39zhGLFemZudb_AUudM5d23tf0RkNehkPXY'
          })
          
          client.getEntries({
            content_type: 'Product'
            // 'fields.<field_name>[match]': '.com'
          })
          .then((response) => console.log(response.items))
          .catch(console.error)
    })
}