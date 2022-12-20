const notFound = 'http://savonapizza.pl/public/img/imageNotFoundMini.gif'

export const pizzas = [{
    id: 1,
    name: 'Savona',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/720/savona/71x61.jpg',
    ingredients: ['ser mozarella', 'sos pomidorowy', 'kurczak gotowany', 'szynka', 'kukurydza', 'papryka', 'pieprz kalifa', 'oregano'],
    price: [24.60, 33.60, 61.00]
}, {
    id: 2,
    name: 'Margherita',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/724/margherita/71x61.png',
    ingredients: ['ser mozarella', 'sos pomidorowy', 'oregano'],
    price: [18.70, 27.20, 46.50]
}, {
    id: 3,
    name: 'Bianco',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/776/bianco/71x61.jpg',
    ingredients: ['ser mozzarella', 'sos norweski', 'kiełbasa', 'pieczarki', 'cebula', 'oregano'],
    price: [21.60, 30.70, 55.10]
}, {
    id: 4,
    name: 'Spice Chicken',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/790/spice/71x61.jpg',
    ingredients: ['ser mozarella', 'sos barbecue', 'kurczak grillowany', 'szynka', 'cebula', 'oregano'],
    price: [23.00, 33.00, 60.60]
}, {
    id: 5,
    name: 'Monalisa',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/799/monalisa-2/71x61.jpg',
    ingredients: ['ser mozarella', 'sos pomidorowy', 'szynka', 'pieczarki', 'papryka', 'oregano'],
    price: [22.60, 32.10, 57.40]
}, {
    id: 6,
    name: 'Giovanna',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/808/giovanna-menu/71x61.jpg',
    ingredients: ['ser mozarella', 'sos pomidorowy', 'bekon', 'pieczarki', 'cebula', 'oregano'],
    price: [22.60, 32.10, 57.40]
}, {
    id: 7,
    name: 'Americana',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/817/amerikana/71x61.jpg',
    ingredients: ['ser mozarella', 'sos pomidorowy', 'salami', 'pieczarki', 'papryka', 'kukurydza', 'oregano'],
    price: [23.00, 33.00, 60.60]
}, {
    id: 8,
    name: 'Pepperoni',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/826/pepperoni/71x61.png',
    ingredients: ['ser mozarella', 'sos pomidorowy', 'salami', 'papryka jalapeno', 'cebula', 'oregano'],
    price: [23.00, 33.00, 60.60]
}, {
    id: 9,
    name: 'Mexicana',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/835/meksykana/71x61.png',
    ingredients: ['ser mozarella', 'sos mexicana z mięsem', 'kukurydza', 'papryka jalapeno', 'cebula', 'oregano'],
    price: [23.00, 33.00, 60.60]
}, {
    id: 10,
    name: 'Sorento',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/844/sorent/71x61.jpg',
    ingredients: ['mozarella', 'sos serowy', 'pomidory', 'jajko', 'brokuły', 'kurczak grillowany', 'szczypiorek'],
    price: [25.10, 34.20, 61.20]
}, {
    id: 11,
    name: 'Hawajska',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/851/hawajska/71x61.jpg',
    ingredients: ['ser mozarella', 'sos pomidorowy', 'szynka dojrzewająca', 'kukurydza', 'ananas', 'oregano'],
    price: [23.00, 33.00, 60.60]
}, {
    id: 12,
    name: 'Siciliana',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/860/siciliana/71x61.jpg',
    ingredients: ['cienkie ciasto', 'ser mozarella', 'sos pomidorowy', 'szynka dojrzewająca', 'bekon', 'kapary', 'oregano'],
    price: [23.00, 33.00, 60.60]
}, {
    id: 13,
    name: 'Kebab',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/869/kebab/71x61.png',
    ingredients: ['ser mozarella', 'sos pomidorowy', 'kebab z kurczaka', 'ogórek kiszony', 'cebula', 'cebula prażona', 'sos gyros', 'ketchup', 'oregano'],
    price: [23.00, 33.00, 60.60]
}, {
    id: 14,
    name: 'Vegetariana',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/874/vegetariana/71x61.jpg',
    ingredients: ['ser mozarella', 'sos pomidorowy', 'oliwki', 'pieczarki', 'papryka', 'kukurydza', 'oregano'],
    price: [23.00, 33.00, 60.60]
}, {
    id: 15,
    name: 'Grecka',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/883/grecka/71x61.jpg',
    ingredients: ['ser mozarella', 'sos pomidorowy', 'oliwki', 'ser typu greckiego', 'suszone pomidory', 'cebula', 'sos tzatziki', 'oregano'],
    price: [25.10, 34.20, 62.20]
}, {
    id: 16,
    name: 'Rosella',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/892/rosella/71x61.jpg',
    ingredients: ['ser mozarella', 'sos pomidorowy', 'papryka', 'pieczarki', 'oregano'],
    price: [20.30, 38.20, 51.50]
}, {
    id: 17,
    name: '4 Formaggi',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/901/4-for/71x61.jpg',
    ingredients: ['ser mozarella', 'sos pomidorowy', 'ser plesniowy lazur', 'ser typu greckiego', 'ser parmezan'],
    price: [23.00, 33.00, 60.60]
}, {
    id: 18,
    name: 'Neapoletana',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/910/neapolitana/71x61.jpg',
    ingredients: ['ser mozarella', 'sos pomidorowy', 'oliwki', 'kapary', 'anchois', 'bazylia'],
    price: [21.60, 30.70, 55.10]
}, {
    id: 19,
    name: 'Marinella',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/919/marinella/71x61.jpg',
    ingredients: ['ser mozarella', 'sos pomidorowy', 'małże', 'krewetki', 'łosoś', 'sos czosnkowy', 'oregano'],
    price: [24.50, 33.60, 61.50]
}, {
    id: 20,
    name: 'Tiziana',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/928/tiziana/71x61.jpg',
    ingredients: ['ser mozarella', 'sos pomidorowy', 'krewetki', 'sos czosnkowy', 'oregano'],
    price: [21.60, 30.70, 55.10]
}, {
    id: 21,
    name: 'Salmone',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/937/salmone/71x61.jpg',
    ingredients: ['ser mozarella', 'sos norweski', 'łosoś', 'oregano'],
    price: [21.60, 30.70, 55.10]
}, {
    id: 22,
    name: 'Marina',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/946/marina/71x61.jpg',
    ingredients: ['ser mozarella', 'sos pomidorowy', 'tuńczyk', 'kukurydza', 'oregano'],
    price: [21.60, 30.70, 55.10]
}, {
    id: 23,
    name: 'Rosamaria',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/955/rosamaria/71x61.jpg',
    ingredients: ['ser mozarella', 'sos pomidory', 'oliwki', 'salami', 'bekon', 'krewetki', 'sos czosnkowy', 'oregano'],
    price: [25.10, 34.20, 62.20]
}, {
    id: 24,
    name: 'Capricciosa',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/964/capricciosa/71x61.jpg',
    ingredients: ['ser mozarella', 'sos pomidorowy', 'szynka dojrzewająca', 'karczochy', 'pieczarki', 'oregano'],
    price: [22.60, 32.10, 57.40]
}, {
    id: 25,
    name: 'Carbonara',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/973/carbonara/71x61.jpg',
    ingredients: ['ser mozarella', 'sos carbonara', 'bekon', 'cebula', 'bazylia', 'oregano'],
    price: [21.00, 30.40, 54.00]
}, {
    id: 26,
    name: 'Serowa',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/982/serowa/71x61.jpg',
    ingredients: ['ser mozarella', 'sos serowy', 'dwa dowolne dodatki (prosimy wpisywać w komentarzu)'],
    price: [22.20, 31.30, 55.70]
}, {
    id: 27,
    name: 'BBQ z kurczakiem',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1375/bbq-min/71x61.jpg',
    ingredients: ['ser mozarella', 'sos bbq', 'sos serowy', 'grillowana cukinia', 'grillowany bakłażan', 'grillowana papryka', 'grillowany kurczak', 'rukolla', 'oregano'],
    price: [24.60, 33.60, 61.00]
}, {
    id: 28,
    name: 'Szpinakowa',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1511/szpinak/71x61.jpg',
    ingredients: ['sos pomidorowy', 'ser typu greckiego', 'pomidory', 'szpinak', 'parmezan'],
    price: [23.00, 33.00, 60.60]
}, {
    id: 29,
    name: 'Bosso',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1507/bossooo/71x61.jpg',
    ingredients: ['ser mozarella', 'sos pomidorowy', 'salami', 'bekon', 'kiełbasa', 'ogórek kiszony', 'cebula', 'oregano'],
    price: [24.60, 33.60, 61.00]
}]

