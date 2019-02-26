<template>
    <div class="single-city">
        <h1>{{measurements.city}}</h1>
        <span v-bind:class="[dotClass, this.measurements.level]" id="circle"></span>
        <p>{{measurements.level}}</p>
    </div>
</template>

<script>
    export default {
        name: "singleCity",
        props: {
            measurements: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                dotClass: 'dot'
            }
        }
    }
</script>

<style scoped>
    .single-city{
        color: #C3C3C3;
        background-color: #424242;
        text-align: center;
        padding: 3px;
        min-width: 25vh;
        height: 250px;
    }
    .dot{
        height: 70px;
        width: 70px;
        border-radius: 50%;
        display: inline-block;
    }
    .VERY_LOW{
        background-color: darkgreen;
    }
    .LOW{
        background-color: limegreen;
    }
    .MEDIUM{
        background-color: yellow;
    }
    .HIGH{
        background-color: red;
    }
    .VERY_HIGH{
        background-color: darkred;
    }
</style>