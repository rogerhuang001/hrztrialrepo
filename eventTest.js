// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 使用匿名函数绑定 connection 事件
eventEmitter.on('connection', function(){
   console.log('connected。');
   eventEmitter.emit('data_received');
});


// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
   console.log('数据接收成功。');
});


eventEmitter.emit('connection');

