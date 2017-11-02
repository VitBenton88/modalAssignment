$(document).ready(function() {

            // assign the modal
            var modal = $('.modal');

            // assign the button that opens the modal
            var modalOpenBtn = $("#modalOpenBtn");

            // assign the button that opens the modal
            var modalCloseBtn = $("#modalCloseBtn");

            // When the user clicks on the open button, open the modal 
            modalOpenBtn.click(function(){
            	modal.css("display", "initial");
            });

            // When the user clicks on the close button, close the modal 
            modalCloseBtn.click(function(){
            	modal.css("display", "none");
            });

        });