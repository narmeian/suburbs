function listAll_web() {
    let dollarUSLocale = Intl.NumberFormat('en-US');
    $.ajax({
        url: 'http://3.105.230.58:8080/listAll',
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (result) {
            if (result && result.length > 0)
            {
                jQuery.each(result, function (i, val) {
                    median_income_label=val.median_income_label.substring(1)
                    income=median_income_label.split('~')
                    income1=dollarUSLocale.format(income[0])
                    income2=dollarUSLocale.format(income[1])
                    var tablerow = "<tr>"
                        + "<td>" + val.rank + "</td>"
                        + "<td>" + val.suburb + "</td>"
                        + "<td>" +"$"+ income1+' - '  +"$"+ income2+ "</td>"
                        + "<td>" + parseFloat(val.high_income_rate*100).toFixed(0)+"%"+"</td>"
                        + "<td>" + parseFloat(val.low_income_rate*100).toFixed(0)+"%"+"</td>"
                        + "<td>" + parseFloat(val.no_income_rate*100).toFixed(0)+"%"+"</td>"
                    $("#tblbody").append(tablerow);
                });
            }
            $('#example').DataTable({
                aLengthMenu: [
                    [25, 50, 100, 200, -1],
                    [25, 50, 100, 200, "All"]
                ],
            });
        },
        fail: function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        }
    })
    
   
}
