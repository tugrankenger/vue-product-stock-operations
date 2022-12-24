<template>
  <nav class="navbar fixed-bottom  navbar-light" style="background-color: #e3f2fd;">
    <span class="navbar-text me-auto ms-3">
        <strong><a href="https://github.com/tugrankenger" target="_blank">/tugrankenger</a></strong> | Tugran Kenger
    </span>
    <span class="navbar-text my-lg-0 me-3">
        <strong>Purchase Amount : </strong>
        <span class="badge bg-danger">{{ getTradeResult.purchase }}</span>
    </span>
    <span class="navbar-text my-lg-0 me-3">
        <strong>Sales Amount : </strong>
        <span class="badge bg-success">{{ getTradeResult.sale }}</span>
    </span>
    <span class="navbar-text my-lg-0 me-3">
        <strong>Balance : </strong>
        <span class="badge bg-primary">{{ getTradeResult.balance }}</span>
    </span>
</nav>
</template>

<script>
import {mapGetters} from 'vuex'
    export default{
        computed:{
            ...mapGetters([
                'getTradeResult'
            ])
        }
    }
</script>

<style>

</style>