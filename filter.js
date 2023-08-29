const videoData = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: {
      kitchen: false,
      ballroom: false,
      conservatory: false,
      'dining room': false,
      'billiard room': false,
      library: false
    }
  },
  {
    name: 'Rusty',
    present: false,
    rooms: {
      kitchen: false,
      ballroom: false,
      conservatory: false,
      'dining room': false,
      'billiard room': false,
      library: false
    }
  },
  {
    name: 'Colonel Mustard',
    present: true,
    rooms: {
      kitchen: false,
      ballroom: false,
      conservatory: false,
      'dining room': false,
      'billiard room': false,
      library: false
    }
  },
  {
    name: 'Professor Plum',
    present: true,
    rooms: {
      kitchen: false,
      ballroom: false,
      conservatory: false,
      'dining room': false,
      'billiard room': false,
      library: false
    }
  }
]
let filter = videoData.filter(video => video.present === true)
const daftarFilter = videoData.map(item => {
  return `Name: ${item.name}, Present: ${item.present}, Rooms: ${JSON.stringify(item.rooms)}`;
}).join('\n');
console.log(`Jumlah yang memiliki present bernilai true ada: ${filter.length}, adapun listnya sebegai berikut:`);
console.log(filter);