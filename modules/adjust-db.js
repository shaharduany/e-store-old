const { validationResult } = require("express-validator");
const connectDB = require("../config/mongoDB");
const { validate } = require("./Items");
const Items = require("./Items");
async function setup() {
    await connectDB();
    let counter = 0;
    const arr = ["https://m.media-amazon.com/images/I/A172KPydc9L._SL1500_.jpg",
    "https://www.sinplastico.com/5061-large_default/metal-and-wood-childrens-beach-bucket-.jpg",
    "https://s1.kaercher-media.com/products/16673060/main/1/d0.jpg",
    "https://media.vertbaudet.com/Pictures/vertbaudet/201547/medium-hip-morphologik-straight-leg-waterless-jeans-for-boys.jpg",
    "https://cdn.shopify.com/s/files/1/0378/8133/products/Bedding-Mattress_1200x.jpg",
    "https://www.filippa-k.com/globalassets/25977-8968-f21-2.jpg",
    "https://c8.alamy.com/comp/R57EKB/no-smoking-marijuana-forbidden-R57EKB.jpg"];

    let items = await Items.find({});
    await Items.deleteMany({});
    for(let i of items){
        let item = new Items({
            name: i.name,
            quantity: Math.floor(Math.random() * 100),
            description: i.description,
            image: arr[counter++]
        });
        item.save();
    }
}
setup();