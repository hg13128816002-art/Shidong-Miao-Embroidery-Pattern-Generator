# 施洞苗绣纹样生成器

一个零依赖的交互网页原型，用来根据纹样元素、色板、构图和刺绣质感组合生成施洞苗绣风格的数字纹样。

## 本地运行

```bash
npm run dev
```

打开 `http://localhost:5173`。

普通静态服务只会运行前端页面；如果要在本地调试 AI 评分接口，请使用 Vercel 本地服务：

```bash
vercel dev
```

## 当前功能

- 9 类纹样元素：龙纹、鱼纹、蝴蝶纹、鸟纹、花纹、水涡纹、牛角纹、人物纹、枫香树纹
- 4 种构图：团花、连续、围腰、清水江
- 5 套色板：节庆红、清水江、母花素稿、银饰映红、姊妹节
- 4 种质感：双针锁绣感、破线绣感、叠绣感、织锦颗粒
- 随机生成、参数化分享链接、PNG 下载、AI 评分
- 用户反馈提交，反馈会写入 Vercel Function Logs
- 根据当前纹样组合展示文化说明

## AI 评分配置

AI 评分通过 Vercel Serverless Function 调用模型，API key 只配置在服务端环境变量中，不要写进前端代码。

本地调试可复制 `.env.example` 为 `.env.local`，然后填写：

```bash
OPENAI_API_KEY=你的_API_Key
OPENAI_MODEL=gpt-4.1-mini
OPENAI_BASE_URL=https://api.openai.com/v1
```

如果使用的是 OpenAI 兼容接口，把 `OPENAI_BASE_URL` 和 `OPENAI_MODEL` 改成服务商提供的地址和模型名即可。

Novita 示例：

```bash
OPENAI_API_KEY=你的_Novita_API_Key
OPENAI_MODEL=qwen/qwen3-vl-8b-instruct
OPENAI_BASE_URL=https://api.novita.ai/openai/v1
```

## 上线方式

这是静态网页，可以直接部署到 Vercel、Netlify、GitHub Pages 或任意静态托管服务。

Vercel 推荐设置：

- Framework Preset: `Other`
- Build Command: 留空
- Output Directory: `.`
- Environment Variables: 添加 `OPENAI_API_KEY`，可选添加 `OPENAI_MODEL`、`OPENAI_BASE_URL`

## 查看用户反馈

用户在网页里提交反馈后，内容会写入 Vercel 后台日志。查看路径：

`Vercel 项目 → Logs`，搜索：

```text
[USER_FEEDBACK]
```

当前方案不需要数据库，适合先收集测试反馈；如果后续需要长期留存，可以再接入数据库、飞书或邮箱通知。

## 文化与版权说明

当前图案是基于施洞苗绣常见题材、构图和针法质感的数字化再创作，不等同于传统母花本原件或传承人作品。后续如需商业化定制，建议接入传承人授权纹样包、实物调研资料和明确的版权标注。
