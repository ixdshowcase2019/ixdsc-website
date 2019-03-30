<template>
    <div>
        <navigation></navigation>
        <section>
            <img :src="apiurl + grad.hero_image.path">
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
                title: this.grad.name + " - IXD Showcase 2019"
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