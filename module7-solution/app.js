(function () {
    'use-strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
        .filter('totalPrice', TotalPriceFilterFactory)

    ToBuyController.$inject = ['ShoppingListCheckOffService']
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService', 'totalPriceFilter']

    function ToBuyController(ShoppingListCheckOffService) {
        const toBuy = this;
        toBuy.items = ShoppingListCheckOffService.getToBuyItems()
        toBuy.buyItem = itemName => ShoppingListCheckOffService.buyItem(itemName)
    }

    function AlreadyBoughtController(ShoppingListCheckOffService, totalPriceFilter) {
        const alreadyBought = this;
        alreadyBought.items = ShoppingListCheckOffService.getBoughtItems()
    }

    function ShoppingListCheckOffService() {
        const service = this;

        let items = [
            {
                name: "milk",
                quantity: 2,
                pricePerItem: 2.25
            },
            {
                name: "donuts",
                quantity: 200,
                pricePerItem: 0.5
            },
            {
                name: "cookies",
                quantity: 300,
                pricePerItem: 0.25
            },
            {
                name: "chocolate",
                quantity: 4,
                pricePerItem: 3
            },
            {
                name: "sodas",
                quantity: 10,
                pricePerItem: 1.5
            }
        ]

        //Deep copy in case we need to re-init for some reason
        let toBuyItems = [...items]
        let boughtItems = []

        //Add to bought array and remove from to buy array
        service.buyItem = itemName => {
            boughtItems.push(toBuyItems.find(x => x.name === itemName))
            toBuyItems.splice(toBuyItems.findIndex(x => x.name === itemName), 1)
        }

        //Expose items
        service.getToBuyItems = () => toBuyItems
        service.getBoughtItems = () => boughtItems
    }

    function TotalPriceFilterFactory() {
        return item => `$$$${(item.quantity * item.pricePerItem).toFixed(2)}`
    }
})
();