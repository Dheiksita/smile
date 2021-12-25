
const firebaseConfig = {
      apiKey: "AIzaSyBosqqzAJ2IqA7E5uJLGDJRasCWHS6I6ZY",
      authDomain: "kwitter-app-002.firebaseapp.com",
      databaseURL: "https://kwitter-app-002-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-002",
      storageBucket: "kwitter-app-002.appspot.com",
      messagingSenderId: "278778790012",
      appId: "1:278778790012:web:f834ed010ca298900e89f9"
    };
    
   firebase.initializeApp(firebaseConfig);
   username=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome  "+username+"!";
   function addroom(){
         room_name=document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
               purpose:"adding room name"
         });
         localStorage.setItem("roomName",room_name);
         window.location="smile_page.html";
   }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names);
      row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomname(this.id)'>$"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomname(name){
      console.log(name);
      localStorage.setItem("roomName",room_name);
      window.location="smile_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_name");
      window.location="index.html";
}

