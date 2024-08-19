import { Command, ALL_COMMANDS } from '../app/commands/index.js';

/**
 * @param {string} text
 * @returns {Command}
 */
const getCommand = (text) => (
  Object.values(ALL_COMMANDS)
    .sort((a, b) => b.text.length - a.text.length)
    .find((c) => (
      c.aliases.includes(text) || text.toLowerCase().includes(c.text.toLowerCase())
    ))
);

const filterMessage = (messages) => (
  messages.filter(message => {
    if (message.isGroup) {
      ['ai ', "AI ", 'ai:', 'AI:'].filter(word => message.text.startsWith(word)).length > 0
    } else {
      return true 
    }
  })
);

export {
  getCommand,
  filterMessage
}
