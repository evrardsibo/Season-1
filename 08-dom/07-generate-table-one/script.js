// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here
    let tab = document.getElementById("target")
    tab.setAttribute("target" , 'tbl')
    // document.body.appendChild(tab)
    document.getElementById('tbl').innerHTML = "<table border = '1'>" +
    '<tr>' +
      '<th>Header 1</th>' +
    '</tr>' +
    '<tr>' +
      '<td>Data 1</td>' +
      '<td>Data 2</td>' +
      '<td>Data 3</td>' +
    '</tr>' 
   


})();
