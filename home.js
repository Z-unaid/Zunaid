function showPremium1() {
  let link = document.querySelector('.premium-passkey');
  link.style.transform = 'translateX(0px)';
  let button = document.querySelector('.get-acess');
  button.onclick = acess1;
  console.log('Education Button Clicked');
  }
  function showPremium2() {
  let link = document.querySelector('.premium-passkey');
  link.style.transform = 'translateX(0px)';
  let button = document.querySelector('.get-acess');
  button.onclick = acess2;
  console.log('City & State Button Clicked');
  }
  function showPremium3() {
    let link = document.querySelector('.premium-passkey');
    link.style.transform = 'translateX(0px)';
    let button = document.querySelector('.get-acess');
    button.onclick = acess3;
    console.log('Social Button Clicked');
  }

function acess1() {
  let passkey = document.getElementById('pass-key');
  if (passkey.value === "oh-no") {
    window.location.href = "come.html";
    console.log('Request Approved');
  } else {
    alert('wrong passkey');
    console.log('Acess Denied');
  }
  passkey.value = "";
}

function acess2() {
  let passkey = document.getElementById('pass-key');
  if (passkey.value === "oh-no") {
    window.location.href = "come.html";
    console.log('Request Approved');
  } else {
    alert('wrong passkey');
    console.log('Acess Denied');
  }
  passkey.value = "";
}

function acess3() {
  let passkey = document.getElementById('pass-key');
  if (passkey.value === "oh-no") {
    window.location.href = "social.html";
    console.log('Request Approved');
  } else {
    alert('wrong passkey');
    console.log('Acess Denied');
  }
  passkey.value = "";
}

function hidePremium() {
    let link = document.querySelector('.premium-passkey');
    link.style.transform = 'translateX(395px)';
    console.log('Closed');
}



function notFound() {
  let url = '404.html'
  window.location.href = url;
  console.log("No Error");
}