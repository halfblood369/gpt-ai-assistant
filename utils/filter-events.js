import Event from '../app/models/event.js'

// 过滤客户端的消息，对群消息有选择的回复
const filterMessage = (messages) => (
  messages.filter(message => {
    message = new Event(message)
    if (message.isGroup) {
      return ['ai', 'gpt', 'gpt:', 'ai:'].filter(word => message.text.toLowerCase().startsWith(word)).length > 0
    } else {
      return true 
    }
  })
);

export default filterMessage;
