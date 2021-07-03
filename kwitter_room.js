
//ADD YOUR FIREBASE LINKS HERE
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
    document.getElementById("user_name").innerHTML= "Welcome " +user_name+ "!";

    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_room_name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html"
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name -"+ Room_names);
      row="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
