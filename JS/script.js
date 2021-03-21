let next =document.getElementById('send');
let Model=document.getElementById('Model');
let Name=document.getElementById('Name');
let ele = document.getElementsByName('ordertype'); 
let comment=document.getElementById("fristsec");
let other=document.getElementById("other");
let price=document.getElementById("price");
let checked=false;
/////
let price2=document.getElementById("price2");
let Model2=document.getElementById('Model2');
let ele2 = document.getElementsByName('ordertype2'); 
let next2 =document.getElementById('send2');
let Tp=document.getElementById("Tp");
let price3=document.getElementById("price3");
//let comment3=document.getElementById("thirdsec");

let heightP=window.innerHeight;
let heightM=heightP-250
document.getElementsByClassName('parallax')[0].style.height=heightP.toString()+"px";

document.getElementsByClassName('imgs')[0].style.height=heightM.toString()+"px";
document.getElementsByClassName('imgs')[1].style.height=heightM.toString()+"px";
document.getElementsByClassName('imgs')[2].style.height=heightM.toString()+"px";

ele2[0].addEventListener("click",function(){
    if(Model2.value!=""){
    if( Model2.value=="B005"||Model2.value=="B006"||Model2.value=="B007"||
    Model2.value=="N003"||Model2.value=="N007"||Model2.value=="N008"||Model2.value=="C001"||
    Model2.value=="N001" ||Model2.value=="C002"||Model2.value=="N011")
    {price2.style.display="block";
    price2.value='259';
    }

    else if(Model2.value=="N005"||Model2.value=="B008"||Model2.value=="B004"||
    Model2.value=="N004"||Model2.value=="C004"||Model2.value=="N013"||Model2.value=="N010"||Model2.value=="B001"){
        price2.style.display="block";
        price2.value='299';
    }

    else if(Model2.value=="N006"||Model2.value=="C003"||Model2.value=="N009") {
        price2.style.display="block";
        price2.value='279';
    }
    else if(Model2.value=="B002"||Model2.value=="B003"||Model2.value=="N002"
    ||Model2.value=="M001"||Model2.value=="M002"||Model2.value=="M003") {
        price2.style.display="block";
        price2.value='269';
    }
    else if(Model2.value=="N012"){
        price2.style.display="block";
        price2.value='339';
    }
    else if(Model2.value=="N014"){
        price2.style.display="block";
        price2.value='450';
    }

    price3.style.display="block";
    price3.value=parseInt(price.value)+parseInt(price2.value);

}
})

ele2[1].addEventListener("click",function(){
    if(Model2.value!=""){
    if( Model2.value=="B005"||Model2.value=="B006"||Model2.value=="B007"||
    Model2.value=="N003"||Model2.value=="N007"||Model2.value=="N008"||
    Model2.value=="C001"||Model2.value=="N001" ||Model2.value=="C002"||Model2.value=="N011")
    {price2.style.display="block";
    price2.value='309';
    }

    else if(Model2.value=="N005"||Model2.value=="B008"||Model2.value=="B004"||
    Model2.value=="N004"||Model2=="C004"||Model2.value=="N013"||Model2.value=="N010"||Model2.value=="B001"){
        price2.style.display="block";
        price2.value='349';
    }

    else if(Model2.value=="N006"||Model2.value=="C003"||Model2.value=="N009") {
        price2.style.display="block";
        price2.value='329';
    }
    else if(Model2.value=="B002"||Model2.value=="B003"||Model2.value=="N002") {
        price2.style.display="block";
        price2.value='319';
    }
    else if(Model2.value=="N012"){
        price2.style.display="block";
        price2.value='389';
    }
    else if(Model2.value=="M001"||Model2.value=="M002"||Model2.value=="M003"){
        price2.style.display="block";
        price2.value='299';
    }
    
    else if(Model2.value=="N014")
    {
        price2.style.display="block";
        price2.value='499';

    }
    price3.style.display="block";
    price3.value=parseInt(price.value)+parseInt(price2.value);

}
})

