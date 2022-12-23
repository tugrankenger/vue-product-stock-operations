<template>
  <nav class="navbar navbar-expand-lg navbar-dark px-3 bg-primary" style="background-color: #563F7A">
    <router-link tag="a" class="navbar-brand px-3" :to="{name: 'ProductList'}">Product List</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link tag="a" class="nav-link" :to="{name : 'ProductOperations'}">Product Operations</router-link>
            </li>
            <li class="nav-item">
                <router-link tag="a" class="nav-link" :to="{name: 'ProductOutput'}">Product Output</router-link>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>

</script>

<style>
    .router-link-active{
        background: #ffa500;
    }
</style>