// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here
    let e = document.getElementById("target");
    let tab = document.createElement ('tabl');
    tab.setAttribute("id" , 'tbl');
    e.appendChild(tab);

    document.querySelector('#tbl').innerHTML = "<table border = '1'>" +
    '<tr>' +
      '<th>ROW 1</th>' +
    '</tr>' +
    '<tr>' +
      '<td>ROW 2</td>' +
    '</tr>' +
    '<tr>' +
      '<td>ROW 3</td>' +
    '</tr>'+ 
    '<tr>' +
      '<td>ROW 4</td>' +
    '</tr>'+
    '<tr>' +
      '<td>ROW 5</td>' +
    '</tr>'+
    '<tr>' +
      '<td>ROW 6</td>' +
    '</tr>'+
    '<tr>' +
      '<td>ROW 7</td>' +
    '</tr>'+
    '<tr>' +
      '<td>ROW 8</td>' +
    '</tr>'+
    '<tr>' +
      '<td>ROW 9</td>' +
    '</tr>'+
    '<tr>' +
      '<td>ROW 10</td>' +
    '</tr>'
   


})();
