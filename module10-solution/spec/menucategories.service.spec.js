describe('menucategories', function () {

    let menucategories;
    let $httpBackend;
    let ApiPath;

    beforeEach(function () {
        module('common');

        inject(function ($injector) {
            menucategories = $injector.get('MenuService');
            $httpBackend = $injector.get('$httpBackend');
            ApiPath = $injector.get('ApiPath');
        });
    });

    let menuCategory = 'L'
    let menuNumber = 1

    it(`should get menu item ${menuCategory}${menuNumber}`, function () {
        let expectedResponse = {
            "description": "chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra",
            "name": "Orange Chicken",
            "price_large": 9.75,
            "short_name": "L1"
        }

        //Spoof the response
        $httpBackend.whenGET(ApiPath + `/menu_items/${menuCategory}/menu_items/${menuNumber - 1}.json`).respond(expectedResponse);

        //Make call to backend
        menucategories.getMenuItem(menuCategory, menuNumber).then(function (response) {
            //Expect response to match
            expect(response).toEqual(expectedResponse);
        });
        $httpBackend.flush();
    });

});