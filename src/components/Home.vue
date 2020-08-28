<template>
    <div class="home">
        <h1 class="header">Тестовое задание от Funbox</h1>
        <h2 class="developer">Выполнил: Сосинский Даниил</h2>
        <h2 class="epilogue">Эпилог:</h2>
        <p class="epilogue_info">Прочитав информацию о вакансии младшего фронтенд-разработчика, я заинтересовался компанией и решил узнать о ней немного побольше. После проведенного мной "иследования" я понял, что Funbox – это замечательное место, в которое я очень хотел бы попасть. Поэтому я решил обратить ваше внимание на свою работу, подойдя к ее решению не совсем стандартно: по вкладкам ниже вы можете перейти на страницу моих ответов на ваши вопросы из первого задания, после чего просмотреть второе задание, нажав на соответствующую ссылку.</p>
        <p class="epilogue_info">Хочу обратить внимание, что для соблюдения макета я не вставлял ссылки переходов на другие страницы веб-приложения во втором задании, поэтому для возвращения к одной из страниц придется нажать на кнопку "Назад" брузера. Надеюсь, что вам понравится моя работа. Приятного просмотра!</p>
        <p class="epilogue_info">P.S. ссылка на мой гитхаб, в котором хранятся исходники работы, прикреплены к отклику на данную вакансию.</p>
        <router-link class="link" to="/questions">Ссылка на ответы первого задания</router-link>
        <router-link class="link" to="/test">Ссылка на второе задание</router-link>
    </div>
</template>

<style lang="scss" scoped>
    .home {
        width: 75%;
        margin: auto;
        font-family: 'Exo2.0';
        .developer {
            text-align: end;
        }
        .epilogue_info, .link {
            font-weight: 600;
        }
        .link {
            text-decoration: none;
            color: #bccf00;
            display: block;
            margin-top: 10px;
            font-weight: 800;
        }
        .link:hover {
            color: #023200;
        }
    }
    @media (min-width: 768px) {
        .developer, .epilogue {
            font-size: 1.5rem;
        }
        .epilogue_info, .link {
            font-size: 1.2rem;
        }
        .link {
            text-align: center;
        }
    }
    @media (max-width: 767px) {
        .developer, .epilogue {
            font-size: 1.2rem;
        }
        .epilogue_info, .link {
            font-size: 1rem;
        }
    }
</style>