/* Realizar una clase “ProductManager” que gestione un conjunto de productos. */

class ProductManager {

    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        let product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        //campos vacios
        for (const key in product) {
            if (Object.hasOwnProperty.call(product, key)) {
                const element = product[key];
                if (!element) {
                    console.log(`${key}:${element}`);
                    return;
                }
            }
        }

        //existe code
        for (let i = 0; i < this.products.length; i++) {
            const element = this.products[i];
            if (element.code == code) {
                console.log(`El code ${code} ya existe, por favor, ingresa otro code para el producto ${title}`);
                return;
            }
        }

        //valida id
        if (this.products.length === 0) {
            product['id'] = 1
        } else {
            product['id'] = this.products[this.products.length - 1]['id'] + 1
        }


        this.products.push(product);


    }

    getProductById(id) {
        let obj = this.products.find(o => o.id === id);
        if (obj) {
            console.log("----------------------------");
            console.log(obj);
        } else {
            console.log("Product not found");
        }
    }

}

const producto = new ProductManager();
producto.addProduct("manzana", "fruta", 56, "Sin imagen", 12, 40);
producto.addProduct("Agua", "bebida", 30, "Sin imagen", 12, 25); //code repetido
producto.addProduct("pera", "fruta", 48, "Sin imagen", 13, 60);
producto.addProduct("Melón", "fruta",25, "Sin imagen", 20); //falta el stock
console.log(producto.getProducts());
producto.getProductById(1) // busca el id 1