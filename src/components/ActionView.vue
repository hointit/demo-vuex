<template>
  <div class="hello">
      <input type="number" v-model="count" placeholder="Please input number to increase or decrease"/>
    <ul>
      <li><button type="button" @click="increaseAppCounter()">Increase</button></li>
      <li><button type="button" @click="decreaseAppCounter()">Decrease</button></li>
    </ul>
    <ul>
      <li><button type="button" @click="resetAppCounter()">Reset</button></li>
    </ul>
  </div>
</template>

<script>
import { ACTION_APP_INCREMENT, ACTION_APP_DECREMENT, ACTION_APP_RESET } from './../store/app.store'
export default {
  name: 'ActionView',
  data: function(){
      return {
          count: 1
      }
  },
  methods: {
    increaseAppCounter: function(){
      this.$store.dispatch(ACTION_APP_INCREMENT, Number(this.count));
    },
    decreaseAppCounter: function(){
      this.$store.dispatch(ACTION_APP_DECREMENT, Number(this.count));
    },
    resetAppCounter: function(){
        this.$store.dispatch(ACTION_APP_RESET);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
