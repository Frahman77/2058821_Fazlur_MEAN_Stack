var i = 0;
function addb(name, price) {
    i++;
    var n = "" + i;
    document.getElementById('item').innerHTML = n;
    var locobject = JSON.parse(sessionStorage.getItem("locobject") || "[]");
    var obj = { name: name, price: price };
    locobject.push(obj);
    sessionStorage.setItem("locobject", JSON.stringify(locobject));
    console.log("Data store in session storage");
}
function displaydata() {
    var locobject = JSON.parse(sessionStorage.getItem("locobject") || "[]");
    var tableContent = "";
    var startTable = "<table border=2><tr><th>Item Name</th><th>Price</th>";
    var endTable = "</table>";
    locobject.forEach(function (title) { tableContent += "<tr><td>" + title.name + "</td><td>" + title.price; });
    tableContent = (startTable + tableContent + endTable);
    document.getElementById("main").innerHTML = tableContent;
    var currencyF = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    var Tot = 0;
    locobject.forEach(function (title) {
        tableContent += "<tr><td>" + title.name + "</td><td>" + title.price + "</td></tr>";
        Tot = +Tot + +title.price;
    });
    var last = ("<br/> YOUR SHOPPING CART TOTAL IS  = ");
    document.getElementById("last").innerHTML = last + Tot;
}
