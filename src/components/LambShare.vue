<template>
  <div class="sharethis-inline-share-buttons"></div>
</template>

<script>
  export default {
    name: 'LambShare',
    props: {
      size: {
        type: String,
        default: 'small'
      }
    },

    data() {
      return {
        sizes: {
          small: 16,
          medium: 32,
        }
      }
    },

    created() {
      this.mountShareThis();
    },

    methods: {
      getImage(network) {
        return `https://ws.sharethis.com/images/2017/${network}_${this.sizes[this.size]}.png`
      },

      mountShareThis() {
        let addThis = document.createElement('script');
        addThis.setAttribute('id', 'sharethisScript');
        addThis.setAttribute('src', 'https://platform-api.sharethis.com/js/sharethis.js#property=5c9b8c529b272f00119ab6eb&product=inline-share-buttons');
        document.head.appendChild(addThis);
      }
    }
  };
</script>

<style lang="scss">
  .st-custom-button[data-network] {
    background-color: #0adeff;
    display: inline-block;
    padding: 5px 10px;
    cursor: pointer;
    font-weight: bold;
    color: #fff;

    &:hover, &:focus {
      text-decoration: underline;
      background-color: #00c7ff;
    }
  }
</style>
