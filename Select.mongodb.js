const database = 'prod-database';

use(database);

//b. Valore maior que 700 reais
db['prod-collection'].find({valor:{$gt:700}});

// //c. Valor menor 450
db['prod-collection'].find({valor:{$lt:450}});

// //d. Valor maior ou igual a 500 reais e menor ou igual a 950 reais
db['prod-collection'].find({valor:{$gt:500, $lt:950}});