function greeting(){
   let i = document.querySelector('input[name="shimei"]');
   shimei = i.value;
   
   console.log = ('shimei');
  }
  let b = document.querySelector('button#print');
  b.addEventListener('click', greeting);