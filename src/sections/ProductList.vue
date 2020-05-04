<template>
    <div class="products" id="products">
        <div class="container">
            <h1 class="text-center p-5">Our Products</h1>
            <div class="row">
                <div class="col-md-4 mt-5" v-for="(product, index) in products" :key="index">
                    <div class="card product-item">
                        <carousel :perPage="1">
                            <slide v-for="(image, number) in product.images" :key="number">
                                <img :src="image" class="card-img-top" alt="..." width="250px" height="300px">
                            </slide>
                        </carousel>
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h5 class="card-title">{{ product.name }}</h5>
                                <h5 class="card-priceS"><strong>{{ product.price | currency }}</strong></h5>
                            </div>
                            <add-to-cart
                                    :image="getImage(product.images)"
                                    :product-id="product.id"
                                    :price="product.price"
                                    :name="product.name">
                            </add-to-cart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {db} from '../firebase';

    export default {
        name: "ProductList",
        data() {
            return {
                products: [],
            }
        },
        firestore() {
            return {
                products: db.collection('products'),
            }
        },
        methods: {
            getImage(images) {
                return images[0];
            }
        }
    }
</script>

<style scoped lang="scss">
    .products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }
</style>