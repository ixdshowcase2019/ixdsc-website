<template>
    <div>
        <navigation></navigation>
        <section class="main">
            <h1 class="s2">
                <span class="italic">Graduate</span> Projects
            </h1>
            <div class="controls">

            </div>
            <div class="grid light">
                <div v-for="(g, i) in grads" v-bind:key="'grad'+i" class="griditem">
                    <img v-if="" :src="g.thumb ? apiurl + g.thumb.path : 'hello'">
                    <div>
                        <h1 class="s4">
                            {{g.project_name}}
                        </h1>
                        <h2 class="s5">
                            {{g.first_name}} {{g.last_name}}
                        </h2>
                        <div>
                            {{g.project_theme}}
                            <span v-for="(t, i) in g.project_skills.split(',')" v-bind:key="'tag'+i">
                                / {{t}}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <bottom></bottom>
    </div>
</template>

<script>

    import navigation from '~/components/navigation';
    import bottom from '~/components/bottom';

    import { helper } from '~/plugins/helper.js';

    export default{
        async fetch ({store, params}) {
            await store.dispatch('cpCollection', 'grads')
        },
        components:{
            navigation,
            bottom
        },
        head(){
            return{
                title: "Graduates - IXD Showcase 2019"
            }
        },
        computed: {
            grads(){
                return this.$store.getters.getCollection('grads').entries;
            },
            apiurl(){
                return this.$store.getters.apiurl;
            }
        },

    }
</script>
<style lang="scss">
    @import '~/assets/sass/global.scss';
    @import '~/assets/sass/color.scss';
    @import '~/assets/sass/breakpoints.scss';
    @import '~/assets/sass/typography.scss';
    @import '~/assets/sass/pages/graduates.scss';
</style>
