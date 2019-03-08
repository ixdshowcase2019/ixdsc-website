import axios from 'axios';

const token = '?token=e5df434f6f6874a1647d16b5d1aaac'

export const state = () => ({
    //variables
    apiurl: 'http://data.hypertt.cloud/',
     //cockpit
     singles: [],
     collections: [],
})

export const actions = {
    /**
        cpCollection - Access Cockpit API and retrieve collections

        Author: hubert

        Modules: axios
        Reqs: GET (2)
        Param: slug
        Commit: pushSingle
    */
    async cpCollection({state, commit}, slug) {
        //console.log('apiCollection:\t' + slug);
        await Promise.all([
            axios.get(state.apiurl + 'cockpit/api/collections/collection/' + slug + token).then(({data}) => data),
            axios.get(state.apiurl + 'cockpit/api/collections/get/' + slug + token).then(({data}) => data)
        ]).then((preturns) => {commit('pushCollection',  { ...preturns[0], ...preturns[1], slug })});
    },
    /**
        cpSingle - Access Cockpit API and retrieve singles
        
        Author: hubert
        
        Modules: axios
        Reqs: GET
        Param: slug
        Commit: pushSingle
    */
    async cpSingle({state, commit, dispatch}, slug) {
        console.log('cpSingle dispatched');
        /*
        trying to reinsert specified slug into state object so that the getters can use the same slug without needing to define it in backend...
        commit('push', {data, slug}) doesnt seem to work
        */
        await axios.get(state.apiurl + 'cockpit/api/singletons/get/' + slug + token)
            .then(({data})=>commit('pushSingle', {data}))
    }
}

export const mutations = {
    pushSingle: (state, ob) => { state.singles.push(ob.data) },
    pushCollection: (state, obj) => { state.collections.push(obj) },
} 

export const getters = {
    getSingle: state => slug => state.singles.filter(s => s.slug == slug)[0],
    getCollection: state => slug => state.collections.filter(c => c.slug == slug)[0],
    apiurl: state => state.apiurl,
}



