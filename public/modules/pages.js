let state = true
let stateM = true

export const navigate = (e) => {
    //function to listen for clicks on the buttons
    if(e.target.className == 'home'){
        window.location.replace('index.html')

    }
    else if( e.target.className == 'profile' || e.target.className == 'close' || e.target.className == 'lin') {
        //we will display a modal when the user button is clicked
        // this modal will allow the user set a profile picture, account name and choose their favorite movie categories
        let f = true
        document.querySelector('.account-modal').classList.toggle('toggle')
        document.body.classList.toggle('toggle')
        if(screen.width < 550){
            if(state){
                document.querySelector('.navigation').classList.toggle('show')
                state = false
            }
            else{
                document.querySelector('.navigation').classList.remove('show')
                state = true
            }
        }
        else{
            
        }
        document.querySelector('.burgerContainer').classList.toggle('toggle')
    }
    else if(e.target.className == 'fas fa-cogs'){
        // will desgin a modal to display the settings


    }
    else if(e.target.className == 'far fa-envelope'){
        //code here to display notifications or messages received from us
        window.location.replace('inbox.html')
    }
    else if(e.target.classList.contains('signout')){
        //logout
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
            console.error
          });
        }
    else if(e.target.className == 'fas fa-search' || e.target.className == 'search' || e.target.className == 'closeSearch' || e.target.className == 'far fa-window-close 5'){
        document.querySelector('.searchModal').classList.toggle('open')
        // document.querySelector('.navigation').classList.toggle('show')
        if(state){
            document.querySelector('.navigation').classList.toggle('show')
            state = false
        }
        else{
            document.querySelector('.navigation').classList.remove('show')
            state = true
        }
    }
    else if(e.target.className == 'burgerContainer' || e.target.className == 'line'){
        document.querySelector('.navigation').classList.toggle('show')
    }
    
}