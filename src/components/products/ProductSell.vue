<template>
  <div class="container">
    <div class="loading" :style="isLoading">
        <div class="lds-ripple">
            <div></div>
            <div></div>
        </div>
    </div>
    <div class="row">
        <div class="col-6 offset-3 pt-3 card mt-5 shadow">
            <div class="card-body">
                <h3>Product Output</h3>
                <hr>
                <div class="form-group">
                    <label>Product Name</label>
                    <select class="form-control" v-model="selectedProduct" @change="productSelected" >
                        <option selected disabled>Please select a product</option>
                        <option  v-for="product in getProducts" :value="product.key" :key="product.key" :disabled="product.count < 2">{{ product.title }}</option>
                    </select>
                </div>
                <transition name="bounce" appear>
                    <div class="card mb-2 border border-danger" v-if="selectedProduct !== null">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 text-center">
                                <div class="mb-3">
                                    <span class="badge bg-info">Stock: {{ stock }}</span>&nbsp;
                                    <span class="badge bg-primary">Price: {{ filters.formatMoney(price) }} </span>
                                </div>
                                <p class="border border-warning p-2 text-secondary">{{ description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </transition>
                <div class="form-group">
                    <label>Total</label>
                    <input v-model="product_count" type="text" class="form-control" placeholder="Enter product count">
                </div>
                <hr>
                <button class="btn btn-primary" @click="save" :disabled="saveEnable">Save</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default{
        data(){
            return{
                selectedProduct : null,
                stock: '',
                price: '',
                description:'',
                product_count: null,
                saveButtonClicked: false
            }
        },  
        computed:{
            ...mapGetters(['getProducts']),
            saveEnable(){
                if(this.selectedProduct !==null && this.product_count > 0){
                    return false
                }else{
                    return true
                }
            },
            isLoading(){
                if(this.saveButtonClicked){
                    return {
                        display : 'block'
                    }
                }else{
                    return{
                        display : 'none'
                    }
                }
            }
        },
        methods:{
            productSelected(){
                let product = this.$store.getters.getProduct(this.selectedProduct)
                this.stock = product[0].count
                this.price = product[0].price
                this.description = product[0].description
                console.log(product[0])
            },
            save(){
                this.saveButtonClicked = true
                let product = {
                    key: this.selectedProduct,
                    count: this.product_count
                }
                this.$store.dispatch('sellProduct', product)
            }
        },
        beforeRouteLeave (to, from, next) {
            if((this.selectedProduct !==null || this.product_count > 0) && !this.saveButtonClicked ){
                if(confirm('There are unsaved data, do you want to exit?')){
                    next()
                }else{
                    next(false)
                }
            }
            next()
        }
    }
</script>

<style scoped>
  .border-danger {
            border-style: dashed !important;
        }

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