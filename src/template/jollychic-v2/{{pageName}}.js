
import {mapState}   from 'vuex';
import {Interfaces} from './interface';

export default {
    data () {
        return {}
    },
    computed: {
        ...mapState({
            pageInfo: state => state.pageInfo
        })
    },
    created () {
    },
    methods: {
    },
    watch: {
        '$route' (to, from) {
        }
    }
};
