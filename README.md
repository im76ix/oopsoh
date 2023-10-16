# oopsoh

[![NPM version](https://img.shields.io/npm/v/oopsoh?color=a1b858&label=)](https://www.npmjs.com/package/oopsoh)
[![NPM downloads](https://img.shields.io/npm/dm/oopsoh.svg?style=flat)](https://www.npmjs.com/package/oopsoh)

> 相信经常使用`uniapp`的童鞋们对提示跳转真的是又爱又恨，为什么这么说呢，因为我们在使用`uni.showToast`的过程中又写了`uni.navigateTo`之后，会发现，提示几乎是一闪而过，再比如提交表单，提交完成需要先为用户提示是否成功之后再进行跳转。

## 通常解决办法

```typescript
uni.showToast({
  title: 'hello world',
  duration: 2000,
})

setTimerout(() => {
  uni.navigateTo({
    url: '/pages/index/index',
  })
}, 2000)
```

> 通常我们都会这样写来阻止立马跳转，但是！但凡有那么一 nainai 的代码洁癖都不允许写出这么啰嗦且不优雅的代码。那么，oopsoh 来了，没错，他来了哈哈哈

---

**`oopsoh`**

## 安装

> `npm i oopsoh`

## 导入

```typescript
import { Oops } from 'oopsoh'
```

## 使用

0. 类型介绍

```typescript
interface Oops {
  oh(msg: string, options?: Options, func: () => void)
}
```

1. 简单提示

```typescript
Oops.oh('hello world')
```

2. 带图标的提示

```typescript
Oops.oh('hello world', { ico: 'success' })
```

3. 提示完成后跳转页面
   > 只需要在`oh`函数第三个参数中传入一个函数，当提示完成之后即可自动跳转，假如你需要自定义提示时间，请往下看参数介绍

```typescript
Oops.oh('提示信息', { ico: 'success' }, () => {
  To.go('/pages/home/index', { type: 'switchTab' }) // 页面跳转
})
```

4. 参数介绍
   - `ico` `?:` "success" | "error" | "loading" | "none" 默认 none
   - `duration` `?:number` 默认`1500ms` 提示停留时间
   - `mask` `?:boolean` 默认 false 提示中是否允许点击遮罩层
   - `image` `?:string` 展示自定义图片
   - `success` `?: () => void` 成功回调，一般用不到
   - `fail` `?: () => void` 失败回调，一般用不到
