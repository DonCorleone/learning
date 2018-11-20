function insertRow(){
    var tbl = document.querySelector("#myTable");
    var newRow = tbl.insertRow();
    newRow.innerHTML = '<td>lini</td><td>thekid</td><td>777</td>'; 
}

function deleteFirstRow(){
    var tbl = document.querySelector("#myTable");
    tbl.deleteRow(1); // 0 == Header
}