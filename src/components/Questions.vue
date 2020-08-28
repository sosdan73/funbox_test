<template>
    <div class="questions">
        <h1 class="header">Ответы на вопросы первого задания</h1>
        <ol class="answers__list">
            <li
                class="answer"
                :key="q.id"
                v-for="q in questions">
                {{ q.question }}<br><br>– <span v-html="q.answer"></span>
            </li>
        </ol>
        <router-link class="link" to="/">Ссылка на домашнюю страницу</router-link>
        <router-link class="link" to="/test">Ссылка на второе задание</router-link>
    </div>
</template>

<script>
    import { questions } from '../data'
    export default {
        data() {
            return {
                questions
            }
        },
    }
</script>

<style lang="scss" scoped>
    .questions {
        width: 75%;
        margin: auto;
        font-family: 'Exo2.0';
        margin-bottom: 100px;
        .answer {
            font-weight: 700;
            margin-bottom: 30px;
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
        .answer, .link {
            font-size: 1.2rem;
        }
        .link {
            text-align: center;
        }
    }
    @media (max-width: 767px) {
        .answer, .link {
            font-size: 1rem;
        }
    }
</style>