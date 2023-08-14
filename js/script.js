console.log("Link and Ready");

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  $(document).ready(function() {
    $("#cta-button").click(function() {
      $(".modal").fadeIn();
    });
  
    $(".close, .modal").click(function() {
      $(".modal").fadeOut();
    });
  
    $(".modal-content").click(function(event) {
      event.stopPropagation();
    });
  });
  
// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
      document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

// Scroll to the top when the button is clicked
document.getElementById("scrollToTopBtn").addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
