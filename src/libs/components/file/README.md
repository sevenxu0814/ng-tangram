## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| url | 属性：服务器地址 | `string` | -
| name | 属性：文件名称 | `string` | -
| maxFiles | 属性：文件数量 | `number` | 1
| maxSize | 属性：文件最大容量 | `number` | 5(MB)
| disabled | 属性：是否禁用 | `boolean` | false
| accept | 属性：支持文件类型 | `string` | *(请参考HTML input accept 属性)
| error | 事件：错误时触发 | `function` | -
