import Event from '../app/models/event.js'

const filterMessage = (messages) => (
  messages.filter(message => {
    message = new Event(message)
    if (message.isGroup) {
      ['ai ', "AI ", 'ai:', 'AI:'].filter(word => message.text.startsWith(word)).length > 0
    } else {
      return true 
    }
  })
);

export default filterMessage;
