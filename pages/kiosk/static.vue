<template>
    <div>
        <navigation></navigation>
        <div class="grid">
        </div>

        <section>
          <div class="video-container">

            <div class="row">
              <video class="video" controls="false" autoplay="autoplay" loop="true" muted>
                  <source src="~/static/cardscan.mp4" type="video/mp4">
              </video>
            </div>
                    <img class="placeText" src="~/static/kiosk_card.svg">
          </div>

        </section>



        <bottom></bottom>
    </div>
</template>

<style lang="scss">
    @import '~/assets/sass/global.scss';
    @import '~/assets/sass/color.scss';
    @import '~/assets/sass/breakpoints.scss';
    @import '~/assets/sass/typography.scss';
    @import '~/assets/sass/static.scss';
</style>
