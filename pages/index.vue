<template>
    <div>

        <!-- Primary Page Layout
–––––––––––––––––––––––––––––––––––––––––––––––––– -->
        <div class="container">
            <div class="row">
                <div class="eight columns" style="margin-top:30vh">
                    <p>Sheridan College's Bachelor of Interaction Design presents:</p>
                    <h1>IXD Showcase 2019</h1>

                </div>
            </div>
        </div>


        <!--Location, time and date information –––––––––––––––––––––––––––––––––––––––––––––––––– -->

        <div class="container">
            <div class="row">
                <div style="margin-top:1%">
                    <div class="three columns">
                        <div class="info">
                            <!--                        <div class="icon nudge"><img src="images/date-icon.png"></div>-->
                            April 17th
                        </div>
                    </div>

                    <div class="three columns">
                        <div class="info">

                            <!--                    <div class="icon"><img src="images/location-icon.png"></div>-->

                            <a href="https://www.google.ca/maps/place/FreshBooks+Accounting+Software/@43.6644384,-79.458197,17z/data=!3m1!4b1!4m5!3m4!1s0x4057531bed203aa5:0x5484d8bd0e5497cb!8m2!3d43.6644345!4d-79.4560083?dcr=0" target="_blank">Freshbooks</a>
                        </div>
                    </div>

                    <div class="three columns">
                        <div class="info">
                            <!--                        <div class="icon"><img src="images/time-icon.png"></div>-->
                            4&#58;30PM &#45; 7&#58;30PM
                        </div>

                    </div>
                </div>
            </div>
            <div style="margin-top:8%">
                <div class="five columns">
                    <div class="info">

                        <a href="mailto:Ixd.grad.show.2019@gmail.com?subject=IXD Gradshow 2019 Invitation Request">Request an Invitation</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- End Document
–––––––––––––––––––––––––––––––––––––––––––––––––– -->
    </div>
</template>

<script>
    
    import { helper } from '~/plugins/helper.js';
        
    export default {
//        async fetch ({store, params}) {
//            await store.dispatch('cpCollection', 'events')
//        },
        components: {
        },
        data(){
            return {
                hello: "hello",
            }
        },
        head () {
            return {
                title: "IXD Gradshow 2019",
                meta: [
                    { hid: 'og:title', property: 'og:title', content: "hyperTT" },
                    { hid: 'og:type', property: 'og:type', content: 'website' },
//                    { hid: 'og:url', property: 'og:url', content: this.$store.state.siteUrl + "" + this.$route.path},
                    { hid: 'og:description', property: 'og:description', content: 'ARG Parkour Racing' },
                    { hid: 'description', name: 'description', content: 'ARG Parkour Racing' },
                    { hid: 'viewport', property: 'viewport', content: "width=device-width, initial-scale=1" }
                ],
            }
        },
        computed: {
            
        }
    }
</script>

<style lang="scss">
    @import '~/assets/sass/normalize.scss';
    @import '~/assets/sass/skeleton.scss';
    @import '~/assets/sass/index.scss';
</style>
