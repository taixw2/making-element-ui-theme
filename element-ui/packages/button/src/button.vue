<template>
  <button :disabled="disabled" class="el-button"
    @click="handleClick"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      isClick ? 'el-button--clicked' : '',
      type ? 'el-button--' + type : '',
      size ? 'el-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain
      }
    ]"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="'el-icon-' + icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
  var t;
  export default {
    name: 'ElButton',

    data () {

      return {
        isClick : false
      }

    },

    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean
    },

    methods: {
      handleClick(evt) {
        this.$emit('click', evt);

        if(t) {
          return;
        }
        this.isClick = !this.isClick;
        t = setTimeout(()=>{
          this.isClick = !this.isClick;
          clearTimeout(t);
          t = 0;
        },360)

      }
    }
  };
</script>
