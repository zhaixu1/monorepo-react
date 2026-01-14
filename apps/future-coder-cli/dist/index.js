"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  runCLI: () => runCLI
});
module.exports = __toCommonJS(index_exports);

// src/cli.ts
var import_commander2 = require("commander");

// src/commands/base/info.ts
var import_picocolors = __toESM(require("picocolors"));

// package.json
var package_default = {
  name: "future-coder-cli",
  version: "1.0.0",
  description: "zx\u811A\u624B\u67B6",
  keywords: ["future-coder-cli"],
  main: "dist/index.js",
  types: "dist/index.d.ts",
  files: [
    "dist",
    "lib",
    "template"
  ],
  bin: {
    "future-coder-cli": "bin/future.js"
  },
  scripts: {
    dev: "tsup src/index.ts --watch",
    build: "tsup",
    release: "pnpm build && pnpm publish",
    "release:patch": "pnpm version patch && pnpm release",
    "release:minor": "pnpm version minor && pnpm release",
    "release:major": "pnpm version major && pnpm release"
  },
  author: "zx",
  license: "ISC",
  dependencies: {
    "@types/fs-extra": "^11.0.4",
    "@types/prompts": "^2.4.9",
    commander: "^14.0.2",
    consola: "^3.4.2",
    "fs-extra": "^11.3.0",
    giget: "^2.0.0",
    ora: "^5.4.1",
    picocolors: "^1.1.1",
    prompts: "^2.4.2",
    tsup: "^8.5.0"
  }
};

// src/commands/base/info.ts
var info = (program3) => {
  return program3.command("info").description("\u663E\u793A\u9879\u76EE\u4FE1\u606F").argument("[string]", "\u53EF\u9009\u7684\u5B57\u7B26\u4E32\u53C2\u6570").option("--first").option("-s, --separator <char>", "\u5206\u9694\u7B26").action((str, options, command) => {
    console.log(import_picocolors.default.green("\u9879\u76EE\u4FE1\u606F"));
    console.log(import_picocolors.default.blue("\u7248\u672C\u53F7: " + package_default.version));
    console.log(import_picocolors.default.blue("\u4F5C\u8005: " + package_default.author));
    if (str) {
      console.log(import_picocolors.default.cyan(`\u4F4D\u7F6E\u53C2\u6570 string: ${str}`));
    }
    if (options.separator) {
      console.log(import_picocolors.default.yellow(`\u63A5\u6536\u5230\u7684\u5206\u9694\u7B26\u53C2\u6570: ${options.separator}`));
    }
  });
};

// src/commands/base/create.ts
var import_path4 = __toESM(require("path"));
var import_picocolors4 = __toESM(require("picocolors"));
var import_prompts = __toESM(require("prompts"));
var import_ora = __toESM(require("ora"));

// src/utils/path.ts
var import_path = __toESM(require("path"));
var import_picocolors2 = __toESM(require("picocolors"));
function getTemplatesDir() {
  try {
    if (typeof __dirname !== "undefined") {
      console.log(import_picocolors2.default.bgYellow("__dirname: ") + __dirname);
      return import_path.default.resolve(__dirname, "../templates");
    }
  } catch {
  }
  const cwd = process.cwd();
  const possibleTemplatesDir = import_path.default.resolve(cwd, "templates");
  return possibleTemplatesDir;
}
function getProjectRoot() {
  return process.cwd();
}
function resolveTargetPath(targetPath) {
  if (import_path.default.isAbsolute(targetPath)) {
    return targetPath;
  }
  return import_path.default.resolve(getProjectRoot(), targetPath);
}
async function pathExists(filePath) {
  try {
    const fs3 = await import("fs-extra");
    return await fs3.pathExists(filePath);
  } catch {
    return false;
  }
}

// src/utils/fs.ts
var import_fs_extra = __toESM(require("fs-extra"));
async function isEmptyDir(dirPath) {
  if (!await import_fs_extra.default.pathExists(dirPath)) {
    return true;
  }
  const files = await import_fs_extra.default.readdir(dirPath);
  return files.length === 0;
}
async function ensureDir(dirPath) {
  await import_fs_extra.default.ensureDir(dirPath);
}

