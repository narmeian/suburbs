function sortTable(n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tblbody");
    switching = true;
    dir = "asc";
    
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i=0;i<(rows.length -1);i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir == "asc") {
          x = x.innerText.toLowerCase();
          y = y.innerText.toLowerCase();
          if (x.localeCompare(y, 'en', {numeric: true}) > 0) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          x = x.innerText.toLowerCase();
          y = y.innerText.toLowerCase();
          if (x.localeCompare(y, 'en', {numeric: true}) < 0) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }