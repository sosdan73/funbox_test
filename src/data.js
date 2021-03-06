export const products = [
    {
        id: 0,
        fill: 'с фуа-гра',
        amount: 10,
        miceAmount: 1,
        happyCustomer: false,
        weight: '0,5',
        description: 'Печень утки разварная с артишоками.',
        avaliable: true
    },
    {
        id: 1,
        fill: 'c рыбой',
        amount: 40,
        miceAmount: 2,
        happyCustomer: false,
        weight: '2',
        description: 'Головы щуки с чесноком да свежайшая семгушка.',
        avaliable: true
    },
    {
        id: 2,
        fill: 'с курой',
        amount: 100,
        miceAmount: 5,
        happyCustomer: true,
        weight: '5',
        description: 'Филе из цыплятя с трюфелями в бульоне.',
        avaliable: false
    }
];

export const questions = [
    {
        id: 0,
        question: `Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения пользователя, менеджера проекта, дизайнера, верстальщика, клиентского программиста, серверного программиста.`,
        answer: `Пользователь будет воспринимать верстку плохо в том случае, если верстающий сайт человек некорректно прописывает стили для элементов или неоптимизированно пишет код (что, в том числе, влияет на скорость загрузки сайта). Менеджер проекта будет недоволен плохим мнением пользователей (вероятно, больше остальных членов команды разработки), а значит и вышенаписанным, а также сроками выполнения работы (если работа не выполнена к нужному времени). Дизайнеру не понравится, если верстальщик неправильно воссоздаст его макет. У клиентского и серверного программистов будут претензии к плохой архитектуре кода или его нечитабельности, отсутствию комментариев (ведь им с этим кодом надо работать). А хорошая верстка, в свою очередь, не будет в себе содержать ничего из вышенаписанного.`
    },
    {
        id: 1,
        question: `Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.`,
        answer: `Не так давно я узнал о методологии разработки БЭМ: на мой взгляд, она помогает писать стили без путаницы, каким бы большим и, в дальнейшем, сложным не был бы проект. Также целесообразным является использование фреймворков (React, например), упрощающих разработку и разбивающих большое приложение на небольшие компоненты, с которыми проще работать.`
    },
    {
        id: 2,
        question: `Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.`,
        answer: `При верстке адаптивных сайтов правильным решением будет использование css-фичи @media для переключения свойств элементов в зависимости от размера экрана. В своих проектах я всегда им пользуюсь, чтобы юзер мог одинаково хорошо воспринимать предоставленные ему веб-приложением возможности как на компьютере, так и на смартфоне. Проверка работоспособности реализованного адаптивного приложения может быть осуществлена с помощью возможностей браузера или выкладывания сайта на тестовый хостинг.`
    },
    {
        id: 3,
        question: `Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.`,
        answer: `Использование "инструментов разработчика" в хроме, логгирование в функциях и отдельных участках кода на JS. Если дело касается работы с Vue.js или React, то в работе существенно помогают соответствующие расширения браузера, отслеживающие свойственные для данных фреймворков фичи (вроде жизненных циклов, хранилища данных и т.д.)`
    },
    {
        id: 4,
        question: `Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?`,
        answer: `К сожалению, подобных проблем у меня на практике не было. Предполагаю, что с помощью инструментов разработчика можно проанализировать, в каких отдельных участках кода возникает та или иная проблема, поизменять изначальные параметры и рано или поздно наткнуться на источник проблемы, понимая, какие свойства CSS для данных браузеров могут работать некорректно.`
    },
    {
        id: 5,
        question: `Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?`,
        answer: `Для максимально эффективной работы над проектом команда должна работать сообща, поэтому я пойду с вопросами к дизайнеру макета. При отсутствии возможности у последнего выйти на связь и скором дедлайне проекта мне придется посоветоваться с другими товарищами по команде (опять же, если такая возможность будет) и принять оптимальное решение по реализации.`
    },
    {
        id: 6,
        question: `Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSS- верстка или и то, и другое? Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?`,
        answer: `Основы верстки я выучил на сайте codeacademy.com, работу на JS и Vue изучил с помощью онлайн-курсов на сайте udemy.com; При работе всегда приходится сталкиваться с новыми задачами, которые решаются с помощью гуглинга. Самые частые ссылки, по которым я узнаю что-то новое, это сайты learn.javascript.ru, html5book.ru, developer.mozilla.org, habr.com, w3school.com и, конечно же, stackoverflow.com; помимо изучения веба, меня интересует работа на питоне (недавно записался на курс по анализу данных, чтобы подкрепить мой интерес к данной теме).`
    },
    {
        id: 7,
        question: `Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.`,
        answer: `Уже около полугода я работаю в небольшой стартап-фирме под названием "Прожект". Это дизайн-студия, в числе услуг которой есть создание сайтов (в основном за разработку которых я и отвечаю). Последний проект, над которым мы работаем уже несколько недель – это сайт для американского фитнес-клуба <a href="https://stabillefitness.com" style="text-decoration:none;color:#bccf00" target="_blank">Stabille fitness</a>. Сайт нашей студии, который также написан мной и пока еще не завершен, находится <a href="https://прожект.рф" style="text-decoration:none;color:#bccf00" target="_blank">здесь</a>.`
    }
]