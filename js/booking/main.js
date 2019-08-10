// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyDxC_sSeSnqwCY0HXnZ-m7_t-jtZ42IKG4",
  authDomain: "trucks24-website.firebaseapp.com",
  databaseURL: "https://trucks24-website.firebaseio.com",
  projectId: "trucks24-website",
  storageBucket: "",
  messagingSenderId: "562692131462",
  appId: "1:562692131462:web:89ad0e9dc05b5b8b"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('bookings');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var truck_type = document.getElementsByName("truck_type");
    if(truck_type[0].checked)
      {
         var val = truck_type[0].value;
      }
                    
    else if(truck_type[1].checked)
       {
         var val = truck_type[1].value;
       }
                    
     else if(truck_type[2].checked)
        {
          var val = truck_type[2].value;
        }

var truck_capacity = document.getElementsByName("creditcard");
    if(truck_capacity[0].checked)
      {
         var capacity = truck_capacity[0].value;
      }
                    
    else if(truck_capacity[1].checked)
       {
         var capacity = truck_capacity[1].value;
       }
                    
     else if(truck_capacity[2].checked)
        {
          var capacity = truck_capacity[2].value;
        }

  // Save message
  saveMessage(name, company, email, phone,val,capacity);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone,val,capacity){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    truck_type:val,
    truck_capacity:capacity,
  });
}