export const sauces = [{
    id: 1,
    name: 'norweski (śmietanowo - czosnkowy)',
    img: '',
    price: [4.00]
}, {
    id: 2,
    name: 'ketchup',
    img: '',
    price: [3.00]
}, {
    id: 3,
    name: 'dresing',
    img: '',
    price: [3.00]
}, {
    id: 4,
    name: 'barbecue',
    img: '',
    price: [4.00]
}, {
    id: 5,
    name: 'czosnkowy (na oleju)',
    img: '',
    price: [3.00]
}, {
    id: 6,
    name: 'serowy',
    img: '',
    price: [4.00]
}, {
    id: 7,
    name: 'gyros',
    img: '',
    price: [4.00]
}, {
    id: 8,
    name: 'tzatziki',
    img: '',
    price: [4.00]
}, {
    id: 9,
    name: 'ketchup + tabasco',
    img: '',
    price: [3.00]
}, {
    id: 10,
    name: 'pomidorowy',
    img: '',
    price: [3.00]
}, {
    id: 11,
    name: 'majonez',
    img: '',
    price: [3.00]
}, {
    id: 12,
    name: 'mexicana',
    img: '',
    price: [4.00]
}, {
    id: 13,
    name: 'arabski',
    img: '',
    price: [4.00]
}]

