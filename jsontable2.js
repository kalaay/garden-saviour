document.addEventListener("DOMContentLoaded", () => {
  let jsonstr = `[
          {"temp":"24", "light":"334"},
          {"temp":"24", "light":"334"}
        ]`;
  let jsonobj = JSON.parse(jsonstr);
  let form = document.querySelector("form");

  form.string.addEventListener("click", () => {
    let out = form.out;
    if (!jsonobj.length) return;
    let tblstr = "<table>";
    tblstr += "<caption>Table Using HTML String</caption>";
    tblstr += "<tr>";
    for (let prop in jsonobj[0]) {
      tblstr += `<th>${prop}`;
    }
    tblstr += jsonobj.reduce((s, x) => {
      s += "<tr>";
      for (let prop in x) {
        s += `<td>${x[prop]}`;
      }
      return s;
    }, "");
    tblstr += "</table>";
    out.insertAdjacentHTML("beforeend", "<p>" + tblstr);
  });

  form.dom.addEventListener("click", () => {
    let out = form.out;
    if (!jsonobj.length) return;
    let tbl = document.createElement("table");
    tbl.createCaption().innerText = "Table Using DOM API";
    let hdr = tbl.insertRow();
    for (let prop in jsonobj[0]) {
      hdr.appendChild(document.createElement("th")).innerText = prop;
    }
    jsonobj.reduce((t, x) => {
      let row = t.insertRow();
      for (let prop in x) {
        row.insertCell().innerText = x[prop];
      }
      return t;
    }, tbl);
    out.appendChild(document.createElement("p"));
    out.appendChild(tbl);
  });

  form.clear.addEventListener("click", () => (form.out.innerHTML = ""));
});

$.getJSON("mydata.json", function(data) {
  //do stuff with your data here
  let form = document.querySelector("form");

  form.string.addEventListener("click", () => {
    let out = form.out;
    if (!jsonobj.length) return;
    let tblstr = "<table>";
    tblstr += "<caption>Table Using HTML String</caption>";
    tblstr += "<tr>";
    for (let prop in jsonobj[0]) {
      tblstr += `<th>${prop}`;
    }
    tblstr += jsonobj.reduce((s, x) => {
      s += "<tr>";
      for (let prop in x) {
        s += `<td>${x[prop]}`;
      }
      return s;
    }, "");
    tblstr += "</table>";
    out.insertAdjacentHTML("beforeend", "<p>" + tblstr);
  });
});