// src/utils/template.ts
var import_fs_extra2 = __toESM(require("fs-extra"));
var import_path2 = __toESM(require("path"));
var import_picocolors3 = __toESM(require("picocolors"));
function getTemplatePath(templateName) {
  return import_path2.default.resolve(getTemplatesDir(), templateName);
}
async function templateExists(templateName) {
  const templatePath = getTemplatePath(templateName);
  return await import_fs_extra2.default.pathExists(templatePath);
}
async function getAvailableTemplates() {
  const templatesDir = getTemplatesDir();
  console.log(import_picocolors3.default.bgYellow("\u83B7\u53D6\u5230\u7684\u8DEF\u5F84\u662F: ") + templatesDir);
  if (!await import_fs_extra2.default.pathExists(templatesDir)) {
    return [];
  }
  const entries = await import_fs_extra2.default.readdir(templatesDir, { withFileTypes: true });
  return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
}
function replaceTemplateVars(content, vars) {
  let result = content;
  for (const [key, value] of Object.entries(vars)) {
    const regex = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, "g");
    result = result.replace(regex, value);
  }
  return result;
}
async function processTemplateFile(filePath, vars) {
  const content = await import_fs_extra2.default.readFile(filePath, "utf-8");
  return replaceTemplateVars(content, vars);
}
async function processTemplateDir(srcDir, destDir, vars) {
  await import_fs_extra2.default.ensureDir(destDir);
  const entries = await import_fs_extra2.default.readdir(srcDir, { withFileTypes: true });
  const keepHiddenFiles = [".gitignore", ".eslintrc", ".prettierrc", ".editorconfig", ".npmrc"];
  for (const entry of entries) {
    const srcPath = import_path2.default.join(srcDir, entry.name);
    let destPath = import_path2.default.join(destDir, replaceTemplateVars(entry.name, vars));
    if (entry.name.startsWith(".")) {
      if (entry.isDirectory()) {
        continue;
      }
      if (entry.isFile() && !keepHiddenFiles.includes(entry.name)) {
        continue;
      }
    }
    if (entry.isDirectory()) {
      await processTemplateDir(srcPath, destPath, vars);
    } else if (entry.isFile()) {
      const content = await processTemplateFile(srcPath, vars);
      await import_fs_extra2.default.writeFile(destPath, content, "utf-8");
    }
  }
}

// src/constants/index.ts
var TEMPLATES = {
  "react-vite": "React + Vite \u9879\u76EE\u6A21\u677F",
  "vue-vite": "Vue + Vite \u9879\u76EE\u6A21\u677F",
  "node-ts": "Node.js + TypeScript \u9879\u76EE\u6A21\u677F"
};

