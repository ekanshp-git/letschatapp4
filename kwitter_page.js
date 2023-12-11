//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBSqztYsD1q_mzJYIMHj3c7dEhuSF5J_98",
      authDomain: "kwitter-us.firebaseapp.com",
      databaseURL: "https://kwitter-us-default-rtdb.firebaseio.com",
      projectId: "kwitter-us",
      storageBucket: "kwitter-us.appspot.com",
      messagingSenderId: "1017177864105",
      appId: "1:1017177864105:web:4c5f535070d8926b1d36b8",
      measurementId: "G-KY246M9WG7"
    };

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}