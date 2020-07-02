var provider = new firebase.auth.GoogleAuthProvider();
var provider = new firebase.auth.FacebookAuthProvider();

const googleSignIn = (e) => {
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().languageCode = 'pt';

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
    firebase.auth().signInWithPopup(provider).then(function(result) {
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
      window.location.replace('index.html')
    } else {
      // No user is signed in.
    }
  });
const signIn = (e) => {
    let email, password
    email = document.querySelector('#email').value
    password = document.querySelector('#password').value
    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

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
          });
       }
       else{
        alert('Password should contain at least 8 characters, 1 number, 1 uppercase and 1 lowercase')
       }
    }
    else{
        //show error message
        alert('Please enter a valid email address')
    }
}
document.querySelector('#googleSignIn').addEventListener('click', googleSignIn)
document.querySelector('#facebookSignIn').addEventListener('click', fb)
document.querySelector('#signIn').addEventListener('click',signIn)