const email = document.getElementById('email');
const downloadBtn = document.getElementById('downloadBtn');
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isValid = email => regex.test(email); 
 	
setInterval(() => {
  if (isValid(email.value)) {
  	downloadBtn.style.display = 'block';
  } else {
  	downloadBtn.style.display = 'none';
  }
}, 500)

downloadBtn.addEventListener('click', () => {
  const formWrapper = document.getElementById('formWrapper');
  setTimeout(() => {
    formWrapper.innerHTML = '';
  }, 500);
})



