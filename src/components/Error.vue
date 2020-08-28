<template>
    <div class="error">
        <h1 class="header">Это не та страница, которую вы ищете...</h1>
        <h2 class="subheader">Но вы можете перейти на существующую страницу!</h2>
        <router-link class="link" to="/">Ссылка на домашнюю страницу</router-link>
        <router-link class="link" to="/questions">Ссылка на ответы первого задания</router-link>
        <router-link class="link" to="/test">Ссылка на второе задание</router-link>
    </div>
</template>

<style lang="scss" scoped>
    .error {
        width: 75%;
        margin: auto;
        font-family: 'Exo2.0';
        .subheader {
            text-align: center;
            margin-bottom: 50px;
        }
        .link {
            font-weight: 600;
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
        .subheader {
            font-size: 1.5rem;
        }.link {
            font-size: 1rem;
            text-align: center;
        }
    }
    @media (max-width: 767px) {
        .subheader {
            font-size: 1.2rem;
        }
        .link {
            font-size: 0.8rem;
        }
    }
</style>