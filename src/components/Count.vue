<template>
    <div>
        <p>{{msg}}</p>
        <p><button @click="$store.commit('add',10)">add</button><span class="red">{{count}}</span><button @click="$store.commit('reduce')">reduce</button></p>
        <p>
            <button @click="addAction">addAction</button>
            <button @click="reduceAction">reduceAction</button>
        </p>
    </div>
</template>
<script>
    import store from '@/vuex/store';
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    export default{
        data(){
            return{
                msg:'hello vuex'
            }
        },
        /*computed:{
            count(){
                return this.$store.state.count;
            }
        },*/
        computed:{
            ...mapState(['count']),// 映射 this.count 到 this.$store.state.count
            //...mapGetters(['count'])
        },
        methods:{
            ...mapMutations(['add','reduce']),//如何在这里传递参数
            ...mapActions(['addAction','reduceAction'])
        },
        store
    }
</script>


<style>
    .red{
        color: red;
        text-decoration: underline;
        padding: 0 10px;
    }
</style>