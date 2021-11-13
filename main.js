class Product {
    constructor(id, barcode, name, stock, price){
        this.id = id;
        this.barcode = barcode;
        this.name = name;
        this.stock = stock;
        this.price = price;
    }

    changeCode(barcode){
        this.barcode = barcode;
    }

    changeName(name){
        this.name = name;
    }

    increaseStock(stock){
        this.stock += stock;
    }

    decreaseStock(stock){
        this.stock -= stock;
    }

    //Suponemos que hay productos con el 10.5% y el 21%, como así también el 27% (Argentina)
    addIva(iva){
        this.price += iva/100*this.price;
    }

    removeIva(iva){
        this.price = this.price/(1+iva/100);
    }

    addDiscount(discount) {
        this.price -= discount/100*this.price;
    }

    removeDiscount(discount){
        this.price = this.price/(1+discount/100);
    }

    modifyPrice(price){
        this.price = price;
    }
}


// Creación de objetos
const products = [];
let acc = 0;

products.push(new Product(Number(acc++), 77908002001, 'Coca Cola 2L', 50, 99.99));
products.push(new Product(Number(acc++), 77902009008, 'Caramelo Sugus', 200, 9.99));
products.push(new Product(Number(acc++), 77712381902, 'Aceite Natura', 60, 179.99));


// Interactuando con el HTML
let productTable = document.getElementById('productTable'); //Accedo a la tabla
let tbody = document.createElement('tbody'); //Defino el cuerpo de la tabla y creo el elemento tbody

for(const product of products){
    let row = document.createElement('tr'); //Por cada producto crea una fila

    let td = document.createElement('td'); //1ra celda
    td.innerText = product.barcode;
    row.appendChild(td);

    td = document.createElement('td'); //2da celda
    td.innerText = product.name;
    row.appendChild(td);

    td = document.createElement('td'); //3er celda
    td.innerText = product.stock;
    row.appendChild(td);

    td = document.createElement('td'); //4ta celda
    td.innerText = product.price;
    row.appendChild(td);
    
    tbody.appendChild(row); //Cada fila es agregada al tbody -> (Se repite la iteración)
};

productTable.appendChild(tbody); //Se agrega el tbody a la tabla productos (id='productTable')

