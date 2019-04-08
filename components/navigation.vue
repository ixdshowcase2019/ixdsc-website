<template>
    <div class="header">
        <div class="slogo">
            <div class="inner">
                <img src="logo.png" width="80px">
            </div>
        </div>
        <div class="nav caps">
            <nav>
              <nuxt-link to="/">IXD Showcase 2019</nuxt-link>
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
