import Vue from 'vue';
import filters from './filter';
export function init() {
    return new Promise((resolve, reject) => {
        for(var key in filters) {
            Vue.filter(key, filters[key]);
        }  
        resolve();
    })
}