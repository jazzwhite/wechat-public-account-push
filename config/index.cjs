/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxfe2d2310a8293c3f',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '8dfec0208659c5cffbe0d241f9026af9',

  CITY_1: '上海',
  CITY_2: '深圳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '可可爱爱宝儿',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oofmj6tLUqO30Ujaqf0LGLySiJmE',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'iuUigf-F7FIA1GUtijo49rjw3yf7nUZWHcidvnr5sHU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-08',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '可爱宝儿', year: '2001', date: '04-08',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '可爱宝儿', year: '2001', date: '04-08',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '02-27',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-08-02' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'oofmj6qlhtwgHu63g7svuB8ZNvbQ',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oofmj6qlhtwgHu63g7svuB8ZNvbQ',
    }
  ],

}

module.exports = USER_CONFIG

