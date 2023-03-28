const fs = require('fs');


function generateProducts() {
    const products = [];
  
    for (let i = 1; i <= 1000; i++) {
      const product = {
        id: i,
        name: `CAMISA ${i+1}`,
        price: 50 + i
      };
  
      products.push(product);
    }
  
    return products;
  }
  
  const produtos = generateProducts()

fs.writeFile('db.json', JSON.stringify({ produtos }), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Dados salvos com sucesso!');
});