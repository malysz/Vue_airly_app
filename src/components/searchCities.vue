<template>
    <div class="show-cities">
        <input id="search-city" type="text" v-model="search" placeholder="search city" />
        <div class="show-measurements">
            <single-city v-for="city in filteredCities" :city="city" :measurements="city" class="single-city" :key="city.id" @click.native="handleModalOpen(city)"></single-city>
        </div>
        <Modal v-if="modalOpen" :item="modalItem" @closeModal="modalOpen = false"></Modal>
    </div>
</template>

<script>
    import SingleCity from "./singleCity";
    import Modal from "./modal";
    export default {
        name: "searchCities",
        components: {
            SingleCity,
            Modal
        },
        data() {
            return {
                httpGetCityName: 'https://airapi.airly.eu/v2/installations/',
                httpGetMeasurements: 'https://airapi.airly.eu/v2/measurements/installation?indexType=AIRLY_CAQI&installationId=',
                cities: [],
                citiesId: [204, 196, 2935, 239, 337, 27, 7664, 1127, 3432, 6955, 3380, 7476, 2322, 67],
                search: '',
                modalOpen: false,
                modalItem: null
            }
        },
        methods:{
            handleModalOpen(city){
                this.modalOpen = true;
                this.modalItem = city;
            }
        },
        created() {
            for (let i in this.citiesId) {
                let measurement = {
                    id: Number,
                    city: String,
                    street: String,
                    level: String,
                    pm25: Number,
                    pm10: Number,
                };
                measurement.id = this.citiesId[i];
                this.httpGetCityName = 'https://airapi.airly.eu/v2/installations/' + this.citiesId[i];
                this.$http.get(this.httpGetCityName).then((data)=>{
                    measurement.city = data.body.address.city;
                    measurement.street = data.body.address.street;
                });
                this.httpGetMeasurements = 'https://airapi.airly.eu/v2/measurements/installation?indexType=AIRLY_CAQI&installationId=' + this.citiesId[i];
                this.$http.get(this.httpGetMeasurements).then((res)=>{
                    measurement.level = res.body.current.indexes[0].level;
                    measurement.pm25 = res.body.current.values[1].value;
                    measurement.pm10 = res.body.current.values[2].value;
                });
                this.cities.push(measurement);
                console.log(measurement);
            }
        },
        computed: {
            filteredCities(){
                return this.cities.filter((city)=>{
                    return city.city.toString().match(this.search);
                });
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|ZCOOL+QingKe+HuangYou');
    .show-cities{
        font-family: 'ZCOOL QingKe HuangYou', cursive;
        text-align: center;
    }
    #search-city{
        font-family: 'ZCOOL QingKe HuangYou', cursive;
        background-color: #404040;
        color: #B2B2B2;
        font-weight: bold;
        font-size: 16px;
        border: none;
        border-bottom: 2px groove;
        min-height: 50px;
        min-width: 400px;
        text-align: center;
        padding: 3px 5px;
    }
    .show-measurements{
        margin-top: 40px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 50px;
        justify-content: center;
    }
    .single-city{
        cursor: pointer;
    }

    @media(max-width: 768px){
        .show-measurements{
            margin-top: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 5px;
        }
    }
</style>