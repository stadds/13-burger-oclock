$(function () {

    $(".create-burger").on("submit",function(event){
        event.preventDefault();

        const newBurger = {
            name: $("#burger-txt").val().trim()
        }

        $.ajax("/api/cats", {
            type: "POST",
            data: newBurger
        }).then( function (){

            console.log("created new burger");

            location.reload();
        });

    });

});