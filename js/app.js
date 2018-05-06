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
            "Вы не попались на уловку буквы l!"
        ],
        failure: [
            "Ошибка!",
            "Вас визуально обманули."
        ]
    }, {
        question: "Можно ли динамически менять размер массива? ",
        answers: [
            "Да, можно",
            "Нет, нельзя",
            "Его можно потом расширить",
            "Да,после его заполнения"
        ],
        correctAnswer: 1,
        success: [
            "Поздравляю!",
            "Размер массива не может изменяться"
        ],
        failure: [
            "Ой, студент! Ошибка!",
            "Размер массива определяется при его создании и в дальнейшем не может изменяться."
        ]
    }, {
        question: "Из какой структуры данных сборщик мусора удалит все элементы у которых исчезла последняя ссылка на их ключ в этой структуре?",
        answers: [
            "HashMap",
            "LinkedHashMap",
            "WeakHashMap",
            "IdentityHashMap"
        ],
        correctAnswer: 2,
        success: [
            "Ух-ты!",
            "А ты мастер хэш-функций :)"
        ],
        failure: [
            "Ошибочка!",
            "WeakHashMap, фактически, хранит не пары ключ - значение, а пары слабая ссылка на ключ - значение. Особенность слабых ссылок (WeakReference) состоит в том, что они игнорируются сборщиком мусора, т.е. если на объект-ключ нет других ссылок, он уничтожается"
        ]
    }, {
        question: "Можно ли переопределяя метод изменить его модификатор доступа с package-private на protected?",
        answers: [
            "Да",
            "Нет",
            "Только с условием",
            "В Java-нет"
        ],
        correctAnswer: 0,
        success: [
            "Молодец!",
            "Ты, видимо, не прогуливал лекции"
        ],
        failure: [
            "Как-бы не так!",
            "Так как модификатор protected накладывает меньше ограничений, чем модификатор доступа по умолчанию, то такое переопределение разрешено."
        ]
    }, {
        question: "Как можно уничтожить объект в Java?",
        answers: [
            "Присвоить null всем ссылкам на объект",
            "Вызвать Runtime.getRuntime().gc()",
            "Вызвать метод finalize() у объекта",
            "Этого нельзя сделать вручную"
        ],
        correctAnswer: 3,
        success: [
            "Java- как девушка!",
            "Никогда не знаешь, когда вызовется деструктор =)"
        ],
        failure: [
            "Ошибочка!",
            "Этого нельзя сделать вручную. Только Garbage Collector может уничтожить объект"
        ]
    }, {
        question: "Данные типов со знаком имеют равное количество положительны ненулевых и отрицательных значений.",
        answers: [
            "Истинно",
            "Ложно",
            "В Java равное кол-во",
            "Пропустить"
        ],
        correctAnswer: 1,
        success: [
            "Ты справился!",
            "Видимо, ты помнишь, что отрицательных - больше."
        ],
        failure: [
            "Ой, кто тут типы не знает?",
            "Разность между количеством отрицательных чисел и количеством положительных чисел равна единице (отрицательных чисел больше)."
        ]
    }, {
        question: "Если исходый файл включает в себя все три высокоуровневых элемента, какова их последовательность?",
        answers: [
            "Импорты, декларация пакета, классы",
            "Классы, импорты, декларация пакета",
            "Декларация пакета идёт первой, а порядок импортов и классов не существенен",
            "Декларация пакета, импорты, классы"
        ],
        correctAnswer: 3,
        success: [
            "Умница!",
            "Знаешь структуру файла, поздравляю!"
        ],
        failure: [
            "Ну как так?!",
            "Порядок Декларация пакета, импорты, классы должен быть соблюдён строго"
        ]
    }, {
        question: "Кто создал язык Java?",
        answers: [
            "Джеймс Гослинг",
            "Деннис Ритчи",
            "Бьёрн Страуструп",
            "Никлаус Вирт"
        ],
        correctAnswer: 0,
        success: [
            "Ты прав!",
            "Как его вообще можно не знать? =)"
        ],
        failure: [
            "Ох!",
            "Ты ошибся! Как такое можно не знать? "
        ]
    }, {
        question: "Java – регистрочувствительный язык программирования?",
        answers: [
            "Конечно, да",
            "Нет",
            "Java - точно нет",
            "Пропустить"
        ],
        correctAnswer: 0,
        success: [
            "Поздравляю!",
            "Java такой чувствительный"
        ],
        failure: [
            "Вот-те на!",
            "Java, как и все семейство Си, чувствительный к регистру"
        ]
    }, {
        question: "Java относится к семейству Си-подных языков?",
        answers: [
            "Конечно, да",
            "Нет",
            "Не думаю, что Java Си-подобен",
            "Скорее нет, чем да"
        ],
        correctAnswer: 0,
        success: [
            "Поздравляю!",
            "Как это можно не знать ?)"
        ],
        failure: [
            "Ошибка!",
            "Как тебе только не стыдно?"
        ]
    }]
};


 $(function() {
	 
 $('#btn-start').click(function() {
        $('#intro').fadeOut('fast', function() {
            $('#questions').removeAttr('hidden');
        });
        runQuiz(quiz); 
    });
	
	// Рандом вопросов при первом запуске
    quiz.randomQuestions = shuffleArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    // Управление настройками видиости выбранной кнопки
    $('.radio label').hover(
        function() {
            if (!$(this).children('input[type="radio"]').is(':checked')) {
                $(this).css('background', '#6FC6FF');
            }
        }, function() {
            if (!$(this).children('input[type="radio"]').is(':checked')) {
                $(this).css('background', '#55acee');
            }
        }
    );

    // Клики на кнопки
    $('.radio label').click(function() {
        $('.action-button .btn-next').removeClass('disabled');
        $('.options').css({'font-weight': 'normal', 'font-style': 'normal'});
        $('.radio label').css({'background': '#55acee', 'box-shadow': '0px 5px 0px 0px #3C93D5'});
        $(this).children('input[type="radio"]').prop('checked', true);
        $(this).css({'background': '#55acee', 'box-shadow': '0px 1px 0px 0px #55acee', 'transform': 'translate(0px, 5px)', '-webkit-transform': 'translate(0px, 5px)'});
        $(this).children('.options').css({'font-weight': 'bold', 'font-style': 'italic'});
    });
	
	// Кнопка заного
    $('#questions').on('click', '.btn-reset', function() {
        resetQuiz(quiz);
        runQuiz(quiz);
        // Сбросить и снять флажки переключателей
        $('.radio label').children('input[type="radio"]').prop('checked', false);
        $('.options').css({'font-weight': 'normal', 'font-style': 'normal'});
        $('.radio label').css({'background': '#55acee', 'box-shadow': '0px 5px 0px 0px #3C93D5'});
        // Отключение повторного нажатия кнопки
        $('.action-button .btn-next').addClass('disabled');
    });

    // Клик по кнопке ответа
    $('#questions').on('click', '.btn-next', function() {
        var userAnswer = $('input[name=option]:checked').siblings('.options').text();
        calculateScore(checkAnswer(userAnswer, quiz), quiz);
        failSuccess(quiz, userAnswer);
        // Сбросить для кнопки 
        $('.radio label').children('input[type="radio"]').prop('checked', false);
        $('.options').css({'font-weight': 'normal', 'font-style': 'normal'});
        $('.radio label').css({'background': '#55acee', 'box-shadow': '0px 5px 0px 0px #3C93D5'});
        // Отключить кнопку отправки еще раз
        $('.action-button .btn-next').addClass('disabled');
    });

    // Нажать кнопку продолжить
    $(".answer-success, .answer-failure").on('click', '.continue', function() {
        $('.answer-success, .answer-failure').attr('hidden', true);
        // увеличили номер вопроса
        quiz.questionNumber += 1;
        runQuiz(quiz);
    });

    // кнопка начать заного
    $('#finish').on('click', '.btn-reset', function() {
        resetQuiz(quiz);
        runQuiz(quiz);
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

// Вернет правду или ложь на ответ пользователя
function checkAnswer(userAnswer, quiz) {
    // верный ответ
    if (userAnswer === quiz.questions[quiz.randomQuestions[quiz.questionNumber]].answers[quiz.questions[quiz.randomQuestions[quiz.questionNumber]].correctAnswer]) {
        return true;
    }
    else {
        // иначе
        $(".desc-wrong-answer").html("Правильный ответ это: <strong>" + quiz.questions[quiz.randomQuestions[quiz.questionNumber]].answers[quiz.questions[quiz.randomQuestions[quiz.questionNumber]].correctAnswer] + "</strong>.");
        return false;
    }
}

// Подсчет, сколько верных и неверных ответов
function calculateScore(answerResult, quiz) {
    if (answerResult) {
        quiz.correct += 1;
    } else {
        quiz.incorrect += 1;
    }
}

// Генерирует уникальные рандомные числа от 0 до 10
function shuffleArr(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}


