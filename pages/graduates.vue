<template>
  <div>
    <navigation></navigation>
    <section class="main">
      <h1 class="display s2 highlight-container">
        <div class="highlight">
          <span class="italic">Graduate</span> Projects
        </div>
        <div class="highlight shadow blue">
          <em>Graduate Projects</em>
        </div>
      </h1>
      <div class="filtration">
        <div class="filter">
          <img src="pick_3_filter.svg">
          <div class="controlsContainer">
            <div
              class="controls"
              v-for="(tag, i) in taglist"
              :key="'tag'+i"
              v-on:click="toggleTag(tag)"
              :style="{background: tags.find(t=>t == tag) ? '#76BEF8' : '0'}"
            >{{tag}}</div>
          </div>
        </div>
        <div>
          <input class="search" v-model="search" placeholder="Search" v-on:click="clearTags()">
        </div>
      </div>
      <div class="grid light">
        <div
          v-for="g in selection(tags.concat()).concat()"
          :key="g.first_name+'-'+g.last_name"
          class="griditem"
        >
          <nuxt-link :to="g.slug">
            <img :src="g.thumb ? apiurl + g.thumb.path : 'hello'" width="100%">
          </nuxt-link>
          <div class="info">
            <nuxt-link :to="g.slug">
              <h1 class="s4">{{g.project_name}}</h1>
            </nuxt-link>
            <h2 class="s5">{{g.first_name}} {{g.last_name}}</h2>
            <div>
              {{g.project_theme}}
              <div>
                {{g.project_skills}}
                <!-- <div v-for="(t, i) in g.project_skills.split(',')" :key="'tag'+i">
                  <div v-show="i>0">/</div>
                  {{t}}
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <div v-show="selection(tags).length == 0" class>Oops! Try a different combination of tags.</div>
      </div>
    </section>
    <bottom></bottom>
  </div>
</template>

<script>
import navigation from "~/components/navigation";
import bottom from "~/components/bottom";

import { helper } from "~/plugins/helper.js";

export default {
  async fetch({ store, params }) {
    await store.dispatch("cpCollection", "grads");
  },
  components: {
    navigation,
    bottom
  },
  data() {
    return {
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
      ],
      search: "",
      helper: helper
    };
  },
  head() {
    return {
      title: "Graduates - IXD Showcase 2019"
    };
  },
  methods: {
    clearTags(){
      this.tags = [];
    },
    toggleTag(tag) {
      if (this.tags.find(t => t == tag)) {
        this.tags.splice(this.tags.indexOf(tag), 1);
      } else {
        if (this.tags.length < 2) {
          this.tags.push(tag);
        } else {
          this.tags.splice(0, 1);
          this.tags.push(tag);
        }
      }
    },
    selection(tags) {
      if (!this.query) {
        return this.tagfilter(this.grads, tags, tags.length);
      }
      if (this.query) {
        return this.grads.filter(project => {
          return (
            project.project_name
              .toLowerCase()
              .match(this.query.toLowerCase()) ||
            project.first_name.toLowerCase().match(this.query.toLowerCase()) ||
            project.last_name.toLowerCase().match(this.query.toLowerCase())
          );
        });
      }
    },
    tagfilter(a, tags, cd) {
      if (cd <= 0) {
        return a;
      } else {
        console.log(tags);
        console.log(tags[tags.length - cd]);
        console.log(a);
        return this.tagfilter(
          a.filter(g =>
            g.project_skills.split(", ").find(t => t == tags[tags.length - cd])
          ),
          tags,
          cd - 1
        );
      }
    }
  },
  computed: {
    grads() {
      return this.$store.getters.getCollection("grads").entries;
    },
    apiurl() {
      return this.$store.getters.apiurl;
    },
    query(){
      return this.search;
    }
  }
};
</script>
<style lang="scss">
@import "~/assets/sass/global.scss";
@import "~/assets/sass/color.scss";
@import "~/assets/sass/breakpoints.scss";
@import "~/assets/sass/typography.scss";
@import "~/assets/sass/pages/graduates.scss";
</style>
