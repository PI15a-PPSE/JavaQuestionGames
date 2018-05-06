var quiz = {
    // порядок вопросов в игре
    randomQuestions: [],
    // номера вопрсоов 0, 1, 2, 3...
    questionNumber: 0,
    correct: 0,
    incorrect: 0,
    questions: [{
        question: "Скомпилируется ли данный код и если да — то каким будет вывод?\nlong year = 201l;\nSystem.out.print(year);  ",
        answers: [
            "201",
            "201l",
            "Ошибка компиляции",
            "Адрес это переменной"
        ],
        correctAnswer: 0,
        success: [
            "Поздравляем!",
            "Кажется, здесь все понятно"
        ],
        failure: [
            "Ошибка!",
            "Вас визуально обманули."
        ]
    }, {
        question: "Скомпилируется ли данный код и если да — то каким будет вывод?\nint[][] array = {{1, 2, 3}, {0, 0, 0,},};\nSystem.out.println(Arrays.deepToString(array)); ",
        answers: [
            "Ошибка компиляции",
            "[[1, 2, 3], [0, 0, 0]]",
            "[[1, 2, 3], [0, 0, 0],[0]]",
            "[[1, 2, 3], [0, 0, 0],null]"
        ],
        correctAnswer: 1,
        success: [
            "Знаток Джавы, браво!",
            "Лишняя запятая тебя не остановила."
        ],
        failure: [
            "Ты Junior, верно?",
            "Эх,эта запятая сбила тебя с толку.Компилятор просто игнорирует одну лишнюю запятую в конце массива. Причём именно одну — две подряд уже вызовут ошибку компиляции."
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
        question: "What piece of fencing advice did Jon Snow give to Arya Stark? \"Stick them with the…\"",
        answers: [
            "\"…Prickly end\"",
            "\"…Sharp end\"",
            "\"…Futtocks End\"",
            "\"…Pointy end\""
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
            "If you think this has a happy ending, you haven’t been paying attention."
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
	
	//Вернуть вопрос на основе текущего номера вопроса
	function constructQuestion(quiz) {
    return quiz.questions[quiz.randomQuestions[quiz.questionNumber]].question;
}

	function runQuiz(quiz) {

    // Смотрим что пользователь снова нажал кнопку воспроизведения на экране завершения
    if (quiz.questionNumber === 0) {
        $('#finish').attr('hidden', true);
    }
    // Проверяем, игрок на последнем вопросе?(9-й)
    if (quiz.questionNumber === 10) {
            //Показываем финальный экран
            $('#question-main-content').fadeOut('fast', function() {
                $('#finish').removeAttr('hidden');
            });
            // Показываем финальные очки
            $('.finalScore').text(quiz.correct);
            // Отображаем комментарии в зависимости от кол-во правильных ответов
            if (quiz.correct < 5) {
                $('.praise-text').text('Хмм, похоже ты плохо знаешь ');
            } else if (quiz.correct < 8) {
                $('.praise-text').text('Работа неплохая, но можно лучше');
            } else {
                $('.praise-text').text('Просто невероятный результат');
            }
    } else {
        // Бновляем номер вопроса в заголовке
        $('#current').text(quiz.questionNumber + 1);
        // Показываем главный экран вопроса
        $('#question-main-content').fadeIn('fast');
        // Вставляем текст вопроса
        $('.questionText').text(constructQuestion(quiz));
        //Заполняем варианты ответов
        $('#questions').find('.radio').each(function(index, element) {
            $(this).find('span.options').text(quiz.questions[quiz.randomQuestions[quiz.questionNumber]].answers[index]);
        });
    }
    // показываем в прогрессбаре верный или нет ответ
    $('.bg-success').text(quiz.correct);
    $('.bg-danger').text(quiz.incorrect);
    // Если ответ был верный, то увеличиваем прогресс бар, если нет, тоже...
    $('.bg-success').css('width', quiz.correct * 10 + "%");
    $('.bg-danger').css('width', quiz.incorrect * 10 + "%");
}

// Управление экраном при успешном/неуспешном выполнении
function failSuccess(quiz, userAnswer) {
    if (checkAnswer(userAnswer, quiz)) {
        // успех
        $('#question-main-content').fadeOut('fast', function() {
            $('.answer-success h2').text(quiz.questions[quiz.randomQuestions[quiz.questionNumber]].success[0]);
            $('.answer-success p').text(quiz.questions[quiz.randomQuestions[quiz.questionNumber]].success[1]);
            $('.answer-success').removeAttr('hidden');
        });
    } else {
        // ошибка
        $('#question-main-content').fadeOut('fast', function() {
            $('.answer-failure h2').text(quiz.questions[quiz.randomQuestions[quiz.questionNumber]].failure[0]);
            $('.desc-fail-message').text(quiz.questions[quiz.randomQuestions[quiz.questionNumber]].failure[1]);
            $('.answer-failure').removeAttr('hidden');
        });
    }
}

// Начать заного
function resetQuiz(quiz) {
    quiz.randomQuestions = shuffleArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    quiz.questionNumber = 0;
    quiz.correct = 0;
    quiz.incorrect = 0;
}