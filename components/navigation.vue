<template>
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