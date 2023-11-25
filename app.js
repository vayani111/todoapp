const firebaseConfig = {
    apiKey: "AIzaSyBBGZev05-VdZOGj35Zx9vt21KMpBsuUbI",
    authDomain: "todo-app-342f1.firebaseapp.com",
    databaseURL: "https://todo-app-342f1-default-rtdb.firebaseio.com",
    projectId: "todo-app-342f1",
    storageBucket: "todo-app-342f1.appspot.com",
    messagingSenderId: "992525833134",
    appId: "1:992525833134:web:c706fd690dee7f6bccae3f",
    measurementId: "G-NJQBCL5NLM"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
console.log(app)
function addtodo() {
    var input = document.getElementById("input");
    var lielement = document.createElement("li");
    var litext = document.createTextNode(input.value);
    lielement.appendChild(litext);
  
    var ul = document.getElementById("list");
  
    var delbtn = document.createElement("button");
    var deltvt = document.createTextNode("Delete");
    delbtn.setAttribute("onclick", "delitem(this)");
    delbtn.appendChild(deltvt);
  
    lielement.appendChild(delbtn);
  
    var editbtn = document.createElement("button");
    var edittvt = document.createTextNode("Edit");
    editbtn.appendChild(edittvt);
    lielement.appendChild(editbtn);
  
    editbtn.setAttribute("onclick", "edititem(this)");
  
    ul.appendChild(lielement);
    var obj = {
      value:input.value,
      };
    
      console.log(obj);
    
      var key = Math.random() * 351561245146;
    
      firebase
        .database()
        .ref("userDetails/users/" + Math.round(key))
        .set(obj);
        input.value = "";
    }
    
  
  function delitem(x) {
    x.parentNode.remove();
    }
  
  
  function edititem(x) {
    var newValue = prompt("Enter updated value...........");
    if (newValue !== null) { 
      x.parentNode.firstChild.nodeValue = newValue;
    }
    
  }
  