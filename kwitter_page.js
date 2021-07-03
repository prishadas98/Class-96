//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyB1drr1MCMDVnP5vE7i90QAj0V_UqVH6Tw",
      authDomain: "kwitter-eaf8f.firebaseapp.com",
      databaseURL: "https://kwitter-eaf8f-default-rtdb.firebaseio.com",
      projectId: "kwitter-eaf8f",
      storageBucket: "kwitter-eaf8f.appspot.com",
      messagingSenderId: "912984295617",
      appId: "1:912984295617:web:42e3fe5a641b03b2c86c40"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({

            name:user_name,
            message:msg,
            like:0

          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
