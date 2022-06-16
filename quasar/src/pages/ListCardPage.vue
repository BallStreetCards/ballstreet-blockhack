<template>
  <q-page class="row bg-dark-cream" v-if="done">
    <div class="column fit bg-dark-cream">
      <div class="column q-pa-xl">
        <div class="fn-jost fn-600 text-brown fn-xl">Success!</div>
        <div class="fn-jost text-brown fn-md">
          Your card listing application has been submitted, please wait 3-4
          business days
        </div>
        <div class="q-mt-lg">
          <q-btn class="fn-sm fn-jost bg-accent text-white" outline to="/">
            Go back home
          </q-btn>
        </div>
      </div>
    </div>
  </q-page>
  <q-page class="row bg-dark-cream" v-else>
    <div class="row col-5 col-grow bg-primary">
      <div class="column col-11 col-grow">
        <div class="column full-height" v-if="slide < '3'">
          <div class="col-2"></div>
          <!-- Placeholder font until the correct one can be included -->
          <div class="col-3 big-text text-white fn-">LIST</div>
          <div class="col-3 big-text text-white">YOUR</div>
          <div class="col-3 big-text text-white">CARD</div>
        </div>
        <div class="col-7 column" v-else>
          <div class="col-1 col-grow"></div>
          <div
            class="col-1 text-dark-cream items-end row justify-center fn-600 fn-lg"
            v-if="finalize"
          >
            Confirm Your Submission
          </div>
          <q-carousel
            v-model="imagePreview"
            class="col-10 bg-transparent"
            navigation
          >
            <q-carousel-slide name="front"
              ><div class="full-height">
                <q-img
                  :src="cardImages[0]"
                  fit="none"
                  class="full-height"
                /></div></q-carousel-slide
            ><q-carousel-slide name="back"
              ><q-img
                :src="cardImages[1]"
                fit="none"
                class="full-height" /></q-carousel-slide
          ></q-carousel>
        </div>
        <div class="col-3 column items-center" v-if="slide > '2'">
          <div class="row q-gutter-sm text-dark-cream q-mb-sm">
            <div class="fn-xl fn-600">{{ cardApplication.details?.name }}</div>
            <div class="fn-xl">
              {{ cardApplication.details?.cardNumber ? '#' : ''
              }}{{ cardApplication.details?.cardNumber }}
            </div>
          </div>
          <div class="row q-gutter-sm text-grey q-mb-lg" v-if="slide > '2'">
            <div class="fn-md fn-600">
              {{ cardApplication.details?.manufacterer }}
            </div>
            <div class="fn-md" v-if="cardApplication.details?.manufacterer">
              |
            </div>
            <div class="fn-md">
              {{ cardApplication.details?.collection }}
              {{ cardApplication.details?.year }}
            </div>
          </div>
          <div class="row q-gutter-sm" v-if="slide > '3'">
            <q-chip
              v-for="tag in cardApplication.tags"
              :key="tag"
              :label="tag"
              rounded
              unelevated
              outline
              color="grey"
            />
            <q-chip
              v-if="cardApplication.grade"
              :label="cardApplication.grade"
              rounded
              unelevated
              color="cream"
            />
          </div>
        </div>
        <div class="col-2 column">
          <div class="row justify-center q-mx-xl" v-if="finalize">
            <q-btn
              outline
              color="accent"
              class="carousel-btn q-mr-xl"
              name="Button3"
              @click="finalize = false"
              >Back</q-btn
            >
            <q-btn
              color="accent"
              class="carousel-btn q-ml-lg"
              unelevated
              name="Button4"
<<<<<<< HEAD:quasar/src/pages/ListCardPage.vue
              @click="mint"
=======
              @click="submit"
