//import model
const productModel = require ("../../models/product");


//R - Get all product
const getAllProduct = (req, res) => {
    //B1: Thu thập dữ liệu
    let limit = req.query.limit;

    limit = parseInt(limit);

    if (!limit)
    {
        limit = 10000000;
    };


    //B2: Validate dữ liệu
    const { productName, productType, minPromoPrice, maxPromoPrice } = req.query;
    
    const condition = {};

    if(productName) {
        const regex = new RegExp(`${productName.toLowerCase()}`);
        condition.name = {
            '$regex': regex,
            '$options': 'i'
        }; 
    };

    if(productType) {
        condition.type = productType;
    };

    if(minPromoPrice) {
        condition.promotionPrice = {
            ...condition.promotionPrice,
            $gte: minPromoPrice
        }
    };

    if(maxPromoPrice) {
        condition.promotionPrice = {
            ...condition.promotionPrice,
            $lte: maxPromoPrice
        }
    };

    //B3: Gọi model xử lý dữ liệu
    productModel.find(condition).limit(limit).exec((error,data) => { 
        if(error) {
            return res.status(500).json({
                message: error.message
            });
        };
        
        console.log(data)

        return res.status(200).json({
            message: `Get all product successfully`,
            products: data
        });
    })
};



//export controller thành 1 module
module.exports = { getAllProduct };