ele[0].addEventListener("click",function(){
    if(Model.value!=""){
    if( Model.value=="B005"||Model.value=="B006"||Model.value=="B007"||
    Model.value=="N003"||Model.value=="N007"||Model.value=="N008"||Model.value=="C001"||
    Model.value=="N001" ||Model.value=="C002"||Model.value=="N011")
    {price.style.display="block";
    price.value='259';
    }

    else if(Model.value=="N005"||Model.value=="B008"||Model.value=="B004"||
    Model.value=="N004"||Model.value=="C004"||Model.value=="N013"||Model.value=="N010"||Model.value=="B001"){
        price.style.display="block";
        price.value='299';
    }

    else if(Model.value=="N006"||Model.value=="C003"||Model.value=="N009") {
        price.style.display="block";
        price.value='279';
    }
    else if(Model.value=="B002"||Model.value=="B003"||Model.value=="N002"
    ||Model.value=="M001"||Model.value=="M002"||Model.value=="M003") {
        price.style.display="block";
        price.value='269';
    }
    else if(Model.value=="N012"){
        price.style.display="block";
        price.value='339';
    }
    else if(Model.value=="N014"){
        price.style.display="block";
        price.value='450';
    }


}
})

ele[1].addEventListener("click",function(){
    if(Model.value!=""){
    if( Model.value=="B005"||Model.value=="B006"||Model.value=="B007"||
    Model.value=="N003"||Model.value=="N007"||Model.value=="N008"||
    Model.value=="C001"||Model.value=="N001" ||Model.value=="C002"||Model2.value=="N011")
    {price.style.display="block";
    price.value='309';
    }

    else if(Model.value=="N005"||Model.value=="B008"||Model.value=="B004"||
    Model.value=="N004"||Model.value=="C004"||Model.value=="N013"||Model.value=="N010"||Model.value=="B001"){
        price.style.display="block";
        price.value='349';
    }

    else if(Model.value=="N006"||Model.value=="C003"||Model.value=="N009") {
        price.style.display="block";
        price.value='329';
    }
    else if(Model.value=="B002"||Model.value=="B003"||Model.value=="N002") {
        price.style.display="block";
        price.value='319';
    }
    else if(Model.value=="N012"){
        price.style.display="block";
        price.value='389';
    }
    else if(Model.value=="M001"||Model.value=="M002"||Model.value=="M003"){
        price.style.display="block";
        price.value='299';
    }
    else if(Model.value=="N014"){
        price.style.display="block";
        price.value='499';
    }


}
})










let submit =document.getElementById('Isubmit');
let paymentways=document.getElementsByName("payment");
let customerName=document.getElementById("customerName");
let phone1=document.getElementById("tel1");
let phone2 =document.getElementById("tel2");
let city =document.getElementById("city");
let block =document.getElementById("block");
let street=document.getElementById("street");
let flatnum =document.getElementById("flatnum");
let comment2=document.getElementById("secondsec");
let back=document.getElementById("back");
paymentways[0].addEventListener("click",function(){
    document.getElementById("message").style.display="block";

})

paymentways[1].addEventListener("click",function(){
    document.getElementById("message").style.display="block";

})

back.addEventListener("click",function(){
    document.getElementById('section1').style.display="block";
    document.getElementById('section2').style.display="none";
   
    Model.value= document.getElementById("CopyModel").value;
})

next.addEventListener("click",function(){
    checked=false;
    for(i = 0; i <2; i++) { 
        if(ele[i].checked) 
        {
            checked=true;
        }
    }

   if(!checked||Model.value=="" || Name.value =="")
   {
    comment.innerHTML="*يرجى اكمال كافة البيانات"
   }

  else{
    document.getElementById("CopyModel").value=Model.value;
    document.getElementById("CopyModel").style.display="block";
    document.getElementById('section1').style.display="none";
    document.getElementById('section2').style.display="block";
  }
})

other.addEventListener("click",function(){
    checked=false;
    for(i = 0; i <2; i++) { 
        if(ele[i].checked) 
        {
            checked=true;
            mytype=ele[i];      //to get the checked element
        }
    }

   if(!checked||Model.value=="" || Name.value =="")
   {
    comment.innerHTML="*يرجى اكمال كافة البيانات"
   }

  else{
    document.getElementById("CopyModel").value=Model.value;
    document.getElementById("CopyModel").style.display="block";
    let Copredio=document.getElementById("copypayment");
    Copredio.setAttribute("value",mytype.value);
    Copredio.checked=true;
    if(document.getElementById("CopyModel2").value!=""){
        Model2.value=document.getElementById("CopyModel2").value;
    }
    else{
    Model2.value=" ";
    }
    document.getElementById('section1').style.display="none";
    document.getElementById('section3').style.display="block";
   
  }

})


next2.addEventListener("click",function(){
    
    document.getElementById("CopyModel2").value=Model2.value;
    document.getElementById("CopyModel2").style.display="block";
    document.getElementById('section3').style.display="none";
    document.getElementById('section2').style.display="block";

  
})





