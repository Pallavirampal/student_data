function data()
{
    document.location = "student_info.html"
}
function fetch_data(fname,lname,faname,dob,tel,hsn,pa,degree,yourlevel,email){
   console.log("fname is",fname);
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = fname;
    
    var td2 = document.createElement("td");
    td2.innerHTML = lname; 

    var td3 = document.createElement("td");
    td3.innerHTML = faname; 

    var td4 = document.createElement("td");
    td4.innerHTML = dob; 
   
    var td5 = document.createElement("td");
    td5.innerHTML = tel; 

    var td6 = document.createElement("td");
    td6.innerHTML = hsn; 

    var td7 = document.createElement("td");
    td7.innerHTML = pa; 

    var td8 = document.createElement("td");
    td8.innerHTML = degree; 

    var td9 = document.createElement("td");
    td9.innerHTML = yourlevel;
    
    var td10 = document.createElement("td");
    td10.innerHTML = email; 


    tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9,td10);
    document.getElementById("t1").append(tr);
}
// fetch_data("pallavi","rampal","raman","1-11-2000","7865643456",
// "holly heart","permanent ad","3","mca","c@g.com");


function btn_click(){
    alert('hello');
    // fetch_data("pallu","rampal","raman","1-11-2000","7865643456",
    // "holly heart","permanent ad","3","mca","c@g.com");
}

var button = document.querySelector('#ab');
console.log(button);
button.addEventListener('click', btn_click);
