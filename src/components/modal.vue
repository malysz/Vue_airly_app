<template>
    <div class="outerWrapper">
        <div class="innerWrapper">
            <div class="measurements">
                <h1 class="city">{{ city }}</h1>
                <h2 class="street">ul. {{ street }}</h2>
                <p class="measurement">Polution level: {{ level }}</p>
                <p class="measurement">PM2,5: {{ pm25 }}</p>
                <p class="measurement">PM10: {{ pm10 }}</p>
            </div>
        </div>
        <div class="close" @click="$emit('closeModal')">X</div>
    </div>
</template>

<script>
    export default {
        name: "modal",
        props:{
            item:{
                type: Object,
                required: true
            }
        },
        data(){
            return{
                city: null,
                street: null,
                level: null,
                pm25: null,
                pm10: null
            }
        },
        mounted(){
            this.city = this.item.city;
            this.street = this.item.street;
            this.level = this.item.level;
            this.pm25 = parseFloat(this.item.pm25/25*100).toFixed(2) + '%';
            this.pm10 = parseFloat(this.item.pm10/25*100).toFixed(2) + '%';
        }
    }
</script>

<style scoped>
    .outerWrapper{
        background-color: #262626;
        max-width: 35%;
        height: 50%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        position: fixed;
        box-shadow: 0 30px 30px -10px rgba(0,0,0,.3);
    }
    .close{
        position: absolute;
        width: 30px;
        height: 30px;
        padding: 30px;
        right: 0;
        top: 0;
        cursor: pointer;
        color: #B2B2B2;
        font-weight: bold;

        &::before, &::after{
            position: absolute;
            content: '';
            width: 20px;
            height: 2px;
            top: 30px;
            right: 20px;
            background: #B2B2B2;
            display: block;
        }
    }
    .innerWrapper{
        justify-content: space-around;
        padding: 20px;
        align-items: center;
        color: #B2B2B2;
    }
    .measurement{
        font-size: 20px;
        letter-spacing: 3px;
    }
    .city{
        font-size: 40px;
        letter-spacing: 5px;
        border-bottom: 3px groove;
    }
    .street{
        font-size: 20px;
        letter-spacing: 3px;
    }

    @media(max-width: 768px){
        .outerWrapper{
            max-width: 100%;
            max-height: 1000%;
            width: 80%;
            height: 80%;
            margin: auto;

        }
        .innerWrapper{
            justify-content: space-around;
            padding: 10px;
            margin: 0;
            align-items: center;
            color: #B2B2B2;
        }
    }
</style>