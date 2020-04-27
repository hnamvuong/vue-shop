<template>
    <div class="chekout">
        <Navbar></Navbar>
        <div class="container mt-5 pt-5">
            <div class="row">
                <table class="table table-borderless">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th scope="col">Items</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in this.$store.state.cart" :key="index">
                        <td>
                            <span @click="$store.commit('removeFromCart',item)" class="btn btn-danger remove-item">Delete</span>
                        </td>
                        <td>
                            <img :src="item.productImage" alt style="width:100px">
                            {{item.productName}}
                        </td>
                        <td style="width: 180px">
                            <div class="center">
                                <div class="input-group">
                                    <span class="input-group-btn">
                                        <button type="button" class="btn btn-danger"
                                                @click="decreaseQty(item.productId)">
                                            <i class="fas fa-minus"></i>
                                        </button>
                                    </span>
                                    <input type="text" :value="item.productQuantity"
                                           class="form-control input-number text-center">
                                    <span class="input-group-btn">
                                          <button type="button" class="btn btn-success"
                                                  @click="increaseQty(item.productId)">
                                            <i class="fas fa-plus"></i>
                                          </button>
                                        </span>
                                </div>
                            </div>
                        </td>
                        <td>
                            {{item.productPrice}}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Checkout",
        methods: {
            increaseQty(id) {
                this.$store.commit('increment', id)
            },
            decreaseQty(id) {
                this.$store.commit('decrement', id)
            }
        },
    }
</script>

<style scoped lang="scss">
    .center {
        margin: 40px auto;
    }
</style>