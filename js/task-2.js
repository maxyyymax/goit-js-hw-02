function formatMessage(message, maxLength) {
  if (message <= maxLength) {
    return message;
  } else {
    return message.slice(0, maxLength) + '...';
  }
}
console.log(
  formatMessage(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, inventore!',
    17,
  ),
);

console.log(
  formatMessage(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, inventore!',
    45,
  ),
);

console.log(
  formatMessage(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, inventore!',
    100,
  ),
);

console.log(formatMessage('Lorem ipsum dolor sit amet.', 30));

console.log(formatMessage('Lorem ipsum dolor sit amet.', 5));

console.log(formatMessage('Lorem ipsum dolor sit amet.', 12));
