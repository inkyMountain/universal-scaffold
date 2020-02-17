
import {local} from './localStore';
import {temp}  from './tempStore';

const basic = {
    namespaced: true,
    state: {
    },
    mutations: {
    },
    actions: {
    }
};

export const {{pageName}} = {
    namespaced: true,
    modules: {
        basic,
        local,
        temp
    }
};
