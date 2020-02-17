import Metalsmith from 'metalsmith';
import Handlebars from 'handlebars';
import path from 'path';

// eg. [pageName] -> [pageName]20200217
function appendTime(pageName: string) {
  const today = new Date();
  return `${pageName}${
    today.getFullYear()
  }${
    today.getMonth() <= 9 ? `0${today.getMonth() + 1}` : `${today.getMonth() + 1}`
  }${
    today.getDate() <= 9 ? `0${today.getDate()}` : today.getDate()
  }`;
}

const transpileTemplate = (pageName: string, config: Config) => {
  /*
  * 读取本项目的src/template目录下的所有文件，
  * 替换文件名以及文件内容中 {{pageName}} 形式的关键字，
  * 输出到h5-jollymart/src/views/[pageName]文件夹中。
  * */
  return new Promise((resolve, reject) => {
    const processedPageName = config.appendTime
                              ? appendTime(pageName) : pageName;

    const outputPath = path.resolve(
      process.cwd(),
      config.output || '/src/views',
      processedPageName
    );

    Metalsmith(path.resolve(__dirname))
      .source(path.resolve(__dirname, 'template', config.template || ''))
      .destination(outputPath)
      .clean(true)
      .use(
        (files, metalsmith, done) => {
          // 需要替换的关键字, 例如{{pageName}}。
          const needReplace = {
            ...config.variables,
            pageName: processedPageName
          };
          Object.keys(files).forEach((filename) => {
            // 替换文件内容
            try {
              // 图片等二进制文件会导致Handlebars文本解析失败，所以需要捕获。
              files[filename].contents = Handlebars.compile(
                files[filename].contents.toString()
              )(needReplace);
            } catch (error) {
              return;
            }
            // 替换文件名
            if (filename.indexOf('{{') !== -1) {
              const replacedFilename = Handlebars.compile(filename)(needReplace);
              if (replacedFilename in files) {
                throw new Error('pageName参数与template目录中文件名重合度过高。');
              }
              files[replacedFilename] = files[filename];
              delete files[filename];
            }
          });
          done(null, files, metalsmith);
        })
      .build((error, files, metalsmith) => {
        resolve(outputPath);
        error ? reject(error) : resolve('success');
      });
  });
};

export {
  transpileTemplate
};

interface Config {
  template?: string,
  output?: string,
  appendTime?: boolean,
  variables?: { [key: string]: string }
}
