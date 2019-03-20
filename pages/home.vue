<template>
    <div>
        <navigation></navigation>
        <div class="grid">
        </div>
        <section id="hero">
            <svg class="heading" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 -50 800 700">
                <defs>
                    <style>
                        svg{
                            //user-select: none;
                        }
                    </style>
                    <path id="a" d="M.396.14h202.527v91.445H.396z"/>
                    <path id="c" d="M0 .052h16.18V15.67H0z"/>
                </defs>
                <g fill="none" fill-rule="evenodd">
                    <g fill="#FF5000" fill-opacity=".8" opacity=".8">
                        <path d="M0 193v87.621l275.76 31.201L295 314v-87.62z" style="mix-blend-mode:multiply"/>
                        <path d="M36.663 112l-4.635 72.47L31 200.507l272.336 62.159 19 4.335L328 178.49z" style="mix-blend-mode:multiply"/>
                    </g>
                    <text fill="#020202" font-size="162" letter-spacing="-4">
                        <tspan x="35" y="280" font-family="ClassicGrotesquePro" font-weight="bold">IXD</tspan>
                        <tspan x="35" y="440" font-family="ClassicGrotesquePro" font-weight="bold">Showcase</tspan>
                        <tspan x="35" y="600"  font-style="italic" font-family="ClassicGrotesquePro" font-weight="300">2019</tspan>
                    </text>
                    
                    <text fill="#2E2E30" font-family="HandOfSean" font-size="20" transform="rotate(15 532.287 38)">
                        <tspan x="458" y="30">Sheridan</tspan>
                        <tspan x="475" y="58">College</tspan>
                    </text>
                    <g transform="rotate(1 -1427.808 15217.907)">
                        <mask id="b" fill="#fff">
                            <use xlink:href="#a"/>
                        </mask>
                        <path fill="#2E2E30" d="M1.208 89.249C2.484 88.199.064 91.27.97 91.585c.11.014.804-1.03 1.93-2.457 1.11-1.44 2.337-2.922 2.605-3.315 8.406-11.646 18.258-23.562 28.925-32.392 9.25-7.64 20.747-15.377 32.327-22.026 3.495-1.927 7.017-3.948 10.733-5.703 3.646-1.895 7.482-3.498 11.306-5.19 7.742-3.162 15.714-6.09 23.845-8.345 16.211-4.69 32.741-7.5 47.947-9.004 2.242-.307 4.816-.38 7.57-.492 2.755-.084 5.688-.25 8.675-.272 5.977.066 12.147-.133 17.479-.2 1.814-.061 3.22-.063 4.492-.23.738-.095 1.458-.283 2.17-.495.459-.137.93-.225 1.387-.376.176-.06.839-.253.43-.447-.51-.243-1.303-.176-1.851-.2-1.095-.048-2.192-.059-3.288-.073-1.527-.021-3.054-.04-4.58-.089-1.475-.049-2.888-.094-4.253-.138l-3.97.022-7.428.017a50.561 50.561 0 0 0-3.638.091l-3.704.17c-2.51.136-5.129.209-7.962.433-14.921 1.138-30.418 3.735-46.115 8.002-15.375 4.186-30.419 9.93-44.49 17.23-7.027 3.671-13.797 7.723-20.32 12.032-6.46 4.4-12.656 9.065-18.506 13.999A139.384 139.384 0 0 0 16.454 68.26c-2.577 3.095-5.704 6.465-8.399 9.928-2.721 3.436-5.096 6.89-6.41 9.804-.746 1.63-2.143 3.264-.437 1.257" mask="url(#b)"/>
                    </g>
                    <g transform="rotate(1 -5796.515 15119.925)">
                        <mask id="d" fill="#fff">
                            <use xlink:href="#c"/>
                        </mask>
                        <path fill="#000" d="M1.189.053A1.36 1.36 0 0 0 .97.076C.769.116.616.271.454.384.199.561.084.91.072.971c-.356 1.836.73 3.548.536 5.285C.442 7.765.185 9.52.514 11.123l.523 2.767.207 1.09a.844.844 0 0 0 1.102.644l.99-.34c2.793-.957 5.598-1.896 8.2-3.31.85-.462 1.834-.577 2.731-.913a3.452 3.452 0 0 0 1.736-1.42c.334-.547.229-1.465-.59-1.404-.487.037-.916.307-1.354.5-.862.38-1.778.6-2.653.952-1.674.67-8.409 3.601-8.409 3.601-.422-2.665-.384-5.092-.278-7.735.034-.858-.157-1.699-.32-2.542-.101-.527-.043-1.072-.088-1.604C2.273.954 2.129.265 1.625.107a1.354 1.354 0 0 0-.436-.054" mask="url(#d)"/>
                    </g>
                </g>
            </svg>
        </section>
        <section id="intro" style="background: no-repeat url(dotgrid-lg.svg)">
            <div class="inner">
                <div>
                    <h2 class="heading s2" v-html="p.intro_heading">            
                    </h2>
                    <div class="text s4 highlight-container">
                        <div class="highlight" v-html="p.intro_text">            
                        </div>
                        <div class="highlight shadow blue" v-html="p.intro_text">            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="deets">
            <div class="inner">
                <div>
                    <h3 class="s3 light">
                        When:
                    </h3>
                    <div class="display s2 highlight-container">
                        <div class="highlight">
                            April 17th
                        </div>
                        <div class="highlight shadow orange">
                            <em>
                                April 17th
                            </em>
                        </div>
                    </div>
                    <div class="s2 display italic">
                        4:30PM - 7:30PM
                    </div>
                </div>
                <div>
                    <h3 class="s3 light">
                        Where:
                    </h3>
                    <div class="display s2 highlight-container">
                        <div class="highlight">
                            1655 Dupont St #250
                        </div>
                        <div class="highlight shadow orange">
                            <em>
                                1655 Dupont St #250
                            </em>
                        </div>
                    </div>
                    <div class="s2 display italic">
                        Toronto, ON M6P 3T1
                    </div>
                </div>
                <div>
                    <h3 class="display s2 highlight-container">
                        <div class="highlight">
                            Invitation Only
                        </div>
                        <div class="highlight shadow blue">
                            <em>
                                Invitation Only
                            </em>
                        </div>
                    </h3>
                </div>
            </div>
        </section>
        <section id="sponsors">
            <h2 class="heading hw s5">
                Special thanks to our sponsors!
            </h2>
            <div class="logos">
                <img src="freshbooks.svg">
                <img src="canon.svg">
                <img src="ariagency.svg">
                <img src="t-igroup.svg">
            </div>
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
    @import '~/assets/sass/color.scss';
    @import '~/assets/sass/breakpoints.scss';
    @import '~/assets/sass/typography.scss';
    @import '~/assets/sass/pages/home.scss';
</style>