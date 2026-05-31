#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { components, componentNames } from './components.js';

const server = new Server(
  {
    name: 'zxreact-components-mcp',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// 列出所有工具
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'list_components',
        description: '列出 zxreact-components 组件库中所有可用的组件名称和简介',
        inputSchema: {
          type: 'object',
          properties: {},
          required: [],
        },
      },
      {
        name: 'get_component_doc',
        description:
          '获取指定组件的详细文档，包括 Props 说明、类型、是否必填、默认值和描述',
        inputSchema: {
          type: 'object',
          properties: {
            component_name: {
              type: 'string',
              description: `组件名称，可选值: ${componentNames.join(', ')}`,
            },
          },
          required: ['component_name'],
        },
      },
      {
        name: 'get_component_example',
        description: '获取指定组件的完整代码示例',
        inputSchema: {
          type: 'object',
          properties: {
            component_name: {
              type: 'string',
              description: `组件名称，可选值: ${componentNames.join(', ')}`,
            },
          },
          required: ['component_name'],
        },
      },
    ],
  };
});

// 处理工具调用
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === 'list_components') {
    const list = componentNames
      .map((n) => `- **${n}**: ${components[n].description}`)
      .join('\n');

    return {
      content: [
        {
          type: 'text',
          text: `# zxreact-components 组件列表\n\n安装：\`npm install zxreact-components\`\n\n${list}`,
        },
      ],
    };
  }

  if (name === 'get_component_doc') {
    const componentName = (args as { component_name: string }).component_name;
    const doc = components[componentName];

    if (!doc) {
      return {
        content: [
          {
            type: 'text',
            text: `未找到组件 "${componentName}"。可用组件：${componentNames.join(', ')}`,
          },
        ],
        isError: true,
      };
    }

    const propsTable = doc.props
      .map((p) => {
        const required = p.required ? '✅ 必填' : '可选';
        const defaultVal = p.default ? `默认: \`${p.default}\`` : '';
        return `| \`${p.name}\` | \`${p.type}\` | ${required} | ${defaultVal} | ${p.description} |`;
      })
      .join('\n');

    const text = `# ${doc.name}

${doc.description}

## 引入方式
\`\`\`ts
${doc.importPath}
\`\`\`

## Props

| 属性 | 类型 | 是否必填 | 默认值 | 说明 |
|------|------|---------|--------|------|
${propsTable}
`;

    return {
      content: [{ type: 'text', text }],
    };
  }

  if (name === 'get_component_example') {
    const componentName = (args as { component_name: string }).component_name;
    const doc = components[componentName];

    if (!doc) {
      return {
        content: [
          {
            type: 'text',
            text: `未找到组件 "${componentName}"。可用组件：${componentNames.join(', ')}`,
          },
        ],
        isError: true,
      };
    }

    const text = `# ${doc.name} 代码示例

${doc.importPath}

\`\`\`tsx
${doc.example}
\`\`\`
`;

    return {
      content: [{ type: 'text', text }],
    };
  }

  return {
    content: [{ type: 'text', text: `未知工具: ${name}` }],
    isError: true,
  };
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('zxreact-components MCP Server 已启动');
}

main().catch((err) => {
  console.error('启动失败:', err);
  process.exit(1);
});
