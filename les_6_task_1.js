/*Доработать модуль корзины.
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида*/

const catalogItem = {
    render(product) {
        return `<div>
                    <div><b>Наименование</b>: ${product.nameP}</div>                    
                    <div><b>Цена за ед.</b>: ${product.price}</div>
                                      
                    <button
                    class="product__add-to-cart"
                    data-id_product="${product.idProd}">Купить</button>
                </div>`;
    }
}


const catalog = {
    catalogListBlock: null,
    cart: null,
    catalogItem,
    products: [
        {
            idProd: 111,
            nameP: 'монитор',
            price: 2000,
            //quantity: 35
        },

        {
            idProd: 222,
            nameP: 'ноутбук',
            price: 40000,
            //quantity: 10
        },

        {
            idProd: 333,
            nameP: 'мышь',
            price: 200,
            //quantity: 500
        }
    ],
    init() {
        this.catalogListBlock = document.querySelector('.catalog');
        this.cart = cart;
        this.render();
        this.addEventHandlers();
    },
    render() {
        if (this.products.length) {
            this.products.forEach(product => {
                this.catalogListBlock.insertAdjacentHTML('beforeend', this.catalogItem.render(product));
            });
            this.catalogListBlock.insertAdjacentHTML('beforeend', `В каталоге ${this.products.length} позиций(а)`);
        } else {
            this.catalogListBlock.textContent = 'Каталог пуст';
        }
    },

    addEventHandlers() {
        this.catalogListBlock.addEventListener('click', event => this.byuProduct(event));
    },


    byuProduct(event) {
        if (!event.target.classList.contains('product__add-to-cart')) return;
        const idProduct = +event.target.dataset.idProd;
        const productToAdd = this.products.find((product) => product.idProd === idProduct);
        this.cart.byuProduct(productToAdd);
    }
};



const cartItem = {
    render(product) {
        return `<div>
                    <div><b>Наименование</b>: ${product.nameP}</div>
                    <div><b>Цена за ед.</b>: ${product.price}</div>
                    <div><b>Количество</b>: ${product.quantity}</div>
                    <div><b>Общая стоимость</b>: ${product.quantity * product.price}</div>
                </div>`;
    }
}


const cart = {
    cartListBlock: null,
    clearProductButton: null,
    cartItem,
    cartProducts: [
        {
            idProd: 111,
            nameP: 'монитор',
            price: 2000,
            quantity: 20
        },
    ],

    init() {
        this.cartListBlock = document.querySelector('.basket');
        this.clearProductButton = document.querySelector('.cart-btn');
        this.clearProductButton.addEventListener('click', () => this.clearProduct());
        this.render();

    },

    render() {
        if (this.cartProducts.length) {
            this.cartProducts.forEach(product => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(product));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.cartProducts.length} позиций(а) стоимостью ${this.countPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },

    countPrice() {
        return this.cartProducts.reduce(function (price, product) {
            return price + product.price * product.quantity;
        }, 0);
    },

    clearProduct() {
        this.cartProducts = [];
        this.render();
    },

    byuProduct(product) {
        if (product) {
            const findInBasket = this.cartProducts.find(({ idProd }) => product.idProd === idProd);
            if (findInBasket) {
                findInBasket.quantity++;
            }
            else {
                this.cartProducts.push(Object.assign({ quantity: 1 }, product));
            }
            this.render();
        }
        else {
            alert('Ошибка!');
        }
    },

};



catalog.init();
cart.init();

