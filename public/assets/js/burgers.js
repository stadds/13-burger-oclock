$(function () {

    $(".create-burger").on("submit", function (event) {
        event.preventDefault();

        const newBurger = {
            name: $("#burger-txt").val().trim()
        }

        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {

            console.log("created new burger");

            location.reload();
        });

    });

    $(".devour-btn").on("click", function (event) {

        let id = $(this).data("id");

        console.log(`burger ${id} pressed.`);

        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(function () {
            console.log(`burger ${id} was devoured!!`);
            location.reload();
        })

    });

    $('textarea[name="name"]').keyup(function () {
        let maxCount = $(this).attr("maxLength");

        let charUsed = $(this).val().length;

        let charLeft = maxCount - charUsed;

        $("#char-left").text(`${charLeft} / ${maxCount}`);

        if (charLeft < 16) {
            $("#char-left").removeClass("text-muted");
            $("#char-left").addClass("char-warn");
        } else {
            $("#char-left").removeClass("char-warn");
            $("#char-left").addClass("text-muted")
        }
    });

});