export const extra = [{
    id: 1,
    name: 'ananas',
    img: '',
    price: [3.00, 5.00, 8.00]
},{
    id: 2,
    name: 'kukurydza',
    img: '',
    price: [3.00, 5.00, 8.00]
},{
    id: 3,
    name: 'cebula',
    img: '',
    price: [3.00, 5.00, 8.00]
},{
    id: 4,
    name: 'oliwki',
    img: '',
    price: [3.00, 5.00, 8.00]
},{
    id: 5,
    name: 'kapary',
    img: '',
    price: [3.00, 5.00, 8.00]
},{
    id: 6,
    name: 'karczochy',
    img: '',
    price: [3.00, 5.00, 8.00]
},{
    id: 7,
    name: 'pieczarki',
    img: '',
    price: [3.00, 5.00, 8.00]
},{
    id: 8,
    name: 'brokuły',
    img: '',
    price: [3.00, 5.00, 8.00]
},{
    id: 9,
    name: 'tuńczyk',
    img: '',
    price: [3.50, 6.00, 10.00]
},{
    id: 10,
    name: 'krewetki',
    img: '',
    price: [3.50, 6.00, 10.00]
},{
    id: 11,
    name: 'małże',
    img: '',
    price: [3.50, 6.00, 10.00]
},{
    id: 12,
    name: 'łosoś',
    img: '',
    price: [3.50, 6.00, 10.00]
},{
    id: 13,
    name: 'anchois',
    img: '',
    price: [3.50, 6.00, 10.00]
},{
    id: 14,
    name: 'szynka',
    img: '',
    price: [3.50, 6.00, 10.00]
},{
    id: 15,
    name: 'kebab z kurczaka',
    img: '',
    price: [3.50, 6.00, 10.00]
},{
    id: 16,
    name: 'szynka dojrzewająca',
    img: '',
    price: [3.50, 6.00, 10.00]
},{
    id: 17,
    name: 'bekon',
    img: '',
    price: [3.50, 6.00, 10.00]
},{
    id: 18,
    name: 'kiełbasa',
    img: '',
    price: [3.50, 6.00, 10.00]
},{
    id: 19,
    name: 'salami',
    img: '',
    price: [3.50, 6.00, 10.00]
},{
    id: 20,
    name: 'szczypior',
    img: '',
    price: [3.00, 5.00, 8.00]
},{
    id: 21,
    name: 'kurczak grillowany',
    img: '',
    price: [3.50, 6.00, 10.00]
},{
    id: 22,
    name: 'kurczak gotowany',
    img: '',
    price: [3.50, 6.00, 10.00]
},{
    id: 23,
    name: 'świeże pomidory',
    img: '',
    price: [3.00, 5.00, 8.00]
},{
    id: 24,
    name: 'suszone pomidory',
    img: '',
    price: [3.00, 5.00, 8.00]
},{
    id: 25,
    name: 'ser mozarella',
    img: '',
    price: [3.50, 6.00, 10.00]
},{
    id: 26,
    name: 'ser pleśniowy lazur',
    img: '',
    price: [3.50, 6.00, 10.00]
},{
    id: 27,
    name: 'papryka',
    img: '',
    price: [3.00, 5.00, 8.00]
},{
    id: 28,
    name: 'papryka jalapeno',
    img: '',
    price: [3.00, 5.00, 8.00]
},{
    id: 29,
    name: 'rukola',
    img: '',
    price: [3.00, 5.00, 8.00]
},{
    id: 30,
    name: 'jajko',
    img: '',
    price: [3.50, 6.00, 10.00]
},{
    id: 31,
    name: 'ogórek kiszony',
    img: '',
    price: [3.00, 5.00, 8.00]
},{
    id: 32,
    name: 'ser parmezan',
    img: '',
    price: [2.00, 2.50, 3.50]
},{
    id: 33,
    name: 'ciasto',
    img: '',
    price: [3.50, 6.00, 10.00]
},{
    id: 34,
    name: 'ser typu greckiego',
    img: '',
    price: [3.50, 6.00, 10.00]
},{
    id: 35,
    name: 'grillowane warzywa',
    img: '',
    price: [3.00, 5.00, 8.00]
}]

