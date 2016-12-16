<template lang="html">

  <div class="block" v-loading="loading" element-loading-text="拼命加载中">

    这是一段文字<br />
    这是一段文字

  </div>

</template>

<script>
export default {

  data () {

    return {
      loading : true
    }

  }
}
</script>

<style lang="css">
</style>
