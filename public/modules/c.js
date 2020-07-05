var provider = new firebase.auth.GoogleAuthProvider();
var providerf = new firebase.auth.FacebookAuthProvider();
const db = firebase.firestore()
const googleSignIn = (e) => {
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    provider.addScope('email');
    firebase.auth().useDeviceLanguage();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(`User: ${user} , Token : ${token}`)
        console.log('Success')
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}

const fb = () => {
    firebase.auth().signInWithPopup(providerf).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log('Success')
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      db.collection('Movies_Accounts/users/accounts').doc(user.uid).set({name:'Joseph Asare'}).then(()=>{
        window.location.replace('index.html')
      })
      // console.log(user.uid)
    } else {
      // No user is signed in.
    }
  });

const signIn = (e) => {
    let email, password
    email = document.querySelector('#email').value
    password = document.querySelector('#password').value
    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var passwordPattern = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*+-])[\w!@#$%^&*+-]{8,}$/;

    let bool=  emailPattern.test(email);
    let passbool = passwordPattern.test(password)


  if(bool){
       if(passbool){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            // window.location.replace('index.html')
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            // ...
            alert( 'Email Address or Password is Invalid')
          });
       }
       else{
           document.getElementById('error').style.display = 'block'
       }
    }
    else{
        //show error message
        document.getElementById('errorE').style.display = 'block'

    }
}
document.querySelector('#googleSignIn').addEventListener('click', googleSignIn)
document.querySelector('#facebookSignIn').addEventListener('click', fb)
document.querySelector('#signIn').addEventListener('click',signIn)