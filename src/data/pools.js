export const POOLS = {
  food: { label: 'Food & Kitchen', items: [
    {e:'🍎',w:'Apple'},{e:'🍞',w:'Bread'},{e:'🥛',w:'Milk'},{e:'🥚',w:'Eggs'},{e:'🧀',w:'Cheese'},
    {e:'🧈',w:'Butter'},{e:'🍝',w:'Pasta'},{e:'🍚',w:'Rice'},{e:'☕',w:'Coffee'},{e:'🍵',w:'Tea'},
    {e:'🍊',w:'Orange'},{e:'🍌',w:'Banana'},{e:'🥕',w:'Carrot'},{e:'🍅',w:'Tomato'},{e:'🍯',w:'Honey'},
    {e:'🧄',w:'Garlic'},{e:'🌽',w:'Corn'},{e:'🥦',w:'Broccoli'},{e:'🍋',w:'Lemon'},{e:'🥑',w:'Avocado'},
    {e:'🍇',w:'Grapes'},{e:'🥩',w:'Steak'},{e:'🧅',w:'Onion'},{e:'🫙',w:'Pickle'},{e:'🥜',w:'Peanut'},
  ]},
  animals: { label: 'Animals', items: [
    {e:'🐘',w:'Elephant'},{e:'🐧',w:'Penguin'},{e:'🦒',w:'Giraffe'},{e:'🐬',w:'Dolphin'},{e:'🦘',w:'Kangaroo'},
    {e:'🦩',w:'Flamingo'},{e:'🐆',w:'Leopard'},{e:'🐙',w:'Octopus'},{e:'🦍',w:'Gorilla'},{e:'🦚',w:'Peacock'},
    {e:'🦊',w:'Fox'},{e:'🐪',w:'Camel'},{e:'🦁',w:'Lion'},{e:'🐻',w:'Bear'},{e:'🦅',w:'Eagle'},
    {e:'🐊',w:'Crocodile'},{e:'🦦',w:'Otter'},{e:'🦔',w:'Hedgehog'},{e:'🐢',w:'Turtle'},{e:'🦜',w:'Parrot'},
    {e:'🦋',w:'Butterfly'},{e:'🦓',w:'Zebra'},{e:'🐿️',w:'Squirrel'},{e:'🦭',w:'Seal'},{e:'🦈',w:'Shark'},
  ]},
  cities: { label: 'World Cities', items: [
    {e:'🗼',w:'Paris'},{e:'🗽',w:'New York'},{e:'🎌',w:'Tokyo'},{e:'🏛️',w:'Rome'},{e:'🎡',w:'London'},
    {e:'🌉',w:'Sydney'},{e:'🌃',w:'Cairo'},{e:'🏔️',w:'Zurich'},{e:'🌴',w:'Bangkok'},{e:'🎭',w:'Vienna'},
    {e:'🌊',w:'Lisbon'},{e:'🏙️',w:'Seoul'},{e:'🌺',w:'Havana'},{e:'🎨',w:'Amsterdam'},{e:'🌸',w:'Kyoto'},
    {e:'🌹',w:'Istanbul'},{e:'🏟️',w:'Berlin'},{e:'🌿',w:'Nairobi'},{e:'🎪',w:'Prague'},{e:'🌅',w:'Dublin'},
    {e:'🎵',w:'Nashville'},{e:'🏖️',w:'Miami'},{e:'🌆',w:'Shanghai'},{e:'⛪',w:'Athens'},{e:'🌁',w:'Oslo'},
  ]},
  instruments: { label: 'Instruments', items: [
    {e:'🎹',w:'Piano'},{e:'🎸',w:'Guitar'},{e:'🎺',w:'Trumpet'},{e:'🎻',w:'Violin'},{e:'🥁',w:'Drums'},
    {e:'🪗',w:'Accordion'},{e:'🎷',w:'Saxophone'},{e:'🪕',w:'Banjo'},{e:'🎵',w:'Flute'},{e:'🎶',w:'Harp'},
    {e:'🎙️',w:'Clarinet'},{e:'🎸',w:'Ukulele'},{e:'🪘',w:'Bongos'},{e:'🎻',w:'Cello'},{e:'🎺',w:'Trombone'},
    {e:'🎹',w:'Organ'},{e:'🎵',w:'Oboe'},{e:'🎶',w:'Bassoon'},{e:'🥁',w:'Xylophone'},{e:'🎙️',w:'Mandolin'},
    {e:'🪗',w:'Concertina'},{e:'🎷',w:'Cornet'},{e:'🎺',w:'Bugle'},{e:'🎻',w:'Viola'},{e:'🥁',w:'Tambourine'},
  ]},
  nature: { label: 'Nature', items: [
    {e:'🌋',w:'Volcano'},{e:'🏔️',w:'Mountain'},{e:'🌊',w:'Ocean'},{e:'🌲',w:'Forest'},{e:'🏜️',w:'Desert'},
    {e:'🌿',w:'Meadow'},{e:'🏝️',w:'Island'},{e:'🌅',w:'Sunrise'},{e:'❄️',w:'Blizzard'},{e:'🌈',w:'Rainbow'},
    {e:'⚡',w:'Lightning'},{e:'🌕',w:'Full Moon'},{e:'☄️',w:'Comet'},{e:'🍄',w:'Mushroom'},{e:'🌻',w:'Sunflower'},
    {e:'🍁',w:'Maple Leaf'},{e:'🪨',w:'Boulder'},{e:'🌾',w:'Wheat'},{e:'🌺',w:'Hibiscus'},{e:'🌵',w:'Cactus'},
    {e:'🍂',w:'Autumn'},{e:'🌙',w:'Crescent'},{e:'🌪️',w:'Tornado'},{e:'🌊',w:'Waterfall'},{e:'🦋',w:'Butterfly'},
  ]},
}

export const TIMES = { easy: 30, medium: 22, hard: 15 }

const MSGS = {
  10: ['Perfect score!', 'Outstanding memory!', 'Incredible — nothing slipped past you!'],
  9:  ['Almost perfect!', 'Brilliant recall!', 'Just one got away — exceptional!'],
  8:  ['Really well done!', 'Strong memory at work!', '8 out of 10 — impressive!'],
  7:  ['Good effort!', 'Solid recall!', '7 out of 10 — well played!'],
  6:  ['Not bad at all!', 'More than half — keep it up!', 'Your memory is working hard!'],
  0:  ['Keep practising!', 'Every game trains your brain!', "You'll improve with each round!"],
}

export function getMsg(s) {
  const k = s >= 9 ? s : s >= 7 ? s : s >= 6 ? 6 : 0
  const arr = MSGS[k] || MSGS[0]
  return arr[Math.floor(Math.random() * arr.length)]
}

export function pct(s) { return s === 10 ? 'perfect' : s >= 8 ? 'great' : 'ok' }

export function shuffle(a) {
  const b = [...a]
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]]
  }
  return b
}

export function pick(arr, n) { return shuffle(arr).slice(0, n) }
