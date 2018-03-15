

window.onload = function() {

  const messagesEl = document.querySelector('.messages');
  const typingSpeed = 40;
  const loadingText = '<b>•</b><b>•</b><b>•</b>';
  let messageIndex = 0;

  createMessageElements()
  createMessageBubbles()
  sendMessages()

}

function sendMessages() {
  const message = rightMessages[messageIndex];
  if (!message) return;
  sendMessage(message);
  messageIndex++;
 
}


  const rightMessages = [
    'I had a dream about you last night',
    'we were driving somewhere',
    'I think your hand was on my thigh',
    'or maybe mine was on yours..',
    'do you ever think about me?',
    'I think about you occasionally too',
    'like, sort of frequently',
    'i know you\'re not really, the same as what i imagine tho',
    'because how could you be',
    'people change right',
    'I just mean, years and years have gone by',
    'sooo.. the person i imagine isn\'t going to be how you are now',
    'are you listening at all',
    'how you always were',
    'and I have imaginary conversations with you',
    'like something will happen, and then we will talk about it in my head',
    'or I will replay a memory but you\'ll be injected in it',
    'a little bit',
    'yeah',
    'it\'s easy to get engrossed y\'know',
    'like a dream',
    'and it sucks when I realise it\'s not real',
    'what do you mean?',
  ]

  leftMessages = [
    'oh?',
    'or maybe my thighs were your thighs? Muay Thai\'s',
    'yer..',
    'occasionally',
    'oh i see',
    'I\'m not?',
    'why\'s that',
    'they evolve like pokemon you see',
    'hmm.. is that what you think i\'d respond with?',
    'yer I see',
    'I see the sea',
    'and then we went to the beach',
    'wood food',
    'yer',
    'how do you imagine me',
    'haha like what',
    'I\'ve invaded ya brain you see',
    'but a little can be a lot',
    'get ready for a sucker',
    'I\'m not real',
    'ah.. bisto! Did I just break your engrossedness?',
    'I\'m just a set of memories and you\'re pulling the strings',
    'pulling ya own strings, ya heartstrings',
    'Steve?',
  ]
