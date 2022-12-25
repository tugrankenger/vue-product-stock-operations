<template>
  <div>
    <app-header></app-header>
    <transition name="bounce" appear>
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'
export default{
  components:{
    appHeader : Header,
    appFooter: Footer,
  },
  created(){
    this.$store.dispatch('getTradeResult')
  }
}
</script>
 
<style>
  .bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
  /* position: absolute; */
}
.bounce-move{
  transition: transform 1s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>