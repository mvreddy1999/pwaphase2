var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
    para=query[i].split("=");
    paravalue=parseInt(para[1]);
}

var idb=window.indexedDB || window.mozIndexedDB || window.msIndexdDB || window.webkitIndexedDB;

if(!idb in window){
  console.log("indexedDB is not supported");
}
  // IndexedDB creations
  var request;
  var store;

  var open=idb.open("storeData",1);

  console.log("IndexedDB is created");

  open.onupgradeneeded=function(e){

    request=e.target.result;
    store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
    console.log("store is created");
}
        open.onerror=function(error){
          console.log("error");
        }
        open.onsuccess=function(e){
          request=e.target.result;
          var transaction=request.transaction("formdata","readwrite");
          store=transaction.objectStore("formdata");
          var info=store.get(paravalue);
          info.onsuccess=function(data){
            console.log(data);
            personalinfo(data.target.result);
            careerobjective(data.target.result);
            education(data.target.result);
            skills(data.target.result);
          }
}
var left=document.querySelector(".left");
function personalinfo(pi){
    var image=document.createElement("img");
    image.src="images/girl.svg";
    image.alt=pi.name;

    var name =document.createElement("h2");
    name.textContent=pi.name;

    var email =document.createElement("h2");
    email.textContent=pi.email;

    var mblnum =document.createElement("h2");
    mblnum.textContent=pi.mblnum;

    left.append(image);
    left.append(name);
    left.append(email);
    left.append(mblnum);

}
var right=document.querySelector(".right");
 function careerobjective(c){

   // career.textContent="Career Objective";
   var career=document.createElement("h3");
   career.textContent="Career Objective";
   right.append(career);
   var hr=document.createElement("hr");
   right.append(hr);
   var info=document.createElement("info");
   info.textContent=c.career;
   right.append(info);
}
// var right=document.querySelector(".right");
function education(e){
        var h1 = document.createElement("h1");
        h1.textContent="education Skills";
        right.append(h1);
        var hr=document.createElement("hr");
        right.append(hr);

        var table = document.createElement("table");
         table.border="1";
          var tr1="<tr><th>institute</th><th>branch</th><th>year</th><th>percentage</th></tr>";
         var tr2="";
          for(var i in e.education)
         {
           tr2=tr2+"<tr><td>"+e.education[i].institute+"</td><td>"+e.education[i].branch+"</td><td>"+e.education[i].year+"</td><td>"+e.education[i].percentage+"</td></tr>";
         }
         table.innerHTML=tr1+tr2;
         right.append(table);

       }
       function skills(s){
              var skills= document.createElement("h1");
              skills.textContent="Skills";
              right.append(skills);
              var hr=document.createElement("hr");
              right.append(hr);
              var skils=document.createElement("skills");
              skils.textContent=s.skils;
              right.append(skils);

              }
