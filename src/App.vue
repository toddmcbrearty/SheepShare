<template>
    <sheep-share :data="{url, via: 'onclive'}"></sheep-share>
</template>

<script>
import SheepShare from './components/SheepShare';

export default {
  name: 'app',
  components: {
    SheepShare,
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
