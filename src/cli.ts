#!/usr/bin/env node
import program from 'commander';
import ora from 'ora';
import inquirer from 'inquirer';
import packageJson from '../package.json';
import defaultConfig from './config';
import {transpileTemplate} from './app';

program.version(
  packageJson.version,
  '-v, --version',
  '显示应用版本'
);

program
  .option(
    '-t --template [template]',
    '模板来源 string'
  )
  .option(
    '-a --appendTime [appendTime]',
    '是否自动附加时间后缀 boolean'
  )
  .option(
    '-o --output [output]',
    '模板编译后输出的目录 string'
  );

program
  .command('create <pageName>')
  .description('创建一个新页面')
  .action(async (pageName: string) => {
    program.appendTime = program.appendTime === undefined
                         ? undefined : program.appendTime !== 'false';
    const config = {
      // 使命令行参数优先级 高于 config.ts
      ...defaultConfig,
      template: program.template || defaultConfig.template,
      output: program.output || defaultConfig.output,
      appendTime: program.appendTime === undefined
                  ? defaultConfig.appendTime : program.appendTime,
    };
    const answers = await confirm(
      ` 
采用 ${config.template} 模板,
自动附加时间后缀：${config.appendTime ? '已开启' : '关闭'}
输出目录为当前目录下的 ${config.output}
确认创建该页面吗?`,
      'config'
    );
    if (answers.config === false) return;

    const spinner = ora();
    spinner.text = '正在拼命创建新页面\n';
    spinner.start();
    transpileTemplate(pageName, config)
      .then((newPagePath) => {
        spinner.text = `创建成功，请查看该目录：${newPagePath}`;
        spinner.succeed();
      })
      .catch((error) => {
        spinner.text = '创建失败';
        spinner.fail();
        console.error(error);
      });
  });

program.parse(process.argv);

function confirm(message: string, name: string) {
  return inquirer.prompt({
    type: 'confirm',
    name,
    message,
  });
}
