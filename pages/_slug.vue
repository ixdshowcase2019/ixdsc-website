<template>
  <div>
    <navigation></navigation>
    <div class="shade" v-if="modal" v-on:click="showModal()"></div>
    <bio v-if="modal" :g="grad"></bio>
    <section class="main">
      <div class="borderContainer">
        <div class="border">{{grad.project_theme}}</div>
        <div
          class="border"
          v-for="(t, i) in grad.project_skills.split(',')"
          v-bind:key="'tag'+i"
        >{{t}}</div>
      </div>
      <div class="title">
        <h1 class="s2">{{grad.project_name}}</h1>
        <h4 class="studentName" v-on:click="showModal()">{{grad.first_name + " " + grad.last_name}}</h4>
      </div>
      <div v-html="grad.project_desc_short" class="projectDesc"></div>
      <video v-if="grad.hero_video" autoplay muted loop playsinline class="headerMedia">
        <source :src="apiurl + grad.hero_video" type="video/webm">
        <source :src="apiurl + grad.hero_video_mp4" type="video/mp4">Your browser does not support the video tag.
      </video>
      <img v-else :src="apiurl + grad.hero_image.path" class="headerMedia">

      <div class="content why">
        <div class="text">
          <h2 class="s4 italic q">Why</h2>
          {{grad.why}}
        </div>
        <div class="image">
          <video v-if="grad.why_video" autoplay muted loop playsinline>
            <source :src="apiurl + grad.why_video" type="video/webm">
            <source :src="apiurl + grad.why_video_mp4" type="video/mp4">Your browser does not support the video tag.
          </video>
          <img v-else :src="apiurl + grad.why_image.path">
        </div>
      </div>
      <div class="content how">
        <div class="text">
          <h2 class="s4 italic q">How</h2>
          {{grad.how}}
        </div>
        <div class="image">
          <video v-if="grad.how_video" autoplay muted loop playsinline>
            <source :src="apiurl + grad.how_video" type="video/webm">
            <source :src="apiurl + grad.how_video_mp4" type="video/mp4">Your browser does not support the video tag.
          </video>
          <img v-else :src="apiurl + grad.how_image.path">
        </div>
      </div>
      <div class="content what">
        <div class="text">
          <h2 class="s4 italic q">What</h2>
          {{grad.what}}
        </div>
        <div class="image">
          <video v-if="grad.what_video" autoplay muted loop playsinline>
            <source :src="apiurl + grad.what_video" type="video/webm">
            <source :src="apiurl + grad.what_video_mp4" type="video/mp4">Your browser does not support the video tag.
          </video>
          <img v-else :src="apiurl + grad.what_image.path">
        </div>
      </div>
    </section>
    <bottom></bottom>
  </div>
</template>

<script>
import navigation from "~/components/navigation";
import bio from "~/components/bio";
import bottom from "~/components/bottom";

import { helper } from "~/plugins/helper.js";

export default {
  async fetch({ store, params }) {
    await store.dispatch("cpCollection", "grads");
  },
  data() {
    return {
      modal: false
    };
  },
  components: {
    navigation,
    bio,
    bottom
  },
  head() {
    return {
      title: this.grad.project_name + " - IXD Showcase 2019"
    };
  },
  methods: {
    showModal() {
      console.log("modal");
      this.modal = !this.modal;
    }
  },
  computed: {
    grad() {
      return this.$store.getters
        .getCollection("grads")
        .entries.find(g => g.slug == this.$route.params.slug);
    },
    apiurl() {
      return this.$store.getters.apiurl;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~/assets/sass/global.scss";
@import "~/assets/sass/color.scss";
@import "~/assets/sass/breakpoints.scss";
@import "~/assets/sass/typography.scss";
@import "~/assets/sass/pages/student.scss";
</style>
