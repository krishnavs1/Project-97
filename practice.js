var firebaseConfig = {
    apiKey: "AIzaSyBB-p-3KfosFhKhIvZcsEXl_jeJvHP6Sc4",
    authDomain: "kwitter-539d5.firebaseapp.com",
    projectId: "kwitter-539d5",
    storageBucket: "kwitter-539d5.appspot.com",
    messagingSenderId: "217724783861",
    appId: "1:217724783861:web:d668aa6d12eeef5eaa09bc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function adduser()
{
    user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
});
}