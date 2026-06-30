import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products',  {
   state: () => {
        const products= {
            0:{
                id: 1,
                name: "Tomato",
                category: "Fruit",
                price: 200,
                availability: true,
                image: '/tomato.jpg'
            },
            1:{
                id: 2,
                name: "Bell Pepper",
                category: "Vegetable",
                price: 200,
                availability: true,
                image: '/bellpepper.jpg'
            },
            2:{
                id: 3,
                name: "Strawberry",
                category: "Fruit",
                price: 200,
                availability: true,
                image: '/strawberry.jpg'
            },
            3:{
                id: 4,
                name: "Sweet Potato",
                category: "Vegetable",
                price: 200,
                availability: true,
                image: '/sweetpotato.jpg'
            },
            4:{
                id: 5,
                name: "Cabbage",
                category: "Vegetable",
                price: 200,
                availability: true,
                image: '/cabbage.jpg'
            },
            5:{
                id: 6,
                name: "Apples",
                category: "Fruit",
                price: 200,
                availability: true,
                image: '/apple.jpg'
            },
            6:{
                id: 7,
                name: "Carrot",
                category: "Vegetable",
                price: 200,
                availability: true,
                image: '/carrot.jpg'
            },
            7:{
                id: 8,
                name: "Pineapple",
                category: "Fruit",
                price: 200,
                availability: true,
                image: '/pineapple.jpg'
            },
            8:{
                id: 9,
                name: "Wheat",
                category: "Grain",
                price: 200,
                availability: true,
                image: '/wheat.jpg'
            },
            9:{
                id: 10,
                name: "Beans",
                category: "Cereals",
                price: 200,
                availability: true,
                image: '/bean.jpg'
            },
        }
        const selectedProduct = ref(null)
       
        return{
            products, selectedProduct
        }
   },
   actions:{
        updaeSelectedProduct (payload){
            this.selectedProduct = payload
        }
       
   },
   persist: true,
}) // total 10 images