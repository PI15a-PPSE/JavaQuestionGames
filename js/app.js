 $(function() {
 $('#btn-start').click(function() {
        $('#intro').fadeOut('fast', function() {
            $('#questions').removeAttr('hidden');
        });
       // runQuiz(quiz); 
    });
	
	});