$(function () {
  $.get("/foods").
    done(function (data) {
      console.log("RECEIVING RESPONSE");
      console.log("DATA", data);
      $(data).each(function (index, food) {
        // var $todo = $("<div class='todo'>" + todo.title + "</div>");
        var $food = $("<div class='foody'>" + food.name + "  " + food.yumminess + "</div>");
        $(".foodscon").append($food);
      });
    });

});