export const pasta = [{
    id: 1,
    name: 'Spaghetti Bolognese',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/999/spaghetti-bolonese/71x61.jpg',
    ingredients: ['makaron spaghetti', 'sos bolognese z pieczarkami', 'parmezan'],
    price: [26.50]
},{
    id: 2,
    name: 'Spaghetti Carbonara',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1008/spaghetti-carbonara/71x61.jpg',
    ingredients: ['makaron spaghetti', 'sos carbonara', 'bekon', 'cebula', 'parmezan'],
    price: [28.50]
},{
    id: 3,
    name: 'Spaghetti Frutti di Mare',
    img: '',
    ingredients: ['makaron spaghetti', 'sos pomidorowy', 'sos czosnkowy', 'małże', 'krewetki', 'parmezan'],
    price: [31.50]
},{
    id: 4,
    name: 'Pesto',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1140/pesto/71x61.jpg',
    ingredients: ['makaron spaghetti', 'sos pesto', 'ser mascarpone', 'parmezan'],
    price: [26.00]
},{
    id: 5,
    name: 'Pesto z szynką',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1146/pesto-szynka/71x61.jpg',
    ingredients: ['makaron spaghetti', 'sos pesto', 'ser mascarpone', 'szynka', 'parmezan'],
    price: [28.50]
},{
    id: 6,
    name: 'Penne Carbonara',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1149/penne/71x61.jpg',
    ingredients: ['makaron penne', 'sos carbonara', 'bekon', 'cebula', 'pieczarki', 'mozarella'],
    price: [31.50]
},{
    id: 7,
    name: 'Penne Mexicana',
    img: '',
    ingredients: ['makaron penne', 'sos bolognese', 'kiełbasa', 'mozarella', 'jalapeno'],
    price: [31.50]
},{
    id: 8,
    name: 'Penne Vegetariana',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1155/penne-1/71x61.jpg',
    ingredients: ['makaron penne', 'sos serowy', 'brokuły', 'kukurydza', 'ser mozarella'],
    price: [31.50]
},]

