var obj1;
function startTask() {
    obj1 = setInterval("cssEffect()",1000);
}
function getData() {
    let abc = sessionStorage.getItem("obj1");
    let xyz = localStorage.getItem("obj1")
    let empObj = sessionStorage.getItem("empObj");
    let empJson = JSON.parse(empObj)
    console.log("emp obj "+empJson);
    console.log("Value from session Storage is "+abc);
    console.log("Value from local storage is "+xyz);
}
function displayData() {
    let empObj = sessionStorage.getItem("empObj");
}