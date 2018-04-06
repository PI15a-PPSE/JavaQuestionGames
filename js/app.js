 
 
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
    }, {
        question: "What's the name of the explosive that gave the Lannisters the edge in the Battle of Blackwater?",
        answers: [
            "Wildfire",
            "Dragonfire",
            "Godsfire",
            "Pantsonfire"
        ],
        correctAnswer: 0,
        success: [
            "Boo-ya!",
            "By what right does the wolf judge the lion?"
        ],
        failure: [
            "Eeeks!",
            "Nothing burns like the cold."
        ]
    }, {
        question: "How is \"The Queen Of Thorns\" more commonly known?",
        answers: [
            "Cersei Lannister",
            "Margaery Tyrell",
            "Olenna Tyrell",
            "E Jarvis Thribb"
        ],
        correctAnswer: 2,
        success: [
            "Ooh-la-la!",
            "Valar Morghulis!"
        ],
        failure: [
            "Neener-neener!",
            "A bruise is a lesson... and each lesson makes us better."
        ]
    }, {
        question: "What is Pycelle's official title in the Red Keep?",
        answers: [
            "Master of Coin",
            "Games Maester",
            "Lord Commander of the Kingsguard",
            "Grand Maester"
        ],
        correctAnswer: 3,
        success: [
            "Sis boom bah!",
            "Fire cannot kill a dragon."
        ],
        failure: [
            "Tchah!",
            "The man who fears losing has already lost."
        ]
    }, {
        question: "Which Lannister song signalled doom at the Red Wedding?",
        answers: [
            "The Rains Of Castermere",
            "A Golden Crown",
            "The Assassin's Dagger",
            "Tales Of Topographic Oceans"
        ],
        correctAnswer: 0,
        success: [
            "Ride like the wind!",
            "The only time a man can be brave is when he's afraid."
        ],
        failure: [
            "Bam!",
            "There is only one god, and his name is Death."
        ]
    }, {
        question: "What piece of fencing advice did Jon Snow give to Arya Stark? \"Stick them with the�\"",
        answers: [
            "\"�Prickly end\"",
            "\"�Sharp end\"",
            "\"�Futtocks End\"",
            "\"�Pointy end\""
        ],
        correctAnswer: 3,
        success: [
            "Whoop-de-doo!",
            "If we die, we die but first we'll live."
        ],
        failure: [
            "Pfffft!",
            "What we don't know is what usually gets us killed."
        ]
    }, {
        question: "Who said, \"Some day I'm gonna put a sword through your eye and out the back of your skull\"?",
        answers: [
            "Theon Greyjoy",
            "Shae",
            "Arya Stark",
            "The Mountain"
        ],
        correctAnswer: 2,
        success: [
            "Ludicrous Speed!",
            "Chaos isn't a pit. Chaos is a ladder."
        ],
        failure: [
            "Uh-oh!",
            "Nothing isn't better or worse than anything. Nothing is just nothing."
        ]
    }, {
        question: "Who was burned alive on Drogo's funeral pyre?",
        answers: [
            "Khal Drogo",
            "Mirri Maz Duur",
            "Maris Piper",
            "Septa Mordane"
        ],
        correctAnswer: 1,
        success: [
            "Off the charts!",
            "A dragon is not a slave."
        ],
        failure: [
            "Yikes!",
            "Any man who must say 'I am the king' is no true king."
        ]
    }, {
        question: "Who said, \"If you ever call me sister again, I'll have you strangled in your sleep\"?",
        answers: [
            "Annie Lennox",
            "Meg White",
            "Catelyn Stark",
            "Cersei Lannister"
        ],
        correctAnswer: 3,
        success: [
            "Yo-ho-ho!",
            "A very small man can cast a very large shadow."
        ],
        failure: [
            "Zoinks!",
            "If you think this has a happy ending, you haven�t been paying attention."
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