<template>
    <div class="ui characters-list cards" v-if="!!characters.length">
        <div class="ui card fadeIn-animation" v-for="character in characters">
            <div class="image">
                <img :src="character.image">
            </div>
            <div class="content">
                <div class="header">{{ character.name }}</div>
                <div class="description">{{ character.description }}</div>
            </div>
            <div class="extra content">
                <span class="right floated">
                    <a target="_blank" href="character.url"></a>
                    <button class="ui icon tiny purple icon button">More info</button>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: mapGetters([
        'characters'
    ])
}
</script>

<style lang="css">
.characters-list.cards {
  margin-top: 2em;
  justify-content: center;
}
.characters-list.cards .image {
    position: relative;
    width: 100%;
    height: 246px;
    overflow: hidden;
}
.characters-list.cards .image img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: auto;
  -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);
}
.ui.card, .ui.cards > .card {
  width: 364px;
}
</style>
