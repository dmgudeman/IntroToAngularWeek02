'use strict';

 // the angular module is the javascript object called app, and it is given the name confusionApp
 angular.module('confusionApp', [])

     // there is no semi-colon here because the controller is chained in the module
 .controller('menuController',
 //constructor function for app.controller
 function(){

        //identifies tab 1 to active when the program starts
        this.tab = 1;
        this.filtText = '';
        //define and create an array object
        var dishes=[
            {
                name:'Uthapizza',
                image: 'images/uthapizza.png',
                category: 'mains',
                label: 'Hot',
                price: '4.99',
                description: 'A unique combination of Indian Uthappan (pancake) and Italian pizza, topped with  ' +
                'Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                comment: ''
            },
            {
                name:'Zuchipakoda',
                image: 'images/zucchipakoda.png',
                category: 'appetizer',
                label: '',
                price: '1.99',
                description: 'Deep fried Succhini coated with mildly spiced Chickpea flour batter accompanied with a ' +
                'sweet-tangy tamarind sauce.',
                comment: ''
            },
            {
                name:'Vadonut',
                image: 'images/vadonut.png',
                category: 'appetizer',
                label: 'New',
                price: '1.99',
                description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
                comment: ''
            },
            {
                name:'ElaiCheese Cake',
                image: 'images/elaicheesecake.png',
                category: 'dessert',
                label: '',
                price: '2.99',
                description: 'A delectable, semi-sweet New York style Cheese Cake, wiht Graham cracker crust and ' +
                'spiced with Indian cardamoms.',
                comment: ''
            }
        ];

        //identifies this array to this page
        this.dishes = dishes;
        //chooses the tab
        this.select = function(setTab) {
            this.tab = setTab;

            if (setTab ===2) {
                this.filtText = "appetizer";
            }
            else if (setTab === 3) {
                this.filtText = "mains";
            }
            else if (setTab === 4) {
                    this.filtText = "dessert";
            }
            else {
                this.filtText = "";
            }
        };
        this.isSelected = function(checkTab) {
            return(this.tab === checkTab);
        };
     // closes the controller
    });
/*
this.select = function(setTab) {
    this.tab = setTab;
    if (setTab === 2) {
        this.filtText = "appetizer";
    }
    else if (setTab === 3) {
        this.filtText = "mains";
    }
    else if (setTab === 4) {
        this.filtText = "dessert";
    }
    else {
        this.filtText = "";
    }
};
*/