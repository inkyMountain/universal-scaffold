
import {API} from '@/config/api/index';
import store from '@/store';

const HOST = API(store.state.pageInfo.urlParams).host;
const Interfaces = {
    xxx: HOST.CONFIG_BASE_URL8.ORIGIN + '/xxx.do'
};
export {Interfaces};
