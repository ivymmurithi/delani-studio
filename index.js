// Hover
$(document).ready(function(){
    $('#design').hover(
        function() {
            $('#design').text('Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing. Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.')
        }
    )
    $('#development').hover(
        function() {
            $('#development').text('All engineers are fluent in the latest enterprise, mobile and web development technologies. They collaborate with your team to write, and improve code on a daily basis, using proven practices such as test-driven development and pair programming.')
        }
    )
     $('#projectmngt').hover(
        function() {
            $('#projectmngt').text('Planning and development is iterative. Because we are constantly coding and testing, the products we build are always ready to go live. This iterative process allows for changes as business requirements evolve.')
        }
    )
});
// Form Validation and Submission
$('#form').submit(function(event) {
    let fname = $('#fname').val();
    let email = $('#email').val();
    let message = $('#message').val();
    if (!fname || !email || !message) {
    alert("Fill in the form"); 
    event.preventDefault();
    } 
});
