import { Command } from "commander";

import pc from "picocolors";

import pkg from "../../../package.json";

export const info = (program: Command) => {
  return program
    .command("info") // 注册命令
    .description("显示项目信息") // 描述命令
    .argument('[string]', '可选的字符串参数') // 将 argument 改为可选，方便测试
    .option('--first')
    .option('-s, --separator <char>', '分隔符') // 添加描述
    .action((str, options, command) => { // 明确参数列表
      console.log(pc.green("项目信息"));
      console.log(pc.blue("版本号: " + pkg.version));
      console.log(pc.blue("作者: " + pkg.author));
      
      // 打印位置参数
      if (str) {
         console.log(pc.cyan(`位置参数 string: ${str}`));
      }

      // 打印选项参数 --separator
      if (options.separator) {
        console.log(pc.yellow(`接收到的分隔符参数: ${options.separator}`));
      }
      
      // 打印完整 options 对象用于调试
      // console.log("所有选项:", options);
    })

    //  node .\bin\future.js info zx 123
    // .version(pkg.version)
    // .argument('<username>', '用户名')
    // .argument('[password]', '密码')
    // .action((username, password) => {
    //   console.log(pc.green("用户名: ") + username)
    //   console.log(pc.green("密码: ") + password)
    // })
};
