<template>
    <div>
        <navigation></navigation>
        <section>
            <div>
                <div class="border">
                    {{grad.project_theme}}
                </div>
                <div class="border" v-for="(t, i) in grad.project_skills.split(',')" v-bind:key="'tag'+i">
                    {{t}}
                </div>
            </div>
            <div>
                <h1>
                    {{grad.project_name}}
                </h1>
                <h2>
                    {{grad.first_name + " " + grad.last_name}}
                </h2>
            </div>
            <div v-html="grad.project_desc_short"></div>
            <video v-if="grad.hero_video" controls autoplay muted>
                <source :src="apiurl + grad.hero_video" type="video/webm">
                Your browser does not support the video tag.
            </video>
            <img v-else :src="apiurl + grad.hero_image.path">
            
            {{grad.project_title}}
            
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