<template>
  <div>
    <div id="overlay"></div>
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

import MARKER_DATA_BLUE from "~/markerDataBlue";

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
    let color = "Orange";
    let cssColor = "rgb(240, 82, 34)";
    const studentName = (
      this.grad.first_name +
      " " +
      this.grad.last_name
    ).toLowerCase();
    MARKER_DATA_BLUE.forEach(marker => {
      if (studentName == marker.name) {
        color = "Blue";
        cssColor = "rgb(0, 175, 220)";
      }
    });

    return {
      title: this.grad.project_name + " - IXD Showcase 2019",
      script: [
        { src: "../../js/libraries/three.js" },
        { src: "../../js/libraries/jsartoolkit5/artoolkit.js" },
        { src: "../../js/libraries/jsartoolkit5/artoolkit.api.js" },
        { src: "../../js/libraries/threex/threex-artoolkitsource.js" },
        { src: "../../js/libraries/threex/threex-artoolkitcontext.js" },
        { src: "../../js/libraries/threex/threex-arbasecontrols.js" },
        { src: "../../js/libraries/threex/threex-armarkercontrols.js" },
        { src: `../../js/project${color}.js`, type: "module", body: true }
      ],
      style: [
        {
          cssText: `#overlay {position: fixed;top: 0; left: 0; width: 120vw; height: 100vh; background: ${cssColor}; z-index: 999; transform: translateX(0vw); transition-property: transform; transition-duration: 1.25s; transition-timing-function: cubic-bezier(0, 0.75, 0.5, 1); } #overlay.triggered { transform: translateX(120vw); }`
        }
      ]
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

    @import '~/assets/sass/global.scss';
    @import '~/assets/sass/color.scss';
    @import '~/assets/sass/breakpoints.scss';
    @import '~/assets/sass/typography.scss';
    @import '~/assets/sass/pages/student.scss';
    @import '~/assets/sass/pages/studentKiosk.scss';

</style>
