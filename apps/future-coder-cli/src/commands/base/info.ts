import { Command } from "commander";

import pc from "picocolors";

import pkg from "../../../package.json";

export const info = (program: Command) => {
  return program
    .command("info")
    .description("显示项目信息")
    .action(() => {
      console.log(pc.green("项目信息"));
      console.log(pc.blue("版本号: " + pkg.version));
      console.log(pc.blue("作者: " + pkg.author));
    });
};
