var provider=new firebase.auth.GoogleAuthProvider,providerf=new firebase.auth.FacebookAuthProvider;const db=firebase.firestore(),googleSignIn=e=>{provider.addScope("email"),firebase.auth().useDeviceLanguage(),firebase.auth().signInWithPopup(provider).then((function(e){e.credential.accessToken,e.user})).catch((function(e){e.code,e.message,e.email,e.credential}))},fb=()=>{firebase.auth().signInWithPopup(providerf).then((function(e){e.credential.accessToken,e.user;console.log("Success")})).catch((function(e){e.code,e.message,e.email,e.credential}))};firebase.auth().onAuthStateChanged((function(e){e&&(window.location.replace("index"),db.collection("Movies_Accounts/users/accounts").doc(e.uid).set({}).then(()=>{window.location.replace("index")}).catch(e=>{console.log(e.message)}))}));const signIn=e=>{let n,o;n=document.querySelector("#email").value,o=document.querySelector("#password").value;let t=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(n),c=/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*+-])[\w!@#$%^&*+-]{8,}$/.test(o);t?c?firebase.auth().signInWithEmailAndPassword(n,o).then(()=>{}).catch((function(e){e.code;var n=e.message;console.log(n),alert("Email Address or Password is Invalid")})):document.getElementById("error").style.display="block":document.getElementById("errorE").style.display="block"};document.querySelector("#googleSignIn").addEventListener("click",googleSignIn),document.querySelector("#facebookSignIn").addEventListener("click",fb),document.querySelector("#signIn").addEventListener("click",signIn);