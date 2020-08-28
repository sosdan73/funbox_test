<template>
    <div class="grid">
        <card
            v-for="product in products"
            :key="product.id"
            :fill="product.fill"
            :amount="product.amount"
            :miceAmount="product.miceAmount"
            :happyCustomer="product.happyCustomer"
            :weight="product.weight"
            :description="product.description"
            :avaliable="product.avaliable"/>
    </div>
</template>

<script>
import Card from './Card'
import { products } from '../data'
    export default {
        data() {
            return {
                products
            }
        },
        components: {
            card: Card
        }
    }
</script>

<style lang="scss" scoped>
    @media (min-width: 0) {
        .grid {
            grid-template-columns: 280px;
        }
    }
    @media (min-width: 768px) {
        .grid {
            grid-template-columns: repeat(2, 300px);
        }
    }
    @media (min-width: 1200px) {
        .grid {
            grid-template-columns: repeat(3, 320px);
        }
    }
    .grid {
        display: grid;
        justify-content: space-around;
        row-gap: 40px;

        margin: auto;
        margin-top: 25px;
        width: 87.5%;
    }
</style>