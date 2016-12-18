<template>
  <router-view></router-view>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!'
    }
  },

  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    }
  }
}
</script>

<style>
body {
  background-color: #fafafa;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;
  line-height: 1.5;
  color: #666;
  font-size: 14px;
  -webkit-transition: background 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: background 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  overflow-x: hidden;

}
</style>
