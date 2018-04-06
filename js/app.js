 
 
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