 
 
var quiz = {
    // ������� �������� � ����
    randomQuestions: [],
    // ������ �������� 0, 1, 2, 3...
    questionNumber: 0,
    correct: 0,
    incorrect: 0,
    questions: [{
        question: "�������������� �� ������ ��� � ���� �� � �� ����� ����� �����?\nlong year = 201l;\nSystem.out.print(year);  ",
        answers: [
            "201",
            "201l",
            "������ ����������",
            "����� ��� ����������"
        ],
        correctAnswer: 0,
        success: [
            "�����������!",
            "�������, ����� ��� �������"
        ],
        failure: [
            "������!",
            "��� ��������� ��������."
        ]
    }, {
        question: "�������������� �� ������ ��� � ���� �� � �� ����� ����� �����?\nint[][] array = {{1, 2, 3}, {0, 0, 0,},};\nSystem.out.println(Arrays.deepToString(array)); ",
        answers: [
            "������ ����������",
            "[[1, 2, 3], [0, 0, 0]]",
            "[[1, 2, 3], [0, 0, 0],[0]]",
            "[[1, 2, 3], [0, 0, 0],null]"
        ],
        correctAnswer: 1,
        success: [
            "������ �����, �����!",
            "������ ������� ���� �� ����������."
        ],
        failure: [
            "�� Junior, �����?",
            "��,��� ������� ����� ���� � �����.���������� ������ ���������� ���� ������ ������� � ����� �������. ������ ������ ���� � ��� ������ ��� ������� ������ ����������."
        ]
    
    }]
};

 
 
 $(function() {
 $('#btn-start').click(function() {
        $('#intro').fadeOut('fast', function() {
            $('#questions').removeAttr('hidden');
        });
       // runQuiz(quiz); 
    });
	
	});
	
	function runQuiz(quiz) {

    // ������� ��� ������������ ����� ����� ������ ��������������� �� ������ ����������
    if (quiz.questionNumber === 0) {
        $('#finish').attr('hidden', true);
    }
    // ���������, ����� �� ��������� �������?(9-�)
    if (quiz.questionNumber === 10) {
            //���������� ��������� �����
            $('#question-main-content').fadeOut('fast', function() {
                $('#finish').removeAttr('hidden');
            });
            // ���������� ��������� ����
            $('.finalScore').text(quiz.correct);
            // ���������� ����������� � ����������� �� ���-�� ���������� �������
            if (quiz.correct < 5) {
                $('.praise-text').text('���, ������ �� ����� ������ ');
            } else if (quiz.correct < 8) {
                $('.praise-text').text('������ ��������, �� ����� �����');
            } else {
                $('.praise-text').text('������ ����������� ���������');
            }
    } else {
        // �������� ����� ������� � ���������
        $('#current').text(quiz.questionNumber + 1);
        // ���������� ������� ����� �������
        $('#question-main-content').fadeIn('fast');
        // ��������� ����� �������
        $('.questionText').text(constructQuestion(quiz));
        //��������� �������� �������
        $('#questions').find('.radio').each(function(index, element) {
            $(this).find('span.options').text(quiz.questions[quiz.randomQuestions[quiz.questionNumber]].answers[index]);
        });
    }
    // ���������� � ������������ ������ ��� ��� �����
    $('.bg-success').text(quiz.correct);
    $('.bg-danger').text(quiz.incorrect);
    // ���� ����� ��� ������, �� ����������� �������� ���, ���� ���, ����...
    $('.bg-success').css('width', quiz.correct * 10 + "%");
    $('.bg-danger').css('width', quiz.incorrect * 10 + "%");
}