export const salads = [{
    id: 1,
    name: 'Cesar',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/730/cesar/71x61.png',
    ingredients: ['sałata lodowa', 'filet z kurczaka', 'sos rzymski', 'parmezan', 'koreczki tostowe', 'pomidory'],
    price: [29.50]
},{
    id: 2,
    name: 'Norweska',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/732/norweska/71x61.jpg',
    ingredients: ['sałata lodowa', 'sos norweski', 'łosoś', 'krewetki', 'szparagi'],
    price: [33.30]
},{
    id: 3,
    name: 'Włoska',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1039/wloska/71x61.jpg',
    ingredients: ['sałata lodowa', 'sałata rukola', 'sos winegret', 'sos balsamiczny', 'ser mozzarella', 'pomidory', 'ogórek'],
    price: [27.50]
},{
    id: 4,
    name: 'Grecka',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/731/grecka/71x61.jpg',
    ingredients: ['sałata lodowa', 'sos winegret', 'pomidory', 'cebula', 'ogórek', 'oliwki', 'ser typu greckiego'],
    price: [27.50]
},{
    id: 5,
    name: 'Polska z pieczywem firmowym',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1038/polska/71x61.png',
    ingredients: ['sałata lodowa', 'gotowany filet z kurczaka', 'kukurydza', 'ogórek', 'majonez', 'pieczywo firmowe- 1 paluch'],
    price: [29.50]
},{
    id: 6,
    name: 'Paryska z bekonem',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1037/salatka-paryska/71x61.jpg',
    ingredients: ['sałata lodowa', 'ser mozarella', 'koreczki tostowe', 'pomidor', 'sos', 'talarki ziemniaczane', 'bekon'],
    price: [29.50]
},{
    id: 7,
    name: 'Paryska z jajkiem i brokułami',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1037/salatka-paryska/71x61.jpg',
    ingredients: ['sałata lodowa', 'ser mozarella', 'koreczki tostowe', 'pomidor', 'sos', 'talarki ziemniaczane', 'jajko', 'brokuły'],
    price: [29.50]
},{
    id: 8,
    name: 'Paryska z łososiem',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1037/salatka-paryska/71x61.jpg',
    ingredients: ['sałata lodowa', 'ser mozarella', 'koreczki tostowe', 'pomidor', 'sos', 'talarki ziemniaczane', 'łosoś'],
    price: [29.50]
},{
    id: 9,
    name: 'Paryska z kurczakiem',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1037/salatka-paryska/71x61.jpg',
    ingredients: ['sałata lodowa', 'ser mozarella', 'koreczki tostowe', 'pomidor', 'sos', 'talarki ziemniaczane', 'kurczak'],
    price: [29.50]
},{
    id: 10,
    name: 'Paryska z tuńczykiem',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1037/salatka-paryska/71x61.jpg',
    ingredients: ['sałata lodowa', 'ser mozarella', 'koreczki tostowe', 'pomidor', 'sos', 'talarki ziemniaczane', 'tuńczyk'],
    price: [29.50]
},{
    id: 11,
    name: 'Paryska z krewetkami',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1037/salatka-paryska/71x61.jpg',
    ingredients: ['sałata lodowa', 'ser mozarella', 'koreczki tostowe', 'pomidor', 'sos', 'talarki ziemniaczane', 'krewetki'],
    price: [29.50]
},{
    id: 12,
    name: 'Paryska z karczochami',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1037/salatka-paryska/71x61.jpg',
    ingredients: ['sałata lodowa', 'ser mozarella', 'koreczki tostowe', 'pomidor', 'sos', 'talarki ziemniaczane', 'karczochy'],
    price: [29.50]
},{
    id: 13,
    name: 'Sycylijska z bekonem',
    img: '',
    ingredients: ['sałata lodowa', 'rukola', 'oliwki', 'ser mozzarella', 'koreczki tostowe', 'pomidor', 'sos', 'bekon; podawana w "miseczce" z gorącego ciasta;'],
    price: [33.30]
},{
    id: 14,
    name: 'Sycylijska z łososiem',
    img: '',
    ingredients: ['sałata lodowa', 'rukola', 'oliwki', 'ser mozzarella', 'koreczki tostowe', 'pomidor', 'sos', 'łosoś; podawana w "miseczce" z gorącego ciasta;'],
    price: [33.30]
},{
    id: 15,
    name: 'Sycylijska z kurczakiem',
    img: '',
    ingredients: ['sałata lodowa', 'rukola', 'oliwki', 'ser mozzarella', 'koreczki tostowe', 'pomidor', 'sos', 'kurczak; podawana w "miseczce" z gorącego ciasta;'],
    price: [33.30]
},{
    id: 16,
    name: 'Sycylijska z tuńczykiem',
    img: '',
    ingredients: ['sałata lodowa', 'rukola', 'oliwki', 'ser mozzarella', 'koreczki tostowe', 'pomidor', 'sos', 'tuńczyk; podawana w "miseczce" z gorącego ciasta;'],
    price: [33.30]
},{
    id: 17,
    name: 'Sycylijska z krewetkami',
    img: '',
    ingredients: ['sałata lodowa', 'rukola', 'oliwki', 'ser mozzarella', 'koreczki tostowe', 'pomidor', 'sos', 'krewetki; podawana w "miseczce" z gorącego ciasta;'],
    price: [33.30]
},{
    id: 18,
    name: 'Sycylijska z karczochami',
    img: '',
    ingredients: ['sałata lodowa', 'rukola', 'oliwki', 'ser mozzarella', 'koreczki tostowe', 'pomidor', 'sos', 'karczochy; podawana w "miseczce" z gorącego ciasta;'],
    price: [33.30]
},{
    id: 19,
    name: 'Sycylijska z jajkiem i brokułami',
    img: '',
    ingredients: ['sałata lodowa', 'rukola', 'oliwki', 'ser mozzarella', 'koreczki tostowe', 'pomidor', 'sos', 'jajko', 'brokuły; podawana w "miseczce" z gorącego ciasta;'],
    price: [33.30]
},]

