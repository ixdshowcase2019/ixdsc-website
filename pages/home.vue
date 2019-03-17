<template>
    <div>
        <navigation></navigation>
        <section id="hero">
            <h1 class="s1">
                <span v-html="p.hero_text">
                </span>
            </h1>
        </section>
        <section id="intro">
            <img src="https://dummyimage.com/400x200/000/fff.png">
            <div>
                <h2 class="s2" v-html="p.intro_heading">            
                </h2>
                <p v-html="p.intro_text">            
                </p>
            </div>
        </section>
        <section id="deets">

        </section>
    </div>
</template>

<script>
    
    import navigation from '~/components/navigation';
    
    import { helper } from '~/plugins/helper.js';
    
    export default {
        async fetch ({store, params}) {
            await store.dispatch('cpSingle', 'home')
        },
        components:{
            navigation
        },
        computed: {
            p(){
                return this.$store.getters.getSingle('home');
            }
        }
        
    }
</script>

<style lang="scss">
    @import '~/assets/sass/global.scss';
    @import '~/assets/sass/breakpoints.scss';
    @import '~/assets/sass/typography.scss';
    @import '~/assets/sass/pages/home.scss';
</style>