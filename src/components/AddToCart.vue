<template>
    <div class="add-to-cart">
        <button class="btn btn-primary" @click="addToCart"> Add to Cart</button>
    </div>
</template>

<script>
    import $ from 'jquery';

    export default {
        name: "AddToCart",
        props: {
            name: String,
            price: String,
            image: String,
            productId: String
        },
        data() {
            return {
                item: {
                    productName: this.name,
                    productPrice: this.price,
                    productImage: this.image,
                    productId: this.productId,
                    productQuantity: 1,
                }
            }
        },
        methods: {
            addToCart(){
                $('#miniCart').modal('show');
                this.$store.commit('addToCart', this.item)
            }
        }
    }
</script>

<style scoped>

</style>