// src/commands/base/create.ts
var create = (program3) => {
  return program3.command("create [project-name]").description("\u521B\u5EFA\u4E00\u4E2A\u65B0\u9879\u76EE").option("-t, --template <template>", "\u6307\u5B9A\u6A21\u677F\u540D\u79F0").option("-f, --force", "\u5F3A\u5236\u8986\u76D6\u5DF2\u5B58\u5728\u7684\u76EE\u5F55").action(async (projectName, options) => {
    try {
      if (!projectName) {
        console.error(import_picocolors4.default.red("\u9519\u8BEF: \u8BF7\u63D0\u4F9B\u9879\u76EE\u540D\u79F0"));
        process.exit(1);
      }
      const targetPath = resolveTargetPath(projectName);
      console.log(import_picocolors4.default.bgYellow("targetPath: ") + targetPath);
      const targetDirName = import_path4.default.basename(targetPath);
      const exists = await pathExists(targetPath);
      if (exists && !options.force) {
        const isEmpty = await isEmptyDir(targetPath);
        if (!isEmpty) {
          const { overwrite } = await (0, import_prompts.default)({
            type: "confirm",
            name: "overwrite",
            message: `\u76EE\u5F55 ${import_picocolors4.default.yellow(targetPath)} \u5DF2\u5B58\u5728\u4E14\u4E0D\u4E3A\u7A7A\uFF0C\u662F\u5426\u8986\u76D6\uFF1F`,
            initial: false
          });
          if (!overwrite) {
            console.log(import_picocolors4.default.yellow("\u64CD\u4F5C\u5DF2\u53D6\u6D88"));
            process.exit(0);
          }
        }
      }
      const availableTemplates = await getAvailableTemplates();
      if (availableTemplates.length === 0) {
        console.error(import_picocolors4.default.red("\u9519\u8BEF: \u6CA1\u6709\u627E\u5230\u53EF\u7528\u7684\u6A21\u677F"));
        console.log(import_picocolors4.default.yellow("\u63D0\u793A: \u8BF7\u5728 templates \u76EE\u5F55\u4E2D\u521B\u5EFA\u6A21\u677F"));
        process.exit(1);
      }
      let templateName = options.template || "";
      if (!templateName) {
        const templateChoices = availableTemplates.map((name) => {
          const description2 = TEMPLATES[name] || name;
          return {
            title: `${import_picocolors4.default.cyan(name)} - ${description2}`,
            value: name
          };
        });
        const { selectedTemplate } = await (0, import_prompts.default)({
          type: "select",
          name: "selectedTemplate",
          message: "\u8BF7\u9009\u62E9\u6A21\u677F",
          choices: templateChoices
        });
        if (!selectedTemplate) {
          console.log(import_picocolors4.default.yellow("\u64CD\u4F5C\u5DF2\u53D6\u6D88"));
          process.exit(0);
        }
        templateName = selectedTemplate;
      }
      if (!templateName || !await templateExists(templateName)) {
        console.error(import_picocolors4.default.red(`\u9519\u8BEF: \u6A21\u677F ${templateName || "(\u672A\u6307\u5B9A)"} \u4E0D\u5B58\u5728`));
        console.log(import_picocolors4.default.yellow(`\u53EF\u7528\u6A21\u677F: ${availableTemplates.join(", ")}`));
        process.exit(1);
      }
      const { description, author } = await (0, import_prompts.default)([
        {
          type: "text",
          name: "description",
          message: "\u9879\u76EE\u63CF\u8FF0",
          initial: `A ${templateName} project`
        },
        {
          type: "text",
          name: "author",
          message: "\u4F5C\u8005",
          initial: ""
        }
      ]);
      const spinner = (0, import_ora.default)("\u6B63\u5728\u521B\u5EFA\u9879\u76EE...").start();
      try {
        await ensureDir(targetPath);
        const templatesDir = getTemplatesDir();
        const templatePath = import_path4.default.resolve(templatesDir, templateName);
        const templateVars = {
          projectName: targetDirName,
          description: description || "",
          author: author || "",
          version: "1.0.0"
        };
        await processTemplateDir(templatePath, targetPath, templateVars);
        spinner.succeed(import_picocolors4.default.green("\u9879\u76EE\u521B\u5EFA\u6210\u529F\uFF01"));
      } catch (error) {
        spinner.fail(import_picocolors4.default.red("\u9879\u76EE\u521B\u5EFA\u5931\u8D25"));
        console.error(error);
        process.exit(1);
      }
      console.log("\n" + import_picocolors4.default.green("\u4E0B\u4E00\u6B65:"));
      console.log(import_picocolors4.default.blue(`  cd ${targetDirName}`));
      console.log(import_picocolors4.default.blue("  pnpm install"));
      console.log(import_picocolors4.default.blue("  pnpm dev"));
    } catch (error) {
      if (error.message === "User force closed the prompt") {
        console.log(import_picocolors4.default.yellow("\n\u64CD\u4F5C\u5DF2\u53D6\u6D88"));
        process.exit(0);
      }
      console.error(import_picocolors4.default.red("\u53D1\u751F\u9519\u8BEF:"), error.message);
      process.exit(1);
    }
  });
};

// src/commands/registerCommand.ts
var import_commander = require("commander");
var registerCommand = (fn) => {
  const command = fn(import_commander.program);
  return command;
};

// src/commands/index.ts
registerCommand(info);
registerCommand(create);

// src/cli.ts
var import_picocolors5 = __toESM(require("picocolors"));
var runCLI = () => {
  console.log(import_picocolors5.default.green("\u542F\u52A8 future-coder-cli"));
  console.log(import_picocolors5.default.blue("\u53C2\u6570\u662F\uFF1A" + process.argv));
  import_commander2.program.parse(process.argv);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  runCLI
});