>>>>>>> dec90baabce45ee047571494cc02a5092e3e743e:src/pages/ListCardPage.vue
              >Validate Card</q-btn
            >
          </div>
        </div>
      </div>
      <div class="col-1 full-height" v-if="!finalize">
        <progress-bar :slide-num="slide" />
      </div>
    </div>
    <div class="col-7 column bg-dark-cream" v-if="!finalize">
      <div class="col-10">
        <q-carousel
          v-model="slide"
          class="bg-transparent"
          ref="carousel"
          height="680px"
          ><q-carousel-slide name="1">
            <card-type />
          </q-carousel-slide>
          <q-carousel-slide name="2">
            <card-images v-model="cardImages" />
          </q-carousel-slide>
          <q-carousel-slide name="3"
            ><card-info v-model="cardDetails"
          /></q-carousel-slide>
          <q-carousel-slide name="4"
            ><card-tags v-model="cardTags"
          /></q-carousel-slide>
          <q-carousel-slide name="5"
            ><card-grade v-model="cardGrade"
          /></q-carousel-slide>
        </q-carousel>
      </div>

      <div class="col-1 row justify-between q-px-xl" v-if="carousel != null">
        <q-btn
          outline
          color="accent"
          class="carousel-btn"
          name="Button1"
          @click="carousel.previous()"
          v-if="slide !== `1`"
          >Back</q-btn
        >
        <q-space />
        <q-btn
          color="accent"
          class="carousel-btn"
          unelevated
          name="Button2"
          @click="slide !== '5' ? carousel.next() : (finalize = true)"
          >Next</q-btn
        >
      </div>
      <div
        class="col-1 column items-center self-stretch"
        v-if="slide === `1` || slide === '5'"
      >
        <div class="col-6"></div>
        <div class="col-6 bg-graded items-center justify-center">
          All cards must be graded or a 1-of-1
        </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
$graded-bg: #f5f2e6;
$graded-text: #514d40;
$preview-text: #fbf7ea;

.carousel-btn {
  width: 200px;
  height: 40px;
}

.warn-footer {
  bottom: 0;
  width: 100%;
}

.bg-graded {
  background-color: $graded-bg;
  color: $graded-text;
  width: 100%;
  text-align: center;
}

.big-text {
  font-family: 'JostOutlined', sans-serif;
  font-size: 180pt;
}

.text-dark-cream {
  color: $preview-text;
}
</style>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import CardType from 'src/components/ListCardPage/CardType.vue';
import CardImages from 'src/components/ListCardPage/CardImages.vue';
import CardInfo from 'src/components/ListCardPage/CardInfo.vue';
import CardTags from 'src/components/ListCardPage/CardTags.vue';
import CardGrade from '../components/ListCardPage/CardGrade.vue';
import ProgressBar from 'src/components/ListCardPage/ProgressBar.vue';
<<<<<<< HEAD:quasar/src/pages/ListCardPage.vue
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import 'firebase/firestore';
=======
import { doc, setDoc, getFirestore } from 'firebase/firestore';
>>>>>>> dec90baabce45ee047571494cc02a5092e3e743e:src/pages/ListCardPage.vue

export default defineComponent({
  setup() {
    const cardImages = ref([]);
    const cardDetails = ref<{
      name: string;
    }>({ name: '' });
    const cardTags = ref([]);
    const cardGrade = ref('');
    const cardApplication = computed(() => ({
      details: cardDetails.value,
      images: cardImages.value,
      tags: cardTags.value,
      grade: cardGrade.value,
    }));
    const finalize = ref(false);
    const imagePreview = ref('front');
    const carousel = ref(null);
    const slide = ref('1');
<<<<<<< HEAD:quasar/src/pages/ListCardPage.vue

    function mint() {
      addDoc(collection(getFirestore(), 'proposals'), {
        name: 'BSC-' + Date.now(),
        description: 'Michael Jordan #8',
        amount: '100000000',
      });
    }

    return { imagePreview, slide, carousel, finalize, mint };
=======
    const done = ref(false);
    const db = getFirestore();
    const submit = async () => {
      await setDoc(
        doc(db, 'card-applications', `${cardApplication?.value.details?.name}`),
        cardApplication.value
      );
      done.value = true;
    };
    return {
      imagePreview,
      slide,
      carousel,
      finalize,
      cardImages,
      cardApplication,
      cardGrade,
      cardDetails,
      cardTags,
      submit,
      done,
    };
>>>>>>> dec90baabce45ee047571494cc02a5092e3e743e:src/pages/ListCardPage.vue
  },
  components: {
    CardType,
    CardImages,
    CardInfo,
    CardTags,
    CardGrade,
    ProgressBar,
  },
});
</script>
