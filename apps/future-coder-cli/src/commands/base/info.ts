import { Command } from "commander";

import pc from "picocolors";

import pkg from "../../../package.json";

export const info = (program: Command) => {
  return program
    .command("info") // 注册命令
    .description("显示项目信息") // 描述命令
    .action(() => { // 执行命令
      console.log(pc.green("项目信息")); // 打印项目信息
      console.log(pc.blue("版本号: " + pkg.version)); // 打印版本号
      console.log(pc.blue("作者: " + pkg.author)); // 打印作者
    });
};