let form =document.getElementById("Form1");
form.addEventListener("submit", e => {
    e.preventDefault();

    checked=false;
    for(i = 0; i < 2; i++) { 
        if(paymentways[i].checked) 
        {
            checked=true;
        }
    }
   
   if(!checked||customerName.value=="" || phone1.value ==""||phone2.value ==""||city.value =="" ||block.value ==""||street.value ==""||flatnum.value =="")
   {
    comment2.innerHTML="*يرجى اكمال كافة البيانات"
   }
    else{
    //yourCode
    //document.getElementById("stpn").value=document.getElementById("CopyModel").value;
    //document.getElementById("stpn2").value=document.getElementById("CopyModel2").value;
    modal.style.display="block"
    setTimeout(()=>{
    modal.style.display="none"
    //submit.setAttribute("type","submit");
    form.submit()
    },1000)
}
})



 var span = document.getElementsByClassName("close")[0];


 span.onclick = function() {
   modal.style.display = "none";
 }

 var modal = document.getElementById("myModal");
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }




let M1=document.getElementById("M001");
M1.addEventListener("click",function(){
    Model.value=M1.getAttribute("id");
    Model2.value=M1.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let M2=document.getElementById("M002");
M2.addEventListener("click",function(){
    Model.value=M2.getAttribute("id");
    Model2.value=M2.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let M3=document.getElementById("M003");
M3.addEventListener("click",function(){
    Model.value=M3.getAttribute("id");
    Model2.value=M3.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
/////
let C1=document.getElementById("C001");
C1.addEventListener("click",function(){
    Model.value=C1.getAttribute("id");
    Model2.value=C1.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let C2=document.getElementById("C002");
C2.addEventListener("click",function(){
    Model.value=C2.getAttribute("id");
    Model2.value=C2.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let C3=document.getElementById("C003");
C3.addEventListener("click",function(){
    Model.value=C3.getAttribute("id");
    Model2.value=C3.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})

// let C4=document.getElementById("C004");
// C4.addEventListener("click",function(){
//     Model.value=C4.getAttribute("id");
//     Model2.value=C4.getAttribute("id");
//     price.style.display="none";
//     for(i = 0; i <2; i++) { 
//         ele[i].checked=false;
//         ele2[i].checked=false;
//     }
// })
//////
let B1=document.getElementById("B001");
B1.addEventListener("click",function(){
    Model.value=B1.getAttribute("id");
    Model2.value=B1.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let B2=document.getElementById("B002");
B2.addEventListener("click",function(){
    Model.value=B2.getAttribute("id");
    Model2.value=B2.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let B3=document.getElementById("B003");
B3.addEventListener("click",function(){
    Model.value=B3.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let B4=document.getElementById("B004");
B4.addEventListener("click",function(){
    Model.value=B4.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let B5=document.getElementById("B005");
B5.addEventListener("click",function(){
    Model.value=B5.getAttribute("id");
    Model2.value=B5.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let B6=document.getElementById("B006");
B6.addEventListener("click",function(){
    Model.value=B6.getAttribute("id");
    Model2.value=B6.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let B7=document.getElementById("B007");
B7.addEventListener("click",function(){
    Model.value=B7.getAttribute("id");
    Model2.value=B7.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let B8=document.getElementById("B008");
B8.addEventListener("click",function(){
    Model.value=B8.getAttribute("id");
    Model2.value=B8.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
///////

let N1=document.getElementById("N001");
N1.addEventListener("click",function(){
    Model.value=N1.getAttribute("id");
    Model2.value=N1.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let N2=document.getElementById("N002");
N2.addEventListener("click",function(){
    Model.value=N2.getAttribute("id");
    Model2.value=N2.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let N3=document.getElementById("N003");
N3.addEventListener("click",function(){
    Model.value=N3.getAttribute("id");
    Model2.value=N3.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let N4=document.getElementById("N004");
N4.addEventListener("click",function(){
    Model.value=N4.getAttribute("id");
    Model2.value=N4.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let N5=document.getElementById("N005");
N5.addEventListener("click",function(){
    Model.value=N5.getAttribute("id");
    Model2.value=N5.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let N6=document.getElementById("N006");
N6.addEventListener("click",function(){
    Model.value=N6.getAttribute("id");
    Model2.value=N6.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let N7=document.getElementById("N007");
N7.addEventListener("click",function(){
    Model.value=N7.getAttribute("id");
    Model2.value=N7.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let N8=document.getElementById("N008");
N8.addEventListener("click",function(){
    Model.value=N8.getAttribute("id");
    Model2.value=N8.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})

let N9=document.getElementById("N009");
N9.addEventListener("click",function(){
    Model.value=N9.getAttribute("id");
    Model2.value=N9.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let N10=document.getElementById("N010");
N10.addEventListener("click",function(){
    Model.value=N10.getAttribute("id");
    Model2.value=N10.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let N11=document.getElementById("N011");
N11.addEventListener("click",function(){
    Model.value=N11.getAttribute("id");
    Model2.value=N11.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let N12=document.getElementById("N012");
N12.addEventListener("click",function(){
    Model.value=N12.getAttribute("id");
    Model2.value=N12.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})

let N13=document.getElementById("N013");
N13.addEventListener("click",function(){
    Model.value=N13.getAttribute("id");
    Model2.value=N13.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let N14=document.getElementById("N014");
N14.addEventListener("click",function(){
    Model.value=N14.getAttribute("id");
    Model2.value=N14.getAttribute("id");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
//////////Mobile

let MN1=document.getElementById("MN001");
MN1.addEventListener("click",function(){
    Model.value=MN1.getAttribute("name");
    Model2.value=MN1.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let MN2=document.getElementById("MN002");
MN2.addEventListener("click",function(){
    Model.value=MN2.getAttribute("name");
    Model2.value=MN2.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let MN3=document.getElementById("MN003");
MN3.addEventListener("click",function(){
    Model.value=MN3.getAttribute("name");
    Model2.value=MN3.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let MN4=document.getElementById("MN004");
MN4.addEventListener("click",function(){
    Model.value=MN4.getAttribute("name");
    Model2.value=MN4.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let MN5=document.getElementById("MN005");
MN5.addEventListener("click",function(){
    Model.value=MN5.getAttribute("name");
    Model2.value=MN5.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let MN6=document.getElementById("MN006");
MN6.addEventListener("click",function(){
    Model.value=MN6.getAttribute("name");
    Model2.value=MN6.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let MN7=document.getElementById("MN007");
MN7.addEventListener("click",function(){
    Model.value=MN7.getAttribute("name");
    Model2.value=MN7.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let MN8=document.getElementById("MN008");
MN8.addEventListener("click",function(){
    Model.value=MN8.getAttribute("name");
    Model2.value=MN8.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})

let MN9=document.getElementById("MN009");
MN9.addEventListener("click",function(){
    Model.value=MN9.getAttribute("name");
    Model2.value=MN9.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let MN10=document.getElementById("MN010");
MN10.addEventListener("click",function(){
    Model.value=MN10.getAttribute("name");
    Model2.value=MN10.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let MN11=document.getElementById("MN011");
MN11.addEventListener("click",function(){
    Model.value=MN11.getAttribute("name");
    Model2.value=MN11.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let MN12=document.getElementById("MN012");
MN12.addEventListener("click",function(){
    Model.value=MN12.getAttribute("name");
    Model2.value=MN12.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})

let MN13=document.getElementById("MN013");
MN13.addEventListener("click",function(){
    Model.value=MN13.getAttribute("name");
    Model2.value=MN13.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let MN14=document.getElementById("MN014");
MN14.addEventListener("click",function(){
    Model.value=MN14.getAttribute("name");
    Model2.value=MN14.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
////////////////B

let MB1=document.getElementById("MB001");
MB1.addEventListener("click",function(){
    Model.value=MB1.getAttribute("name");
    Model2.value=MB1.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let MB2=document.getElementById("MB002");
MB2.addEventListener("click",function(){
    Model.value=MB2.getAttribute("name");
    Model2.value=MB2.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let MB3=document.getElementById("MB003");
MB3.addEventListener("click",function(){
    Model.value=MB3.getAttribute("name");
    Model2.value=MB3.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let MB4=document.getElementById("MB004");
MB4.addEventListener("click",function(){
    Model.value=MB4.getAttribute("name");
    Model2.value=MB4.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let MB5=document.getElementById("MB005");
MB5.addEventListener("click",function(){
    Model.value=MB5.getAttribute("name");
    Model2.value=MB5.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let MB6=document.getElementById("MB006");
MB6.addEventListener("click",function(){
    Model.value=MB6.getAttribute("name");
    Model2.value=MB6.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let MB7=document.getElementById("MB007");
MB7.addEventListener("click",function(){
    Model.value=MB7.getAttribute("name");
    Model2.value=MB7.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})
let MB8=document.getElementById("MB008");
MB8.addEventListener("click",function(){
    Model.value=MB8.getAttribute("name");
    Model2.value=MB8.getAttribute("name");
    price.style.display="none";
    for(i = 0; i <2; i++) { 
        ele[i].checked=false;
        ele2[i].checked=false;
    }
})




