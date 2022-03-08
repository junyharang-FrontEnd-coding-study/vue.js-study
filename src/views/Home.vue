<template>
    <div>
        <h1>Welcome to JunyHarang {{title}}</h1>
      <input type="text" v-model="input1" />
      <button type="button" @click="getData">Get</button>
      <button type="button" @click="setData">Set</button>
    </div>
</template>

<script>
export default {
    data() {
      return {
        title: "주니하랑의 Vue.js 공부",
        title2: "나만의 웹 사이트 만들기!",
        input1: "주니하랑",
      };
    },
  methods: {
      getData() {
        alert(this.input1);
      },
      setData() {
        this.input1 = "12345";
      },
  },
  beforeCreate() {
      console.log("beforeCreate")
  },
  created() {
    console.log("created")
  },
  beforeMount() {
    console.log("beforeMount")
  },
  mounted() {
    console.log("mounted")
  },
  beforeUpdate() {
    console.log("beforeUpdate")
  },
  updated() {
    console.log("updated")
  },
  beforeDestroy() {
    console.log("beforeDestroy")
  },
  destroyed() {
    console.log("destroyed")
  }
};
</script>