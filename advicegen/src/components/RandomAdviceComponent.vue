<template>
  <div class="all">


    <div class="advice" v-if="adviceText.length > 0">{{ adviceText }}</div>
    <div class="id" v-if="adviceID > 0">{{ adviceID }}</div>




    <div class="image-container">
      <img :class="['dice', classes]" @click="getAdvice" src="../assets/dice.png" alt="Dice">

    </div>





  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'RandomAdvice',
  data() {
    return {
      adviceText: '',
      classes: "",
      adviceID: "0",
    }
  },
  methods: {

    getAdviceData() {
      axios.get("https://api.adviceslip.com/advice")
        .then(response => {
          this.adviceText = response.data.slip.advice;
          this.adviceID = response.data.slip.id;
        }).catch(error => {
          console.log(error);
        })
    },
    shakeDice() {

      this.classes = 'shake-animation';
      setTimeout(() => {
        this.classes = '';
      }, 800);
    },
    getAdvice() {
      this.shakeDice();
      this.getAdviceData();

    },
    updateID(type) {
      if (type === "increment" && this.adviceID < 224 && this.adviceID != 21) {
        this.adviceID++;
      }
      else if (type === "decrement" && this.adviceID > 1 && this.adviceID != 23) {
        this.adviceID--;
      }
      else if (this.adviceID == 21 && type === "increment" || this.adviceID == 23 && type === "decrement") {
        if (type === "increment") {
          this.adviceID += 2;
        }
        else {
          this.adviceID -= 2;
        }
      }
      else {
        if (this.adviceID == 1) {
          this.adviceID = 224;
        }

        else this.adviceID = 1;
      }
    }

  },
  watch: {
    adviceID() {
      const adviceFromidURL = "https://api.adviceslip.com/advice/" + this.adviceID;

      axios.get(adviceFromidURL)
        .then(response => {
          this.adviceText = response.data.slip.advice;
        }).catch(error => {
          console.log(error);
        })
    },
  }

}
</script>

<style>
@import '@/assets/Random.css';
</style>
