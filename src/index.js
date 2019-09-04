const fs = require("fs");
const program = require("commander");
const inquirer = require("inquirer");
const chalk = require("chalk");
const ora = require("ora");
const download = require("download-git-repo");
const { prompt } = require("./prompt");
const error = chalk.bold.red;
const url = "direct:https://github.com/wacjl/huge-util.git";
program
  .version("0.1.0", "-v, --vers", "output the current version")
  .command("create <name>")
  .action(name => {
    console.log(name);
    if (!fs.existsSync(name)) {
      inquirer.prompt(prompt).then(answers => {
        console.log(answers);
        const spinner = ora("正在下载,请稍等。");
        spinner.start();
        download(url, name, { clone: true }, err => {
          if (err) {
            spinner.fail();
            console.log(chalk.red(err));
          } else {
            spinner.succeed();
            console.log(chalk.green("项目创建成功"));
          }
        });
      });
    } else {
      console.log(error("项目已存在"));
    }
  });

program.parse(process.argv);
