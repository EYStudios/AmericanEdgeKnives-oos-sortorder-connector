var Connection = require('../connection');

//Initialize new API Connection:
var api = new Connection({
    hash: 'tzvk7f46wi',
    token: '7swn1uxtci3bugt8qbtzrs53evm19t3',
    cid: 'hhg010cxa4me5eoduedlsbkapaeczxt',
    host: 'https://api.bigcommerce.com' //The BigCommerce API Host
});
/*var api = new Connection({
    hash: "16x7y2x5zm",
    token: "ashdpy2ces5rcgousu0iekzlspzh72v",
    cid: "hnlr60pasrmfi8ofsaz5zip8rvbgeao",
    host: "https://api.bigcommerce.com" //The BigCommerce API Host
  });*/
  
var appRouter = function (app) {

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get("/", function (req, res) {
        res.status(200).send({
            message: 'Welcome to the API'
        });
    });

    
    // maximum value for sort order given by BC
    var newSortOrder = 2147483647;
    var sortOrder;

    app.get("/sort", function (req, res) {
        res.status(200).send({
            message: 'Sort will happen here'
        });
        console.log("this was hit");
        api.get('products?inventory_level:greater=0&limit=10000').then(function (response) {

            let totalPages2 = response.meta.pagination.total_pages;


            for(var i = 1; i <= totalPages2; i++) {

                // BC api v3 allows filter queries such as inventory_level:greater=0 which will return all in stock products 
                api.get('products?inventory_level:greater=0&page='+i+'&limit=10000').then(function (productsThree) {
                   // console.log("in stock products", productsTwo);
                    // Looping through in stock products
                    Object.keys(productsThree).forEach(function (inStockItem) {
                       
                        for (var j = 0; j < productsThree[inStockItem].length; j++)
                            // Check if in stock product has sort number 0
                            if(productsThree[inStockItem][j].sort_order === 0) {
                               
                                console.log("This product", productsThree[inStockItem][j].name, "sort order is changing");
                                // Update sort order from 0 to corresponding a-z sort number
                                //Setting variable to the first letter of the prodct name
                                var productName =  productsThree[inStockItem][j].name;
                                var productChar1;          
                                var productChar2;
                                var productChar3;
                                var productChar4;
                                var productLetter1;
                                var productLetter2;
                                var productLetter3;
                                var productLetter4;  

                                if(productName.charAt(0) === "["){
                                    productChar1 = productName.indexOf(']')+1;
                                    productLetter1 = productName.charAt(productChar1).toUpperCase();
                                    productChar2 = productName.indexOf(']')+2;
                                    productLetter2 = productName.charAt(productChar2).toUpperCase();
                                    productChar3 = productName.indexOf(']')+3;
                                    productLetter3 = productName.charAt(productChar3).toUpperCase();
                                    productChar4 = productName.indexOf(']')+4;
                                    productLetter4 = productName.charAt(productChar4).toUpperCase();
                                } else {
                                    productLetter1 = productsThree[inStockItem][j].name.charAt(0).toUpperCase();
                                    productLetter2 = productsThree[inStockItem][j].name.charAt(1).toUpperCase();
                                    productLetter3 = productsThree[inStockItem][j].name.charAt(2).toUpperCase();
                                    productLetter4 = productsThree[inStockItem][j].name.charAt(3).toUpperCase();
                                }                                               
            
                                
                                // setting sort order based on the first letter of the product name
                                switch(productLetter1){
                                    case "0":
                                        sortOrder1 = "0";
                                        break;
                                    case "1":
                                      sortOrder1 = "1";
                                      break;
                                    case "2":
                                      sortOrder1 = "2";
                                      break;
                                    case "3":
                                      sortOrder1 = "3";
                                      break;
                                    case "4":
                                      sortOrder = "4";
                                      break;
                                      case "5":
                                      sortOrder1 = "5";
                                      break;
                                    case "6":
                                      sortOrder1 = "6";
                                      break;
                                      case "7":
                                      sortOrder1 = "7";
                                      break;
                                    case "8":
                                      sortOrder1 = "8";
                                      break;
                                    case "9":
                                      sortOrder1 = "9";
                                      break; 
                                    case "A" || "a": 
                                        sortOrder1 = "11";
                                        break;
                                    case "B" || "b": 
                                        sortOrder1 = "12";
                                        break; 
                                    case "C" || "c": 
                                        sortOrder1 = "13";
                                        break;   
                                    case "D" || "d": 
                                        sortOrder1 = "14";
                                        break;
                                    case "E" || "e": 
                                        sortOrder1 = "15";
                                        break; 
                                    case "F" || "f": 
                                        sortOrder1 = "16";
                                        break; 
                                    case "G" || "g": 
                                        sortOrder1 = "17";
                                        break;
                                    case "H" || "h": 
                                        sortOrder1 = "18";
                                        break; 
                                    case "I" || "i": 
                                        sortOrder1 = "19";
                                        break; 
                                    case "J" || "j": 
                                        sortOrder1 = "20";
                                        break;
                                    case "K" || "k": 
                                        sortOrder1 = "21";
                                        break;
                                    case "L" || "l": 
                                        sortOrder1 = "22";
                                        break;
                                    case "M" || "m": 
                                        sortOrder1 = "23";
                                        break;
                                    case "N" || "n": 
                                        sortOrder1 = "24";
                                        break;
                                    case "O" || "o": 
                                        sortOrder1 = "25";
                                        break;
                                    case "P" || "p": 
                                        sortOrder1 = "26";
                                        break;
                                    case "Q" || "q": 
                                        sortOrder1 = "27";
                                        break;
                                    case "R" || "r": 
                                        sortOrder1 = "28";
                                        break;
                                    case "S" || "s": 
                                        sortOrder1 = "29";
                                        break;
                                    case "T" || "t": 
                                        sortOrder1 = "30";
                                        break;
                                    case "U" || "u": 
                                        sortOrder1 = "31";
                                        break;
                                    case "V" || "v": 
                                        sortOrder1 = "32";
                                        break; 
                                    case "W" || "w": 
                                        sortOrder1 = "33";
                                        break; 
                                    case "X" || "x": 
                                        sortOrder1 = "34";
                                        break; 
                                    case "Y" || "y": 
                                        sortOrder1 = "35";
                                        break;  
                                    case "Z" || "z": 
                                        sortOrder1 = "36";
                                        break;
                                    default: 
                                        sortOrder1 = "11";
                                        break;                            
                                } 
                  
                                switch(productLetter2){
                                    case "A" || "a": 
                                        sortOrder2 = "01";
                                        break;
                                    case "B" || "b": 
                                        sortOrder2 = "02";
                                        break; 
                                    case "C" || "c": 
                                        sortOrder2 = "03";
                                        break;   
                                    case "D" || "d": 
                                        sortOrder2 = "04";
                                        break;
                                    case "E" || "e": 
                                        sortOrder2 = "05";
                                        break; 
                                    case "F" || "f": 
                                        sortOrder2 = "06";
                                        break; 
                                    case "G" || "g": 
                                        sortOrder2 = "07";
                                        break;
                                    case "H" || "h": 
                                        sortOrder2 = "08";
                                        break; 
                                    case "I" || "i": 
                                        sortOrder2 = "09";
                                        break; 
                                    case "J" || "j": 
                                        sortOrder2 = "10";
                                        break;
                                    case "K" || "k": 
                                        sortOrder2 = "11";
                                        break;
                                    case "L" || "l": 
                                        sortOrder2 = "12";
                                        break;
                                    case "M" || "m": 
                                        sortOrder2 = "13";
                                        break;
                                    case "N" || "n": 
                                        sortOrder2 = "14";
                                        break;
                                    case "O" || "o": 
                                        sortOrder2 = "15";
                                        break;
                                    case "P" || "p": 
                                        sortOrder2 = "16";
                                        break;
                                    case "Q" || "q": 
                                        sortOrder2 = "17";
                                        break;
                                    case "R" || "r": 
                                        sortOrder2 = "18";
                                        break;
                                    case "S" || "s": 
                                        sortOrder2 = "19";
                                        break;
                                    case "T" || "t": 
                                        sortOrder2 = "20";
                                        break;
                                    case "U" || "u": 
                                        sortOrder2 = "21";
                                        break;
                                    case "V" || "v": 
                                        sortOrder2 = "22";
                                        break; 
                                    case "W" || "w": 
                                        sortOrder2 = "23";
                                        break; 
                                    case "X" || "x": 
                                        sortOrder2 = "24";
                                        break; 
                                    case "Y" || "y": 
                                        sortOrder2 = "25";
                                        break;  
                                    case "Z" || "z": 
                                        sortOrder2 = "26";
                                        break;
                                    default: 
                                        sortOrder2 = "00";
                                        break;                            
                                } 
      
                                switch(productLetter3){
                                    case "A" || "a": 
                                        sortOrder3 = "01";
                                        break;
                                    case "B" || "b": 
                                        sortOrder3 = "02";
                                        break; 
                                    case "C" || "c": 
                                        sortOrder3 = "03";
                                        break;   
                                    case "D" || "d": 
                                        sortOrder3 = "04";
                                        break;
                                    case "E" || "e": 
                                        sortOrder3 = "05";
                                        break; 
                                    case "F" || "f": 
                                        sortOrder3 = "06";
                                        break; 
                                    case "G" || "g": 
                                        sortOrder3 = "07";
                                        break;
                                    case "H" || "h": 
                                        sortOrder3 = "08";
                                        break; 
                                    case "I" || "i": 
                                        sortOrder3 = "09";
                                        break; 
                                    case "J" || "j": 
                                        sortOrder3 = "10";
                                        break;
                                    case "K" || "k": 
                                        sortOrder3 = "11";
                                        break;
                                    case "L" || "l": 
                                        sortOrder3 = "12";
                                        break;
                                    case "M" || "m": 
                                        sortOrder3 = "13";
                                        break;
                                    case "N" || "n": 
                                        sortOrder3 = "14";
                                        break;
                                    case "O" || "o": 
                                        sortOrder3 = "15";
                                        break;
                                    case "P" || "p": 
                                        sortOrder3 = "16";
                                        break;
                                    case "Q" || "q": 
                                        sortOrder3 = "17";
                                        break;
                                    case "R" || "r": 
                                        sortOrder3 = "18";
                                        break;
                                    case "S" || "s": 
                                        sortOrder3 = "19";
                                        break;
                                    case "T" || "t": 
                                        sortOrder3 = "20";
                                        break;
                                    case "U" || "u": 
                                        sortOrder3 = "21";
                                        break;
                                    case "V" || "v": 
                                        sortOrder3 = "22";
                                        break; 
                                    case "W" || "w": 
                                        sortOrder3 = "23";
                                        break; 
                                    case "X" || "x": 
                                        sortOrder3 = "24";
                                        break; 
                                    case "Y" || "y": 
                                        sortOrder3 = "25";
                                        break;  
                                    case "Z" || "z": 
                                        sortOrder3 = "26";
                                        break;
                                    default: 
                                        sortOrder3 = "00";
                                        break;                            
                                } 
                                
                                switch(productLetter4){
                                    case "A" || "a": 
                                        sortOrder4 = "01";
                                        break;
                                    case "B" || "b": 
                                        sortOrder4 = "02";
                                        break; 
                                    case "C" || "c": 
                                        sortOrder4 = "03";
                                        break;   
                                    case "D" || "d": 
                                        sortOrder4 = "04";
                                        break;
                                    case "E" || "e": 
                                        sortOrder4 = "05";
                                        break; 
                                    case "F" || "f": 
                                        sortOrder4 = "06";
                                        break; 
                                    case "G" || "g": 
                                        sortOrder4 = "07";
                                        break;
                                    case "H" || "h": 
                                        sortOrder4 = "08";
                                        break; 
                                    case "I" || "i": 
                                        sortOrder4 = "09";
                                        break; 
                                    case "J" || "j": 
                                        sortOrder4 = "10";
                                        break;
                                    case "K" || "k": 
                                        sortOrder4 = "11";
                                        break;
                                    case "L" || "l": 
                                        sortOrder4 = "12";
                                        break;
                                    case "M" || "m": 
                                        sortOrder4 = "13";
                                        break;
                                    case "N" || "n": 
                                        sortOrder4 = "14";
                                        break;
                                    case "O" || "o": 
                                        sortOrder4 = "15";
                                        break;
                                    case "P" || "p": 
                                        sortOrder4 = "16";
                                        break;
                                    case "Q" || "q": 
                                        sortOrder4 = "17";
                                        break;
                                    case "R" || "r": 
                                        sortOrder4 = "18";
                                        break;
                                    case "S" || "s": 
                                        sortOrder4 = "19";
                                        break;
                                    case "T" || "t": 
                                        sortOrder4 = "20";
                                        break;
                                    case "U" || "u": 
                                        sortOrder4 = "21";
                                        break;
                                    case "V" || "v": 
                                        sortOrder4 = "22";
                                        break; 
                                    case "W" || "w": 
                                        sortOrder4 = "23";
                                        break; 
                                    case "X" || "x": 
                                        sortOrder4 = "24";
                                        break; 
                                    case "Y" || "y": 
                                        sortOrder4 = "25";
                                        break;  
                                    case "Z" || "z": 
                                        sortOrder4 = "26";
                                        break;
                                    default: 
                                        sortOrder4 = "00";
                                        break;                            
                                } 
                                console.log(sortOrder1, productLetter1, "first");
                                console.log(sortOrder2, productLetter2, "second");
                                console.log(sortOrder3, productLetter3, "third");
                                console.log(sortOrder4, productLetter4, "fourth");
                                var concatOrder = sortOrder1 + sortOrder2 + sortOrder3+ sortOrder4;
                                sortOrder =  parseInt(concatOrder); 
                                console.log(sortOrder);

                                api.put('products/' + productsThree[inStockItem][j].id, {
                                    sort_order: sortOrder 
                                }).then(function (req, res) {
                                    // console.log(req);
                                }).catch((err) => {
                                    console.log(err)
                                });
                            }
                    });

                // Return error if any
                }).catch((err) => {
                    console.log(err)
                });
            }
        }).catch((err) => {
            console.log(err)
        });
        
    });
    //Create Route to grab all instock products from an external api call
    //route will look at all instock products get the first letter than sort accordingly.

    // Switched to BC api v3

    function outOfStockOrder() {



            api.get('products?inventory_level=0&limit=10000').then(function (response) {

                let totalPages = response.meta.pagination.total_pages;


                for(var i = 1; i <= totalPages; i++) {
                    console.log(i);

                    // BC api v3 allows filter queries such as inventory_level=0 which will return all out of stock products 
                    api.get('products?inventory_level=0&page='+i+'&limit=10000').then(function (productsOne) {
                        
                        // Looping through out of stock products
                        Object.keys(productsOne).forEach(function (outOfStockItem) {
                           
                            for(var i = 0; i < productsOne[outOfStockItem].length; i++) {  
                                
                                // Checking to see if we've already changed the sort order for this product or if the product is using inventory tracking.
                                
                                    if(productsOne[outOfStockItem][i].inventory_tracking !== 'none' && productsOne[outOfStockItem][i].sort_order < newSortOrder ) {
                                        console.log("This product", productsOne[outOfStockItem][i].name, "is now out of stock, its inventory level is now", productsOne[outOfStockItem][i].inventory_level);
                                        // If product hasn't been sorted before this means it recently went out of stock
                                        // Update out of stock product with new sort order
                                        api.put('products/' + productsOne[outOfStockItem][i].id, {
                                            sort_order: newSortOrder
                                        }).then(function (req, res) {
                                            // console.log(req);
                                        }).catch((err) => {
                                            console.log(err)
                                        });

                                    }
                                    
                            }
                        });


                    // Return error if any
                    }).catch((err) => {
                        console.log(err)
                    });

                }

            // Return error if any
            }).catch((err) => {
                console.log(err)
            });

            api.get('products?inventory_level:greater=0&limit=10000').then(function (response) {

                let totalPages2 = response.meta.pagination.total_pages;


                for(var i = 1; i <= totalPages2; i++) {

                    // BC api v3 allows filter queries such as inventory_level:greater=0 which will return all in stock products 
                    api.get('products?inventory_level:greater=0&page='+i+'&limit=10000').then(function (productsTwo) {
                       // console.log("in stock products", productsTwo);
                        // Looping through in stock products
                        Object.keys(productsTwo).forEach(function (inStockItem) {
                           
                            for (var j = 0; j < productsTwo[inStockItem].length; j++)
                                // Check if in stock product has the maximum sort order which means this product was recently restocked
                                if(productsTwo[inStockItem][j].sort_order === newSortOrder) {
                                   
                                    console.log("This product", productsTwo[inStockItem][j].name, "is now in stock, its inventory level is now", productsTwo[inStockItem][j].inventory_level);
                                    // Update recently restocked product with sort order or 0
                                    //Setting variable to the first letter of the prodct name
                                    var productName =  productsTwo[inStockItem][j].name;
                                    console.log("This product", productsTwo[inStockItem][j].name, "sort order is changing");
                                // Update sort order from 0 to corresponding a-z sort number
                                //Setting variable to the first letter of the prodct name
                                var productName =  productsTwo[inStockItem][j].name;
                                var productChar1;          
                                var productChar2;
                                var productChar3;
                                var productChar4;
                                var productLetter1;
                                var productLetter2;
                                var productLetter3;
                                var productLetter4;  

                                if(productName.charAt(0) === "["){
                                    productChar1 = productName.indexOf(']')+1;
                                    productLetter1 = productName.charAt(productChar1).toUpperCase();
                                    productChar2 = productName.indexOf(']')+2;
                                    productLetter2 = productName.charAt(productChar2).toUpperCase();
                                    productChar3 = productName.indexOf(']')+3;
                                    productLetter3 = productName.charAt(productChar3).toUpperCase();
                                    productChar4 = productName.indexOf(']')+4;
                                    productLetter4 = productName.charAt(productChar4).toUpperCase();
                                } else {
                                    productLetter1 = productsTwo[inStockItem][j].name.charAt(0).toUpperCase();
                                    productLetter2 = productsTwo[inStockItem][j].name.charAt(1).toUpperCase();
                                    productLetter3 = productsTwo[inStockItem][j].name.charAt(2).toUpperCase();
                                    productLetter4 = productsTwo[inStockItem][j].name.charAt(3).toUpperCase();
                                }                                               
            
                                
                                // setting sort order based on the first letter of the product name
                                switch(productLetter1){
                                    case "0":
                                        sortOrder1 = "0";
                                        break;
                                    case "1":
                                      sortOrder1 = "1";
                                      break;
                                    case "2":
                                      sortOrder1 = "2";
                                      break;
                                    case "3":
                                      sortOrder1 = "3";
                                      break;
                                    case "4":
                                      sortOrder = "4";
                                      break;
                                      case "5":
                                      sortOrder1 = "5";
                                      break;
                                    case "6":
                                      sortOrder1 = "6";
                                      break;
                                      case "7":
                                      sortOrder1 = "7";
                                      break;
                                    case "8":
                                      sortOrder1 = "8";
                                      break;
                                    case "9":
                                      sortOrder1 = "9";
                                      break; 
                                    case "A" || "a": 
                                        sortOrder1 = "11";
                                        break;
                                    case "B" || "b": 
                                        sortOrder1 = "12";
                                        break; 
                                    case "C" || "c": 
                                        sortOrder1 = "13";
                                        break;   
                                    case "D" || "d": 
                                        sortOrder1 = "14";
                                        break;
                                    case "E" || "e": 
                                        sortOrder1 = "15";
                                        break; 
                                    case "F" || "f": 
                                        sortOrder1 = "16";
                                        break; 
                                    case "G" || "g": 
                                        sortOrder1 = "17";
                                        break;
                                    case "H" || "h": 
                                        sortOrder1 = "18";
                                        break; 
                                    case "I" || "i": 
                                        sortOrder1 = "19";
                                        break; 
                                    case "J" || "j": 
                                        sortOrder1 = "20";
                                        break;
                                    case "K" || "k": 
                                        sortOrder1 = "21";
                                        break;
                                    case "L" || "l": 
                                        sortOrder1 = "22";
                                        break;
                                    case "M" || "m": 
                                        sortOrder1 = "23";
                                        break;
                                    case "N" || "n": 
                                        sortOrder1 = "24";
                                        break;
                                    case "O" || "o": 
                                        sortOrder1 = "25";
                                        break;
                                    case "P" || "p": 
                                        sortOrder1 = "26";
                                        break;
                                    case "Q" || "q": 
                                        sortOrder1 = "27";
                                        break;
                                    case "R" || "r": 
                                        sortOrder1 = "28";
                                        break;
                                    case "S" || "s": 
                                        sortOrder1 = "29";
                                        break;
                                    case "T" || "t": 
                                        sortOrder1 = "30";
                                        break;
                                    case "U" || "u": 
                                        sortOrder1 = "31";
                                        break;
                                    case "V" || "v": 
                                        sortOrder1 = "32";
                                        break; 
                                    case "W" || "w": 
                                        sortOrder1 = "33";
                                        break; 
                                    case "X" || "x": 
                                        sortOrder1 = "34";
                                        break; 
                                    case "Y" || "y": 
                                        sortOrder1 = "35";
                                        break;  
                                    case "Z" || "z": 
                                        sortOrder1 = "36";
                                        break;
                                    default: 
                                        sortOrder1 = "11";
                                        break;                            
                                } 
                  
                                switch(productLetter2){
                                    case "A" || "a": 
                                        sortOrder2 = "01";
                                        break;
                                    case "B" || "b": 
                                        sortOrder2 = "02";
                                        break; 
                                    case "C" || "c": 
                                        sortOrder2 = "03";
                                        break;   
                                    case "D" || "d": 
                                        sortOrder2 = "04";
                                        break;
                                    case "E" || "e": 
                                        sortOrder2 = "05";
                                        break; 
                                    case "F" || "f": 
                                        sortOrder2 = "06";
                                        break; 
                                    case "G" || "g": 
                                        sortOrder2 = "07";
                                        break;
                                    case "H" || "h": 
                                        sortOrder2 = "08";
                                        break; 
                                    case "I" || "i": 
                                        sortOrder2 = "09";
                                        break; 
                                    case "J" || "j": 
                                        sortOrder2 = "10";
                                        break;
                                    case "K" || "k": 
                                        sortOrder2 = "11";
                                        break;
                                    case "L" || "l": 
                                        sortOrder2 = "12";
                                        break;
                                    case "M" || "m": 
                                        sortOrder2 = "13";
                                        break;
                                    case "N" || "n": 
                                        sortOrder2 = "14";
                                        break;
                                    case "O" || "o": 
                                        sortOrder2 = "15";
                                        break;
                                    case "P" || "p": 
                                        sortOrder2 = "16";
                                        break;
                                    case "Q" || "q": 
                                        sortOrder2 = "17";
                                        break;
                                    case "R" || "r": 
                                        sortOrder2 = "18";
                                        break;
                                    case "S" || "s": 
                                        sortOrder2 = "19";
                                        break;
                                    case "T" || "t": 
                                        sortOrder2 = "20";
                                        break;
                                    case "U" || "u": 
                                        sortOrder2 = "21";
                                        break;
                                    case "V" || "v": 
                                        sortOrder2 = "22";
                                        break; 
                                    case "W" || "w": 
                                        sortOrder2 = "23";
                                        break; 
                                    case "X" || "x": 
                                        sortOrder2 = "24";
                                        break; 
                                    case "Y" || "y": 
                                        sortOrder2 = "25";
                                        break;  
                                    case "Z" || "z": 
                                        sortOrder2 = "26";
                                        break;
                                    default: 
                                        sortOrder2 = "00";
                                        break;                            
                                } 
      
                                switch(productLetter3){
                                    case "A" || "a": 
                                        sortOrder3 = "01";
                                        break;
                                    case "B" || "b": 
                                        sortOrder3 = "02";
                                        break; 
                                    case "C" || "c": 
                                        sortOrder3 = "03";
                                        break;   
                                    case "D" || "d": 
                                        sortOrder3 = "04";
                                        break;
                                    case "E" || "e": 
                                        sortOrder3 = "05";
                                        break; 
                                    case "F" || "f": 
                                        sortOrder3 = "06";
                                        break; 
                                    case "G" || "g": 
                                        sortOrder3 = "07";
                                        break;
                                    case "H" || "h": 
                                        sortOrder3 = "08";
                                        break; 
                                    case "I" || "i": 
                                        sortOrder3 = "09";
                                        break; 
                                    case "J" || "j": 
                                        sortOrder3 = "10";
                                        break;
                                    case "K" || "k": 
                                        sortOrder3 = "11";
                                        break;
                                    case "L" || "l": 
                                        sortOrder3 = "12";
                                        break;
                                    case "M" || "m": 
                                        sortOrder3 = "13";
                                        break;
                                    case "N" || "n": 
                                        sortOrder3 = "14";
                                        break;
                                    case "O" || "o": 
                                        sortOrder3 = "15";
                                        break;
                                    case "P" || "p": 
                                        sortOrder3 = "16";
                                        break;
                                    case "Q" || "q": 
                                        sortOrder3 = "17";
                                        break;
                                    case "R" || "r": 
                                        sortOrder3 = "18";
                                        break;
                                    case "S" || "s": 
                                        sortOrder3 = "19";
                                        break;
                                    case "T" || "t": 
                                        sortOrder3 = "20";
                                        break;
                                    case "U" || "u": 
                                        sortOrder3 = "21";
                                        break;
                                    case "V" || "v": 
                                        sortOrder3 = "22";
                                        break; 
                                    case "W" || "w": 
                                        sortOrder3 = "23";
                                        break; 
                                    case "X" || "x": 
                                        sortOrder3 = "24";
                                        break; 
                                    case "Y" || "y": 
                                        sortOrder3 = "25";
                                        break;  
                                    case "Z" || "z": 
                                        sortOrder3 = "26";
                                        break;
                                    default: 
                                        sortOrder3 = "00";
                                        break;                            
                                } 
                                
                                switch(productLetter4){
                                    case "A" || "a": 
                                        sortOrder4 = "01";
                                        break;
                                    case "B" || "b": 
                                        sortOrder4 = "02";
                                        break; 
                                    case "C" || "c": 
                                        sortOrder4 = "03";
                                        break;   
                                    case "D" || "d": 
                                        sortOrder4 = "04";
                                        break;
                                    case "E" || "e": 
                                        sortOrder4 = "05";
                                        break; 
                                    case "F" || "f": 
                                        sortOrder4 = "06";
                                        break; 
                                    case "G" || "g": 
                                        sortOrder4 = "07";
                                        break;
                                    case "H" || "h": 
                                        sortOrder4 = "08";
                                        break; 
                                    case "I" || "i": 
                                        sortOrder4 = "09";
                                        break; 
                                    case "J" || "j": 
                                        sortOrder4 = "10";
                                        break;
                                    case "K" || "k": 
                                        sortOrder4 = "11";
                                        break;
                                    case "L" || "l": 
                                        sortOrder4 = "12";
                                        break;
                                    case "M" || "m": 
                                        sortOrder4 = "13";
                                        break;
                                    case "N" || "n": 
                                        sortOrder4 = "14";
                                        break;
                                    case "O" || "o": 
                                        sortOrder4 = "15";
                                        break;
                                    case "P" || "p": 
                                        sortOrder4 = "16";
                                        break;
                                    case "Q" || "q": 
                                        sortOrder4 = "17";
                                        break;
                                    case "R" || "r": 
                                        sortOrder4 = "18";
                                        break;
                                    case "S" || "s": 
                                        sortOrder4 = "19";
                                        break;
                                    case "T" || "t": 
                                        sortOrder4 = "20";
                                        break;
                                    case "U" || "u": 
                                        sortOrder4 = "21";
                                        break;
                                    case "V" || "v": 
                                        sortOrder4 = "22";
                                        break; 
                                    case "W" || "w": 
                                        sortOrder4 = "23";
                                        break; 
                                    case "X" || "x": 
                                        sortOrder4 = "24";
                                        break; 
                                    case "Y" || "y": 
                                        sortOrder4 = "25";
                                        break;  
                                    case "Z" || "z": 
                                        sortOrder4 = "26";
                                        break;
                                    default: 
                                        sortOrder4 = "00";
                                        break;                            
                                } 
                                console.log(sortOrder1, productLetter1, "first");
                                console.log(sortOrder2, productLetter2, "second");
                                console.log(sortOrder3, productLetter3, "third");
                                console.log(sortOrder4, productLetter4, "fourth");
                                var concatOrder = sortOrder1 + sortOrder2 + sortOrder3+ sortOrder4;
                                sortOrder =  parseInt(concatOrder); 
                                console.log(sortOrder);
   
                                    console.log(sortOrder);
                                    api.put('products/' + productsTwo[inStockItem][j].id, {
                                        sort_order: sortOrder 
                                    }).then(function (req, res) {
                                        // console.log(req);
                                    }).catch((err) => {
                                        console.log(err)
                                    });
                                }
                        });

                    // Return error if any
                    }).catch((err) => {
                        console.log(err)
                    });
                }
            }).catch((err) => {
                console.log(err)
            });

    }

    // Running app for the first time
    outOfStockOrder();

    // Running the app again after 1 hour
    setInterval(function () {
        outOfStockOrder();
        console.log('Rerunning after 3 minutes have passed');
    }, 180000);


};

module.exports = appRouter;