export const others = [{
    id: 1,
    name: 'Skrzydełka z kurczaka w panierce (6 szt)',
    img: '',
    ingredients: ['frytki', 'sałatka z sosem winegret'],
    price: [28.50]
},{
    id: 2,
    name: 'Chrupiący filet z kurczaka',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1501/chrupiacy/71x61.png',
    ingredients: ['paski z fileta z kurczaka w chrupiącej panierce', 'frytki', 'surówka', 'sos'],
    price: [28.50]
},{
    id: 3,
    name: 'Kiełbaski pieczone z serem ( 2 szt )',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/994/kielbaski/71x61.jpg',
    ingredients: ['frytki' , 'surówka'],
    price: [25.00]
},{
    id: 4,
    name: 'Parówki w cieście',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/995/parowki/71x61.jpg',
    ingredients: ['ser', 'sos'],
    price: [25.00]
},{
    id: 5,
    name: 'Kanapka tostowa z szynką (170 g)',
    img: '',
    ingredients: ['z majonezem lub sosem włoskim', 'frytki'],
    price: [25.00]
},{
    id: 6,
    name: 'Kanapka tostowa z boczkiem (170 g)',
    img: '',
    ingredients: ['z majonezem lub sosem włoskim', 'frytki' ],
    price: [25.00]
},{
    id: 7,
    name: 'Kanapka tostowa z kurczakiem (170 g)',
    img: '',
    ingredients: ['z majonezem lub sosem włoskim', 'frytki' ],
    price: [25.00]
},{
    id: 8,
    name: 'Hamburger (300 g)',
    img: '',
    ingredients: ['frytki', 'warzywa'],
    price: [25.00]
},{
    id: 9,
    name: 'Chicken burger (300 g)',
    img: '',
    ingredients: ['frytki', 'warzywa'],
    price: [27.00]
},{
    id: 10,
    name: 'Frytki',
    img: '',
    ingredients: [],
    price: [9.00]
},{
    id: 11,
    name: 'Góra Frytek',
    img: '',
    ingredients: [],
    price: [15.00]
},{
    id: 12,
    name: 'Talarki ziemniaczane',
    img: '',
    ingredients: [],
    price: [9.00]
},{
    id: 13,
    name: 'Pieczywo firmowe',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1094/pieczywo/71x61.png',
    ingredients: ['frytki', 'sałatka z sosem winegret'],
    price: [7.50]
},]

