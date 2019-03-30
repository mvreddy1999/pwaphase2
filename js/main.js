function submitdata() {
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var address=document.querySelector("#address").value;
  var email=document.querySelector("#email").value;
  var mblnum=document.querySelector("#mblnum").value;
  var ginstitute=document.querySelector("#ginstitute").value;
  var gbranch=document.querySelector("#gbranch").value;
  var gyear=document.querySelector("#gyear").value;
  var gpercentage=document.querySelector("#gpercentage").value;
  var iinstitute=document.querySelector("#iinstitute").value;
  var ibranch=document.querySelector("#ibranch").value;
  var iyear=document.querySelector("#iyear").value;
  var ipercentage=document.querySelector("#ipercentage").value;
  var sinstitute=document.querySelector("#sinstitute").value;
  var syear=document.querySelector("#syear").value;
  var spercentage=document.querySelector("#spercentage").value;
  var skills=document.querySelector("#Skills").value;
// IndexedDB implementation
var idb=window.indexedDB || window.mozIndexedDB || window.msIndexdDB || window.webkitIndexedDB;

if(!idb in window){
  console.log("indexedDB is not supported");
}
  // IndexedDB creations
  var request;
  var store;

  var open=idb.open("storeData",1);

  console.log("IndexedDB is created");
window.open("index.html");
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
          store.put({
            career:career,
            name:name,
            address:address,
            email:email,
            mblnum:mblnum,
            education:[
              {
                institute:ginstitute,
                branch:gbranch,
                year:gyear,
                percentage:gpercentage
              },
              {
                institute:iinstitute,
                branch:ibranch,
                year:iyear,
                percentage:ipercentage
              },
              {
              institute:sinstitute,
              branch:"",
              year:syear,
              percentage:spercentage
            }
          ],

            skils:skills




          });
        }
window.open("index.html");
}
