$(function () {

    $(".create-burger").on("submit",function(event){
        event.preventDefault();

        const newBurger = {
            name: $("#burger-txt").val().trim()
        }

        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then( function() {

            console.log("created new burger");

            location.reload();
        });

    });

    $(".devour-btn").on("click", function(event){

        let id = $(this).data("id");

        console.log(`burger ${id} pressed.`);

        $.ajax("/api/burgers/" +id,{
            type: "PUT"
        }).then( function() {
            console.log(`burger ${id} was devoured!!`);
            location.reload();
        })

    });

});