export const drinks = [{
    id: 1,
    name: 'Fanta',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1158/fanta/71x61.jpg',
    price: [8.00, '']
},{
    id: 2,
    name: 'Coca - Cola',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00001/756/cola/71x61.jpg',
    price: [8.00, '']
},{
    id: 3,
    name: 'Sprite',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1161/sprite/71x61.jpg',
    price: [8.00, '']
},{
    id: 4,
    name: 'Fuzetea',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1451/fuze-tea/71x61.jpg',
    price: [8.00, '']
},{
    id: 5,
    name: 'Woda gazowana',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1167/woda/71x61.jpg',
    price: [5.00, '']
},{
    id: 6,
    name: 'Woda niegazowana',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1167/woda/71x61.jpg',
    price: [5.00, '']
},{
    id: 7,
    name: 'Sok Jabłkowy',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1179/cappy/71x61.jpg',
    price: ['', 12.00]
},{
    id: 8,
    name: 'Sok Czarna Porzeczka',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1179/cappy/71x61.jpg',
    price: ['', 12.00]
},{
    id: 9,
    name: 'Sok Pomarańczowy',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1179/cappy/71x61.jpg',
    price: ['', 12.00]
},{
    id: 10,
    name: 'Sok Wieloowocowy',
    img: 'http://savonapizza.pl/public/data/cache/img/public/data/resource/upload/00002/1179/cappy/71x61.jpg',
    price: ['', 12.00]
},]

export const promos = [{
    id: 1,
    name: 'ZESTAW DLA KAŻDEGO COŚ DOBREGO',
    img: '',
    ingredients: ['dowolna duża pizza (30 cm)', 'dowolna sałatka', 'dowolna pasta'],
    price: [92.50]
},{
    id: 2,
    name: 'CZTEROPAK',
    img: '',
    ingredients: ['cztery duże (30cm) dowolne pizze'],
    price: [125.00]
},{
    id: 3,
    name: 'CZTEROPAK SAŁATKOWY',
    img: '',
    ingredients: ['4 dowolne sałatki'],
    price: [115.00]
},{
    id: 4,
    name: 'FIT ZESTAW',
    img: '',
    ingredients: ['dwie dowolne sałatki', '2x woda 0,5 L'],
    price: [65.00]
},{
    id: 5,
    name: 'ZESTAW IMPREZOWY',
    img: '',
    ingredients: ['2 dowolne maxi (50 cm) pizze + 1x coca-cola 0,85l + 2 dowolne sosy'],
    price: [130.40]
},]

export const forKids = [{
    id: 1,
    name: 'Pizzolinki z szynką (5 szt.)',
    img: '',
    ingredients: ['~10 cm', 'ser mozzarella', 'sos pomidorowy', 'szynka'],
    price: [22.00]
},{
    id: 2,
    name: 'Pizzolinki z salami (5 szt.)',
    img: '',
    ingredients: ['~10 cm', 'ser mozzarella', 'sos pomidorowy', 'salami' ],
    price: [22.00]
},{
    id: 3,
    name: 'Pizzolinki z boczkiem (5 szt.)',
    img: '',
    ingredients: ['~10 cm', 'ser mozzarella', 'sos pomidorowy', 'boczek' ],
    price: [22.00]
},{
    id: 4,
    name: 'Pizzolinki z kurczakiem grillowanym (5 szt.)',
    img: '',
    ingredients: ['~10 cm', 'ser mozzarella', 'sos pomidorowy', 'kurczak grillowany'],
    price: [22.00]
},{
    id: 5,
    name: 'Pizzolinki z pieczarkami (5 szt.)',
    img: '',
    ingredients: ['~10 cm', 'ser mozzarella', 'sos pomidorowy', 'pieczarki' ],
    price: [22.00]
},{
    id: 6,
    name: 'Pizzolinki mix',
    img: '',
    ingredients: ['~10 cm', 'pizzolinka z szynką', 'pizzolinka z salami', 'pizzolinka z boczkiem', 'pizzolinka z kurczakiem grillowanym', 'pizzolinka z pieczarkami' ],
    price: [22.00]
},]
