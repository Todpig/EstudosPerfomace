const fs = require('fs');


function generateProducts() {
    const products = [];
  
    for (let i = 1; i <= 1000; i++) {
      const product = {
        id: i,
        name: `va la${i+1}`,
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