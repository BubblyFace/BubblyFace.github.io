# node sql ploblem

## ORM

使用库`typeorm`采用标准，ts 支持度。但没有进行库对比。

### 遇到问题

1. 数据库连接报错
   ```
   Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
   ```
   解法： [stackoverflow](https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server)

2) 密码错误
   重置后，重新创建了一波
