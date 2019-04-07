<template>
    <div>
        <navigation></navigation>
        <section class="main">
            <div class="borderContainer">
                <div class="border">
                    {{grad.project_theme}}
                </div>
                <div class="border" v-for="(t, i) in grad.project_skills.split(',')" v-bind:key="'tag'+i">
                    {{t}}
                </div>
            </div>
            <div class="title">
                <h1 class="s2">
                    {{grad.project_name}}
                </h1>
                <h4 class="studentName">
                    {{grad.first_name + " " + grad.last_name}}
                </h4>
            </div>
            <div v-html="grad.project_desc_short" class="projectDesc"></div>
            <video v-if="grad.hero_video" controls autoplay muted>
                <source :src="apiurl + grad.hero_video" type="video/webm">
                Your browser does not support the video tag.
            </video>
            <!-- <img v-else :src="apiurl + grad.hero_image.path"> -->
            <img v-else :src="grad.hero_image.path" />

            <!-- {{grad.project_title}} -->

            <div class="content why">
              <div class="text">
                  <p>Why</p>
                  {{grad.why}}
              </div>
              <div class="image">
                  <!-- when done change to : <img :src="apiurl + grad.why_image.path"> -->
                  <img :src="grad.why_image.path">
              </div>
            </div>
            <div class="content how">
              <div class="text">
                  <p>How</p>
                  {{grad.how}}
              </div>
              <div class="image">
                  <!-- when done change to : <img :src="apiurl + grad.why_image.path"> -->
                  <img :src="grad.how_image.path">
              </div>
            </div>
            <div class="content what">
              <div class="text">
                  <p>What</p>
                  {{grad.what}}
              </div>
              <div class="image">
                  <!-- when done change to : <img :src="apiurl + grad.why_image.path"> -->
                  <img :src="grad.what_image.path">
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
                title: this.grad.project_name + " - IXD Showcase 2019"
            }
        },
        computed: {
            grad(){
                return this.$store.getters.getCollection('grads').entries.find(g=>g.slug==this.$route.params.slug);
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
    @import '~/assets/sass/pages/student.scss';
</style>
