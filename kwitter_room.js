
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAQAwHdz0jq1JGxstiyCFXNnqjgJ7v5BQ4",
      authDomain: "lets-chat-ea94d.firebaseapp.com",
      projectId: "lets-chat-ea94d",
      storageBucket: "lets-chat-ea94d.appspot.com",
      messagingSenderId: "723005832406",
      appId: "1:723005832406:web:0eb435f86876ad7d231d77"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    


function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
 
localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log("Room Name -" + Room_names);
     row= "<div class='room_name' id="+Room_names+" onclick=redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
     document.getElementById("output").innerHMTL += row;
     //End code
     });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}