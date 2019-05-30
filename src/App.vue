<template>
    <lamb-share :data="{url, via: 'onclive'}"></lamb-share>
</template>

<script>
import LambShare from './components/LambShare';

export default {
  name: 'app',
  components: {
    LambShare,
  },
  data() {
    return {
      url: 'https://www.onclive.com/publications/oncology-live/2018/vol-19-no-24/tucatinib-shows-promise-in-patients-with-breast-cancer-and-brain-metastases?utm_source=onclive&utm_medium=HPbackdrop&utm_campaign=tucatinib'
    }
  }
}
</script>

<style lang="scss">
</style>
