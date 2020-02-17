import * as React from 'react';
import './{{pageName}}.scss';
import {
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import * as init from 'react-intl-universal';
import {inject} from 'mobx-react';
import {core} from '../../core';

interface IProps {
}

function rShow(flag: boolean) {
  return flag ? '' : 'hidden';
}

// 初始化App通信服务
const jsBridge = new core.services.ClientBridgeService();

const debounce = (fn: any, timeout: number) => {
  let timer: NodeJS.Timeout | null;
  return (...params: any[]) => {
    return new Promise((resolve) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        timer = null;
        const result = fn.apply(null, params);
        result instanceof Promise ? result.then(value => resolve(value)) : resolve(result);
      }, timeout);
    });
  };
};

// 获取翻译
const hello = init.get('HELLO', {name: 'jollymart', where: 'hangzhou'});

const {{pageName}}: React.FunctionComponent<IProps> = (props) => {
  // States
  const [search, setSearch] = useState<string>('');
  const [safeTop, setSafeTop] = useState(0);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 获取IPhone的刘海高度，详见scss中的:root选择器。
    const safeTop = getComputedStyle(document.documentElement)
      .getPropertyValue("--safeTop")
    setSafeTop(+safeTop.replace('px', ''))

    // Do initialization here
  }, []);

  // Callbacks
  const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
  }, []);

  // 与App通信
  const onCancel = useCallback(async () => {
      await jsBridge.init({
        module: 'webView',
        descNum: 1,
        action: 'backToWeb',
        type: 'auto'
      });
    },
    [],
  );

  return (
    <div className="page-{{pageName}}">

    </div>
  );
};

export default inject('store')({{pageName}});
