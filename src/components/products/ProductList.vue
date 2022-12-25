<template>
  <div class="container">
        <div class="row">
            <div class="col-12 mb-5 card mt-5 shadow">
                <div class="card-body">
                    <h3>Product List</h3>
                    <hr>
                    <table class="table table-hover table-striped table-bordered" v-if="getProducts.length>0">
                        <thead>
                        <th>id</th>
                        <th>Product Name</th>
                        <th>Total</th>
                        <th>Price</th>
                        <th>Explanation</th>
                        </thead>
                        <tbody>
                        <tr v-for="product in getProducts" :key="product.key">
                            <td class="align-middle text-center"><span class="badge bg-info"> {{ product.key }} </span></td>
                            <td class="align-middle text-center"> {{ product.title }} </td>
                            <td class="align-middle text-center" :class="getCountClasses(product.count)"> {{ product.count }} </td>
                            <td style="width: 120px;"> {{ filters.formatMoney(product.price) }}</td>
                            <td class="align-middle"> {{ product.description }}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="alert alert-warning" v-else>
                        <strong>We haven't found any records here yet</strong>
                        <br>
                        <small>Go to the product operations menu for add product.
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default{
        computed:{
            ...mapGetters([ "getProducts" ]),
        },
        methods:{
            getCountClasses(count){
                return{
                    'bg-info text-white': count >= 3,
                    'bg-danger text-white': count < 3 || count == null
                }
            }
        }
    }
</script>

<style>

</style>