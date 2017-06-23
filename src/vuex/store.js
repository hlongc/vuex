import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    count:11
}

const mutations = {//负责处理改变状态
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count--;
    }
}

const getters = { //相当于一个过滤器的效果，对数据进行处理
    count:function(state){
        return state.count+=10;
    }
}

const actions = {
    addAction(context){
        context.commit('add',5);
    },
    reduceAction({commit}){
        commit('reduce');
    }
}

export default new Vuex.Store({
    state,mutations,getters,actions
})