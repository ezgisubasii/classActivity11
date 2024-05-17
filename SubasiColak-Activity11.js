$(document).ready(function () {

    $("a").click(function (event) {
        event.preventDefault();
        var title = $(this).attr("title");        
        getJSON("json_files/"+ title+".json");
    });

});
function getJSON(jsonFileURL) {
    $.ajax({
        url: jsonFileURL,

        dataType: "text",
        success: function (data) {

            var json = $.parseJSON(data);

            $("main > h2").html(json.speakers[0].month + "<br/>" + json.speakers[0].speaker);
            $("main > h1").html(json.speakers[0].title);
            $("main > img").attr("src", json.speakers[0].image);
            $("main > p").html(json.speakers[0].text);
        }
    });
}

