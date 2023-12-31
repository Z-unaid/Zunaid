let cross = document.querySelector('.cross-icon');

function checkPasskey() {
  let span = document.querySelector('.span');
  let NAME = document.getElementById("name");
  let passKey = document.getElementById("pass-key");
  let nameTmp = document.getElementById("name").value;
  let passkey = document.getElementById("pass-key").value;
  let nameLwr = nameTmp.toLowerCase();
  let currectName = nameLwr.trim();
  let check = 0;
  if (currectName === "zunaid" || currectName === "over smart") {
    check += 1;
    console.log('Converted Name :  ',currectName); 
  }
  if (passkey === "smart") {
    check += 2;
    console.log('PassKey :  ',passkey);
  }
  /*
  if(NAME.value == ""){
    NAME.classList.add('shake1');
    NAME.classList.remove('shake1');
    console.log('Neme empty');
  }
  
  if (passKey.value == "") {
    passKey.classList.add('shake1');
    passKey.classList.remove('shake1');
    console.log('Passkey empty');
  }
  */
  if (check == 2) {
    document.querySelector(".wrong").style.display = 'flex';
    span.innerText = NAME.value;
    passKey.style.borderColor = '#4C4C4C';
    console.log("Wrong Name");
    NAME.value = "";
  } 
  
  if(check == 1){
    passKey.classList.add('shake1','color');
    console.log('Wrong passkey');
    passKey.value = "";
  } 
  
  if(check == 3){
    window.location.href = "Home.html";
    console.log('Welcome');
  }
  
  if(check == 0){
    passKey.classList.add('shake1','color');
    NAME.classList.add('shake1','color');
    console.log('Name and PassKey are Wrong');
    NAME.value = "";
    passKey.value = "";
  }
  
  setTimeout(function() {
      let NAME = document.getElementById("name");
      let passKey = document.getElementById("pass-key");
      NAME.classList.remove ('shake1');
      passKey.classList.remove ('shake1');
      console.log('shake removed');
    }, 500);
    
    
  
  
}
function okButton() {
  let ok = document.querySelector(".wrong");
  ok.style.display = 'none';
}

function clear1(){
  let name = document.getElementById('name');
  name.value = "";
  cross.style.display = 'none';
  console.log('input clear');
}