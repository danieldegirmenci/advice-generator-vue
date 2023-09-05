<template>
  <div class="all">
    <div class="container">
      <div class="advice" v-if="advice">{{ advice }}</div>
      <div class="id" v-if="advice">{{ adviceID }}</div>
    </div>



    <input class="input" type="text" inputmode="numeric" pattern="\d*" v-model="userInput" maxlength="3"
      @keyup.enter="adviceData(userInput)" :class="{ 'error': hasError }">
      

      <div class="error-message" v-if="hasError">Enter a valid id</div>


  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'AdviceFromID',

  data() {
    return {
      userInput: null,
      advice: "",
      adviceID: 0,
      hasError: false,

    }
  },
  methods: {

    adviceData(userInput) {
      if (userInput < 225 && userInput > 0 && userInput != 22) {

        this.adviceID = this.userInput;
        this.userInput = null;
        this.hasError = false;

      }
      else {
        this.userInput = null;
        this.hasError = true;

      }
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
           this.adviceID =23;
           this.hasError = false;

         }
         else {
          this.adviceID = 21;
          this.hasError = false;

         }
       }
       else {
         this.adviceID = null;
         this.advice="";
         this.hasError = true;

       }
      

            
      
        

      
    }


  },
  watch: {
    adviceID() {

      const adviceFromidURL = "https://api.adviceslip.com/advice/" + this.adviceID;

      axios.get(adviceFromidURL)
        .then(response => {
          this.advice = response.data.slip.advice;
          this.hasError = false;

        })
        .catch(error => {
          console.log(error);
        })
    }
    ,
  }

}


</script>

<style>
@import '@/assets/ID.css';
</style>