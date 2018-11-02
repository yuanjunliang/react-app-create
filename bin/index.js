#!/usr/bin/env node
const program = require('commander');
const download = require('download-git-repo');
const ora = require('ora');
const chalk = require('chalk');
const symbols = require('log-symbols');

const spinner = ora('start create fibos dapp')

program.version('1.0.0', '-v, --version')
       .command('init <name>')
       .action((name) => {
          spinner.start()
          download('direct:https://github.com/yuanjunliang/react-create.git', 'test/tmp', {clone: true}, (err) => {
              if(err){
                spinner.fail('create fibos dapp failed')
              }else{
                spinner.succeed('create fibos dapp success')
              }
          })
       });
program.parse(process.argv);