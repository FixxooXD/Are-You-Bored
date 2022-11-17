const  activityy = document.querySelector("#activity")
const type = document.getElementById('type');
const nextBtn =  document.getElementById('btn');
console.log(activityy);
console.log(type);
console.log(nextBtn);

nextBtn.addEventListener('click', nextActivity)

async function  nextActivity(){
   const activityResponse  = await fetch('https://www.boredapi.com/api/activity/')
   const Data = await activityResponse.json();
   console.log(Data)
   activityy.innerHTML = Data.activity
   type.innerHTML = Data.type
}
