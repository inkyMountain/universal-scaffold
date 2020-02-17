
let urlParams  = {};
let userParams = {};
let testData   = {};

if (IS_DEV_COMPILE) {
    
    urlParams = {
        appVersion: '4.18.1',
        frm: '2',
        lang: '0',
        currentTime: '1532184526',
        countryCode: 'SA',
        currency: 'sar',
        appTypeId: '0',
        pkg: '0'
    };
    
    userParams = {
        userId: 648028403,
        isLogin: 1,
        alias: 'lw7',
        cookieId: 'JA44A8AF-BFF8-4081-A37F-A8EF8B8F08D9',
        mobile: '966512345619',
        sessionId: '3188C5F6C4244949AA176830AF12BADC',
        email: 'lw7@163.com',
        token: 'ki8dvySl8V0it4XSnBow/OWP3EKRwjQBnoGIrYFUs+wjmuzn6uL6fAQQ',
        userToken: 'thZGkUNnuPkYXnljV0uL2gQQ',
        pageViewId: '1799C030-7F7C-472F-982D-365CB72F40855',
        timestamp: 15327823074411
    };
    
    testData = {
        data: 1
    };
    
}

const test = {
    name: '{{pageName}}',
    devDebug: false,
    urlParams: {
        enable: true,
        obj: urlParams
    },
    userParams: {
        enable: true,
        obj: userParams
    },
    testData: {
        enable: true,
        obj: testData
    }
};

export {test};
