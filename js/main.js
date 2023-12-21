var SiteName = document.getElementById("SiteName")
var SiteUrl = document.getElementById("SiteUrl")
var siteList =[];
siteList=JSON.parse(localStorage.getItem("sites"))
displayData()


function addsite(){
if(validation()==true && validationUrl()==true){
    var site={
        Name:SiteName.value,
        Url: SiteUrl.value
    }
    siteList.push(site)
    localStorage.setItem("sites",JSON.stringify(siteList) )
    clearForm()
    displayData()
    console.log(siteList);
}
}
function clearForm(){
    SiteName.value=""
     SiteUrl.value=""
  
  }

function displayData(){
    var cartona ="";
  
    for (i = 0; i<siteList.length ; i++) {
      cartona += `
  <tr>
     <td>${i}</td>
     <td>${siteList[i].Name}</td>
     <td> <button class="btn btn-outline-warning btn-sm"><i class="fa-solid fa-eye pe-2"></i>Visit</button></td>
     <td>
     <button class="btn btn-outline-danger btn-sm" onclick="deleteSite(${i})"><i class="fa-solid fa-trash-can"></i>  delete</button>
     </td>
  </tr>
     `
    }
    document.getElementById("tableBody").innerHTML=cartona;
  }
   


  function validation(){
    var regexName=/^[A-z]{3}[A-z]*$/i
   var text=SiteName.value
   if (regexName.test(text) ==true) {
    SiteName.classList.add('is-valid')
    SiteName.classList.remove('is-invalid')
    return true
   }
   else{
    SiteName.classList.add('is-invalid')
    SiteName.classList.remove('is-valid')
    return false
   }
  }

  function validationUrl(){
    var text=SiteUrl.value
    var regexUrl=/^[A-z]+\.[A-z]+$/i
   if (regexUrl.test(text) ==true) {
    SiteUrl.classList.add('is-valid')
    SiteUrl.classList.remove('is-invalid')
    return true
   }
   else{
    SiteUrl.classList.add('is-invalid')
    SiteUrl.classList.remove('is-valid')
    return false
   }
  }


  function deleteSite(index){
    siteList.splice(index,1)
    localStorage.setItem("sites",JSON.stringify(siteList) )
    displayData()
}


