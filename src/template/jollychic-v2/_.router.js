
import {CORE} from '@/core/index';
import store  from '@/store';

const pageName    = '{{pageName}}';

// 设置测试配置数据
const setTestData = (path) => {
    CORE.viewsDebug(path);
};

// 加载语言文件
const loadLangFile = (to, next, path) => {
    const lang = CORE.langIntToStr(to.query);
    return CORE.loadLocalLangFile(path, lang);
};

// 发起页面BI与PV
const sendBIPV = (editionCode, urlParams) => {
    CORE.client.setWebViewData(urlParams).init('countly=1&module=pvevent&screenname=' + editionCode);
    CORE.client.setWebViewData(urlParams).init('countly=1&lcm=' + editionCode + '&module=bievent&name=features_view&ref=1');
};

// 构建当前组件路由
export const common = {
    path: pageName,
    component: r => require.ensure([], () => r(require('./{{pageName}}.vue')), 'jollychic.{{pageName}}'),
    async beforeEnter (to, from, next) {
        const path        = '/jollychic/{{pageName}}';
        const editionCode = CORE.getEditionCode(pageName, to.query);
        store.dispatch('pageInfo/editionCode', editionCode);
        store.dispatch('pageInfo/pagePath', path);
        CORE.webSiteTitle.set('jollychic' + pageName + 'title');
        await setTestData(path);
        await loadLangFile(to, next, path);
        await CORE.client.userState();
        sendBIPV(editionCode, to.query);
        next();
    }
};
