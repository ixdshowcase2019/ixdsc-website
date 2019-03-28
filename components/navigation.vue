<template>
    <div class="header">
        <div class="slogo">
            <div class="inner">
                <img src="logo.png" width="80px">
            </div>
        </div>
        <div class="nav caps">
            <nav>
                <div>
                    IXD Showcase 2019
                    <img v-if="route=='home'" src="star.svg">
                </div>
                <div>
                    <nuxt-link class="disabled" to="/home">
                    </nuxt-link>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    export default{
        
        data(){
            return{
                route: this.$route.name,
            }
        }
    }
</script>

<style lang="scss">
    @import '~/assets/sass/typography.scss';
    @import '~/assets/sass/components/navigation.scss';
</style>