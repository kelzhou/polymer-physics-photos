$(document).ready(function(){
	selected = 'wrapper';

	$("input[type=file]").change(function(){
	   if (this.files && this.files[0]) {
	        var reader = new FileReader();
	        reader.onload = function (e) {
	            $('#image').attr('src', e.target.result);
	        }
	        reader.readAsDataURL(this.files[0]);
	    }
	});

    $('input[type=radio][name=type]').change(function() {
    	var choice = $('input[type=radio]:checked').val();
        addPhysics(choice);
    });

    function addPhysics(choice){
        if (choice == 'bubble') {
            $("#image").unwrap('<physics-wrapper></physics-wrapper>');
            $("#image").wrap('<physics-bubble></physics-bubble>');
        }
        else if (choice == 'wrapper') {
            $("#image").unwrap('<physics-bubble></physics-bubble>');
            $("#image").wrap('<physics-wrapper></physics-wrapper>');
        }	
    };

	$("#play").on("click", function(){
    	var choice = $('input[type=radio]:checked').val();
    	if(choice != selected){
			addPhysics(choice);
		}
		else{
			$("img").wrap('<physics-wrapper></physics-wrapper>');
		}
		$("#play").addClass("hide");
		$("#replay").removeClass("hide");
	});
});