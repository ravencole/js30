import colors from 'colors'

const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ],
    people = [
        'Beck, Glenn', 
        'Becker, Carl', 
        'Beckett, Samuel', 
        'Beddoes, Mick', 
        'Beecher, Henry', 
        'Beethoven, Ludwig', 
        'Begin, Menachem', 
        'Belloc, Hilaire', 
        'Bellow, Saul',
        'Benchley, Robert',
        'Benenson, Peter',
        'Ben-Gurion, David',
        'Benjamin, Walter',
        'Benn, Tony',
        'Bennington, Chester',
        'Benson, Leana',
        'Bent, Silas',
        'Bentsen, Lloyd',
        'Berger, Ric',
        'Bergman, Ingmar',
        'Berio, Luciano',
        'Berle, Milton',
        'Berlin, Irving',
        'Berne, Eric',
        'Bernhard, Sandra',
        'Berra, Yogi',
        'Berry, Halle',
        'Berry, Wendell',
        'Bethea, Erin',
        'Bevan, Aneurin',
        'Bevel, Ken',
        'Biden, Joseph',
        'Bierce, Ambrose',
        'Biko, Steve',
        'Billings, Josh',
        'Biondo, Frank',
        'Birrell, Augustine',
        'Black, Elk',
        'Blair, Robert',
        'Blair, Tony',
        'Blake, William'
    ],
    data = [
        'car',
        'car',
        'truck',
        'truck',
        'bike',
        'walk',
        'car',
        'van',
        'bike',
        'walk',
        'car',
        'van',
        'car',
        'truck' 
    ]

console.log('Born during the 1500\'s'.toUpperCase().green)

inventors.filter(i => {
    return i.year >= 1500 && i.year <= 1599
})
.map(i => console.log(`${i.first} ${i.last}`.green))

console.log('======================================='.green)



console.log('NAMES'.green)

inventors.map(i => console.log(`${i.first} ${i.last}`.green))

console.log('======================================='.green)



console.log('SORTED BY BIRTHDAY'.green)

inventors.sort((a,b) => {
    return a.year > b.year ? 1 : -1
})
.map(i => console.log(`${i.first} ${i.last}`.green))

console.log('======================================='.green)



console.log('TOTAL YEARS LIVED BY ALL INVENTORS'.green)

console.log(`${inventors.reduce((a,b) => {
    return a += b.passed - b.year
}, 0)}`.green)

console.log('======================================='.green)



console.log('INVENTORS SORTED BY AGE'.green)

inventors.sort((a,b) => {
    return (a.passed - a.year) > (b.passed - b.year) ? -1 : 1
})
.map(i => console.log(`${i.first} ${i.last}: lived to be ${i.passed - i.year} years old`.green))

console.log('======================================='.green)



console.log('SORT THE PEOPLE ALPHABETICALLY BY LAST NAME'.green)

people.sort((a,b) => {
    return a.split(', ')[0] > b.split(', ')[0] ? 1 : -1
})
.map(i => console.log(i.green))

console.log('======================================='.green)



console.log('SUM UP THE INSTANCES OF EACH VEHICLE'.green)

const DATA = data.reduce((a,b) => {
                if (!a.hasOwnProperty(b)) {
                    a[b] = 0
                }
                a[b]++
                return a
            }, {})

Object.keys(DATA).map(i => console.log(`${i}:${DATA[i]}`.green))

console.log('======================================='.green)
