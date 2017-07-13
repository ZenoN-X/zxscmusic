const scribble = require('scribbletune')
let clip = scribble.clip ({
  notes: ['c2'],
  pattern: 'xxx-xxx-xx-xx'
});
scribble.midi(clip, 'zx.mid');
