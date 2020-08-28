<template>
    <div class="container">
        <div
            class="card"
            :style="{borderColor: currentColor, cursor: avaliable ? 'pointer' : 'default'}"
            @mouseenter="hover"
            @mouseleave="unhover"
            @click="chooseProduct">
            <div
                class="corner"
                :style="{background: `linear-gradient(to bottom right, transparent, transparent 31px, ${currentColor} 31px, ${currentColor} 34px, white 34px, white 100%)`}">
            </div>
            <div v-if="!avaliable" class="upheader_overlay overlay"></div>
            <div class="upheader">
                <p
                    v-if="active && hovered"
                    :style="{color: currentColor}">
                    Котэ не одобряет?
                </p>
                <p v-else>Сказочное заморское явство</p>
            </div>
            <div v-if="!avaliable" class="content_overlay overlay"></div>
            <div class="content">
                <h2 class="header">Нямушка</h2>
                <h3 class="subheader">{{ fill }}</h3>
                <p class="info">
                    <strong>{{ amount }}</strong> порций
                </p>
                <p class="info">
                    <strong v-if="miceAmount > 1">{{ miceAmount }}</strong> мышей в подарок
                </p>
                <p class="info" v-if="happyCustomer">Заказчик доволен</p>
                <div class="circle" :style="{backgroundColor: currentColor}">
                    <span class="circle__number">{{ weight }}</span>
                    <span class="cirlce__kg">кг</span>
                </div>
            </div>
        </div>
        <p
            v-if="!avaliable"
            :style="{ color: colors.yellow }"
            class="description">
            Печалька, {{fill}} закончился.
        </p>
        <p
            v-if="avaliable && active"
            class="description">
            {{ description }}
        </p>
        <p
            v-if="avaliable && !active"
            class="description">
            Чего сидишь? Порадуй котэ, <span class="product_buy" :style="{ color: currentColor, borderColor: currentColor }" @mouseenter="hover" @mouseleave="unhover" @click="chooseProduct">купи.</span>
        </p>
    </div>
</template>

<script>
    export default {
        props: [
            'fill',
            'amount',
            'miceAmount',
            'happyCustomer',
            'weight',
            'description',
            'avaliable'
        ],
        data() {
            return {
                active: false,
                hovered: false,
                currentColor: '#1698d9',
                colors: {
                    blue: '#1698d9',
                    blueHovered: '#2ea8e6',
                    pink: '#d91667',
                    pinkHovered: '#e62e7a',
                    grey: '#b3b3b3',
                    yellow: '#ffff66'
                }
            }
        },
        methods: {
            changeCurrentColor(color) {
                this.currentColor = this.colors[color]
            },
            getColor() {
                for (let i in this.colors) {
                    if (this.colors[i] == this.currentColor) {
                        return i
                    }
                }
            },
            hover() {
                if (this.avaliable) {
                    this.hovered = true;
                    let color = this.getColor() + 'Hovered';
                    this.currentColor = this.colors[color]
                }
            },
            unhover() {
                if (this.avaliable) {
                    this.hovered = false;
                    let color = this.getColor();
                    color = color.substring(0, color.length - 7);
                    this.currentColor = this.colors[color]
                }
            },
            chooseProduct(e) {
                if (this.avaliable) {
                    console.log();
                    this.active = !this.active;
                    if (e.target.classList.contains('product_buy')) {
                        this.hovered = false;
                        this.currentColor = this.active ? this.colors['pink'] : this.colors['blue']
                    } else {
                        this.currentColor = this.active ? this.colors['pinkHovered'] : this.colors['blueHovered']
                    }
                    
                }
            }
        },
        created() {
            if (!this.avaliable) {
                this.currentColor = this.colors['grey']
            }
        },
    }
</script>

<style lang="scss" scoped>
    $size: 45px;
    .card {
        font-family: 'Trebuchet MS';
        position: relative;
        height: 480px;

        .corner {
            position: absolute;
            top: 0;
            width: $size;
            height: $size;
            // background: linear-gradient(to bottom right, transparent, transparent 31px,
            // pink 31px, pink 34px, white 34px, white 100%);
        }
        .upheader, .upheader_overlay {
            height: $size;
            width: calc(100% - 45px - 3px);
            position: absolute;
            top: 0;
            left: $size;
            background-color: #fff;
            border-top: 3px solid;
            border-right: 3px solid;
            border-top-right-radius: 10px;
            border-color: inherit;
            p {
                position: relative;
                top: 6px;
                left: 5px;
                font-size: 1rem;
                color: #666;
            }
        }
        .content, .content_overlay {
            position: absolute;
            top: 45px;

            background-color: #fff;
            background-image: url(../assets/images/cat.png);
            background-repeat: no-repeat;

            height: 435px;
            width: calc(100% - 6px);

            border: 3px solid;
            border-top: none;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            border-color: inherit;

            h2, h3, p {
                margin: 0;
                margin-left: 45px;
            }
            .header {
                font-size: 3rem;
                margin-bottom: 5px;
            }
            .subheader {
                font-size: 1.5rem;
                margin-bottom: 16px;
            }
            .info {
                font-size: calc(14rem / 16);
                color: #666;
            }
            .circle {
                width: 80px;
                height: 80px;
                border-radius: 100%;
                color: #fff;

                position: absolute;
                z-index: 200;
                bottom: 12px;
                right: 12px;

                display: grid;
                align-content: center;
                justify-items: center;

                .circle__number {
                    font-size: 2.625rem;
                }
                .circle__kg {
                    font-size: 1.375rem;
                }
            }
        }
        .overlay {
            z-index: 100;
            background-color: #ffffff80;
            border: none;
            background-image: none;
        }
    }
    .description {
        color: #fff;
        text-align: center;
        font-size: 1rem;
        cursor: default;
        .product_buy {
            border-bottom: 1px dashed;
            cursor: pointer;
        }
    }
    @media (max-width: 767px) {
        .content {
            background-size: 120% 75%;
            background-position: 60% 170%;
        }
    }
    @media (min-width: 768px) {
        .content {
            background-size: 120% 85%;
            background-position: 60% 250%;
        }
    }
</style>