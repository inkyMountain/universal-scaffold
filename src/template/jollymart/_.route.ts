import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import {core} from '../../core';

'jollymart'

const PAGE_NAME = '{{pageName}}';

const initializeI18n = async () => {
  const i18nData = await import(/* webpackChunkName: "{{pageName}}" */ './language');
  await core.services.initializeI18n(PAGE_NAME, i18nData.default);
};

const initialize = (routeContext: RouteComponentProps) => {
  return new Promise(async (next) => {
    await initializeI18n();
    next();
  });
};

const conf = {
  path: '/{{pageName}}',
  exact: false,
  name: '{{pageName}}',
  component: React.lazy(() => import('./{{pageName}}')),
  initialize
};


export default conf;
