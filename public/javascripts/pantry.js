$(function () {
  $.get("/").
    done(function (data) {
      console.log("RECEIVING RESPONSE");
      console.log("DATA", data);
    })

  $.get("/foods").
    done(function (data) {
      console.log("RECEIVING RESPONSE");
      console.log("DATA", data);
      $(data).each(function (index, food) {
        console.log("RECEIVING RESPONSE");
        console.log("DATA", data);
        // var $todo = $("<div class='todo'>" + todo.title + "</div>");
        var $foods = $("<div class='foody'>" + foods.title + "  " + foods.description + "</div>");
        $(".foodscon").append($todo);
      });
    });

  //   $("#newTodo").on("submit", function (e) {
  //     var $this = $(this);
  //     var formData = $this.serialize();
  //     console.log(formData);
  //     $.post("/todos", formData).
  //     done(function (data) {
  //       console.log("Success!");
  //     });
  //   });
});