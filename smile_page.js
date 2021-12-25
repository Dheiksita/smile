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
    roomName=localStorage.getItem("roomName");
    
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(roomName).push({
                name:username,
                message:msg,
                like:0
          });
      document.getElementById("msg").value="";

    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         Name=message_data['name'];
         Message=message_data['message'];
         like=message_data['like'];
         name_tag="<h4>"+Name+"<img class='user_tick'src='tick.png'></h4>";
         message_tag="<h4 class='message_h4'>"+Message+"</h4>";
         like_btn="<button class='btn btn-warning'id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
         span_tag="<span class='glyphicon glyphicon-thumbs-up'>like : "+like+"</span></button><hr>";
         row=name_tag+message_tag+like_btn+span_tag;
         document.getElementById("output").innerHTML+=row;
      } });  }); }
getData();

function updatelike(message_id){
      console.log("clicked on like button- "+message_id);
      btn_id=message_id;
      likes=document.getElementById(btn_id).value;
      updated_like=Number(likes)+1;
      console.log(updated_like);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_like
      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_name");
      window.location="index.html";
}
