# Getting started

## Install

`npm i oopsoh`

## Setup

### Vue3

```typescript
import { Oops } from 'oopsoh'

// 简单使用
Oops.oh('hello world')

// 带图标的提示
Oops.oh('hello world', { ico: 'success' })

// 提示完成后跳转页面
Oops.oh('提示信息', { ico: 'success' }, () => {
  To.go('/pages/home/index', { type: 'switchTab' }) // 页面跳转
})
```

## Typescript definitions

Add the `oopsoh` types definition file to your tsconfig file.

```json
{
  "compilerOptions": {
    "types": ["oopsoh"]
  }
}
```
