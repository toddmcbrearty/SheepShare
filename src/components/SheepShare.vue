<template>
    <div class="mjh-custom-buttons">
        <div class="mjh-custom-button" data-network="linkedin"
             @click="share"
            :style="`margin-right: ${spaceBetween}em; border-radius: ${corners}em;`">
            <font-awesome-icon :icon="['fab', 'linkedin']" :size="size"></font-awesome-icon>
        </div>
        <div class="mjh-custom-button" data-network="twitter"
             @click="share"
            :style="`margin-right: ${spaceBetween}em; border-radius: ${corners}em;`">
            <font-awesome-icon :icon="['fab', 'twitter']" :size="size"></font-awesome-icon>
        </div>
        <div class="mjh-custom-button" data-network="facebook"
             @click="share"
             :style="`margin-right: ${spaceBetween}em; border-radius: ${corners}em;`">
            <font-awesome-icon :icon="['fab', 'facebook-square']" :size="size"></font-awesome-icon>
        </div>
        <div class="mjh-custom-button" data-network="print"
             @click="share"
            :style="`margin-right: ${spaceBetween}em; border-radius: ${corners}em;`">
            <font-awesome-icon :icon="['fa', 'print']" :size="size"></font-awesome-icon>
        </div>
        <div class="mjh-custom-button" data-network="email"
             :style="`border-radius: ${corners}em;`">
            <font-awesome-icon :icon="['fa', 'at']" :size="size"></font-awesome-icon>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import {library} from '@fortawesome/fontawesome-svg-core';
  import {faFacebookSquare, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
  import {faPrint, faAt} from '@fortawesome/free-solid-svg-icons';
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

  library.add(faFacebookSquare);
  library.add(faLinkedin);
  library.add(faTwitter);
  library.add(faPrint);
  library.add(faAt);

  Vue.component('font-awesome-icon', FontAwesomeIcon);


  export default {
    name: 'LambShare',
    props: {
      size: {
        type: String,
        default: 'sm'
      },
      spaceBetween: {
        type: Number,
        default: 0.3,
      },
      corners: {
        type: Number,
        default: 0.3
      },
      data: {
        type: Object,
        default: () => {
          return {
            url: '',
            title: '',
            via: '',
          }
        }
      }
    },

    data() {
      return {
        sizes: {
          small: 16,
          medium: 32,
        },
        url: '',
        kruxData: {
          print: {
            id: 'Mj2CZR7v',
            event: 'clk',
            width: this.defaultWidth,
            height: this.defaultHeight,
            target: '_blank',
          },
          email: {
            id: 'Mj2COWsc',
            event: 'clk',
            width: this.defaultWidth,
            height: this.defaultHeight,
            target: '_blank',
          },
          facebook: {
            id: 'Mj2BjMcy',
            event: 'social',
            width: this.defaultWidth,
            height: this.defaultHeight,
            target: 'social-share-popup',
          },
          twitter: {
            id: 'Mj2Bx9pV',
            event: 'social',
            width: this.defaultWidth,
            height: 450,
            target: 'social-share-popup',
          },
          linkedin: {
            id: 'Mj2B5mbD',
            event: 'social',
            width: this.defaultWidth,
            height: this.defaultHeight,
            target: 'social-share-popup',
          },
          video: {
            id: 'Mm4KYJOv',
            event: 'vvid',
            percent_watched: '',
          },
        },
        defaultWidth: 551,
        defaultHeight: 550,
      };
    },

    created() {
      this.url = this.data.url;
    },

    methods: {
      share(e) {
        let url = '';
        const network = e.target.parentNode.dataset.network;
        console.log(network);
        switch(network) {
          case 'facebook':
            url = this.shareFacebook();
            break;
          case 'twitter':
            url = this.shareTwitter();
            break;
          case 'linkedin':
            url = this.shareLinkedin();
            break;
          case 'print':
            url = this.shareFacebook();
            break;
          case 'email':
            url = this.shareFacebook();
            break;
        }

        this.openSocialWindow(url, network);
      },
      shareFacebook() {
        const baseUrl = 'https://www.facebook.com/sharer.php';
        const uri = this.url === '' ?  location.href : this.url;

        return `${baseUrl}?u=${uri}`;
      },
      shareLinkedin() {
        const baseUrl = `https://www.linkedin.com/shareArticle`;

        return `${baseUrl}?mini=true&url=${this.getUrl()}`;
      },
      shareTwitter() {
        const baseUrl = 'https://twitter.com/intent/tweet';

        return `${baseUrl}?url=${this.getUrl()}&via=${this.data.via}`;
      },

      getUrl() {
        return  this.url === '' ?  location.href : this.url;
      },

      openSocialWindow(url, network) {
        if (url === '' || network === '') return false;

        // check if width has been passed. if not use the default settings
        const width = this.kruxData[network].width ;
        const height = this.kruxData[network].height;

        const left = Math.floor((screen.width / 2) - (width / 2));
        const top = Math.floor((screen.height / 2) - (height / 2));

        const features = `height=${height}, width=${width}, top=${top}, left=${left}, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no`;
        const socialWindow = window.open(url, 'socialPopupWindow', features);

        socialWindow.focus();
      }
    }
  };
</script>

<style lang="scss">
    .mjh-custom-buttons {
        display: flex;

        .mjh-custom-button[data-network] {
            flex: 0 0;
            padding: 5px 10px;
            cursor: pointer;
            font-weight: bold;
            color: #fff;

            /** colors **/
            &[data-network='facebook'] {
                background: #3b5998;
            }
            &[data-network='linkedin'] {
                background: #0077b5;
            }
            &[data-network='twitter'] {
                background: #1da1f2;
            }
            &[data-network='print'] {
                background: #717171;
            }
            &[data-network='email'] {
                background: #d6d6d6;
                color: #555;
            }

            &:hover, &:focus {
                margin-top: -2px;
            }
        }
    }
</style>
