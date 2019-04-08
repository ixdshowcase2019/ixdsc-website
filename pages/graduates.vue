<template>
    <div>
        <navigation></navigation>
        <section class="main">
          <h1 class="display s2 highlight-container">
              <div class="highlight">
                  <span class="italic">Graduate</span> Projects
              </div>
              <div class="highlight shadow blue">
                  <em>
                      Graduate Projects
                  </em>
              </div>
          </h1>
          <div class="filter">
            <img src="pick_3_filter.svg">
            <div class="controlsContainer">
                <div class="controls" v-for="(tag, i) in taglist" :key="'tag'+i" v-on:click="toggleTag(tag)" :style="{background: tags.find(t=>t == tag) ? '#76BEF8' : '0'}">
            {{tag}}
              </div>
            </div>
          </div>
            <div class="grid light">
                <div v-for="(g, i) in selection(tags)" v-bind:key="'grad'+i" class="griditem">
                    <img :src="g.thumb ? apiurl + g.thumb.path : 'hello'" width="313px">
                    <div class="info">
                        <h1 class="s4">
                            {{g.project_name}}
                        </h1>
                        <h2 class="s5">
                            {{g.first_name}} {{g.last_name}}
                        </h2>
                        <div>
                            {{g.project_theme}}
                            <div>
                                <span v-for="(t, i) in g.project_skills.split(',')" v-bind:key="'tag'+i">
                                    <span v-if="i>0">/</span> {{t}}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="selection(tags).length == 0" class="">
                    Oops! Try a different combination of tags.
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
        data(){
            return{
                tags: [],
                taglist: [
                    "AR/VR",
                    "Development",
                    "Motion",
                    "Physical",
                    "Product Design",
                    "Research",
                    "Service Design",
                    "Storytelling",
                    "UI",
                    "UX",
                    "Visual Design",
                    "3D"
                ]
            }
        },
        head(){
            return{
                title: "Graduates - IXD Showcase 2019"
            }
        },
        methods:{
            toggleTag(tag){
                if(this.tags.find(t=>t==tag)){
                    this.tags.splice(this.tags.indexOf(tag),1)
                }else{
                    if(this.tags.length < 3){
                        this.tags.push(tag)
                    }else{
                        this.tags.splice(0, 1);
                        this.tags.push(tag)
                    }
                }
            },
            selection(tags){
                return this.tagfilter(this.grads, tags, tags.length);
            },
            tagfilter(a, tags, cd){
                if(cd <= 0){
                    return a;
                }else{
                    console.log(tags);
                    console.log(tags[tags.length - cd]);
                    console.log(a);
                    return this.tagfilter(a.filter(g=>g.project_skills.split(", ").find(t=>t == tags[tags.length - cd])), tags, cd-1)
                }
            }
        },
        computed: {
            grads(){
                return this.$store.getters.getCollection('grads').entries;
            },
            apiurl(){
                return this.$store.getters.apiurl;
            },

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
