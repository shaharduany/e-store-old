const { validationResult } = require("express-validator");
const connectDB = require("../config/mongoDB");
const { validate } = require("./Items");
const Items = require("./Items");
function obj(name, desc, about, img) {
    return {
       name: name,
       description: desc,
       about: about,
       image: img,
       quantity: Math.floor(Math.random()*50 )+1, 
    };
}

const arr = [obj(
    "Rocky's Jacket",
    `The famous jacket from the Oscar-winning movie, Rocky, is for sale`,
    `A small-time Philadelphia boxer gets a supremely rare chance to fight the world heavyweight champion in a bout in which he strives to go the distance for his self-respect.`,
    `https://www.mjackets.com/wp-content/uploads/2021/01/Sylvester-Stallone-Shearling-Bomber-Aviator-Leather-Jacket.jpg`
    ),
    obj(
        `Starwars Original Sword`,
        `An original sword that was used in the 2nd Star-Wars movie`,
        `Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.`,
        `https://i.ytimg.com/vi/IyuM571YZlU/hqdefault.jpg`
    ),
    obj(
        `Charlie Chaplin USED Socks`,
        `Socks that were worn by Charlie Chaplin himself, they're still stink. RARE`,
        `Considered to be one of the most pivotal stars of the early days of Hollywood, Charlie Chaplin lived an interesting life both in his films and behind the camera. He is most recognized as an icon of the silent film era, often associated with his popular character, the Little Tramp; the man with the toothbrush mustache, bowler hat, bamboo cane, and more.`,
        `http://3.bp.blogspot.com/-Ag-uRJTVz4w/UPCZHXQG2SI/AAAAAAAAALY/WeJ3fLLET-4/s1600/Shelby2.JPG`
    ),
    obj(
        `Led Zepplin's FIRST Record`,
        `A Led Zepplin record, in great shape, and signed by the leading singer`,
        `Initially called the New Yardbirds, Led Zeppelin was formed in 1968 by Jimmy Page, the final lead guitarist for the legendary British blues band the Yardbirds. Bassist and keyboard player Jones, like Page, was a veteran studio musician; vocalist Plant and drummer Bonham came from little-known provincial bands.`,
        `https://www.goldminemag.com/.image/t_share/MTY4MzU0OTk5NzAxMDIyNjc4/image-placeholder-title.jpg`
    ),
    obj(
        `Pink Floyd's FIRST Record, SIGNED`,
        `A Pink Floyd signed, original copy record`,
        `ink Floyd were an English rock band formed in London in 1964. Gaining an early following as one of the first British psychedelic groups, they were distinguished for their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows. They became a leading band of the progressive rock genre, cited by some as the greatest progressive rock band of all time.`,
        `https://rockvinylrevival.com/wp-content/uploads/2020/06/179.jpg`
    ),
    obj(
        `Guns and Roses Signed Guitar`,
        `An electric guitar with autographs by all the Guns and Roses band`,
        `ink Floyd were an English rock band formed in London in 1964. Gaining an early following as one of the first British psychedelic groups, they were distinguished for their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows. They became a leading band of the progressive rock genre, cited by some as the greatest progressive rock band of all time.`,
        `https://www.musicgrotto.com/wp-content/uploads/2021/01/electric-guitar-header-image.png`
    ),
    obj(
        `Gold Olympic Medal`,
        `An Olympic Medal from the 50's`,
        `The modern Olympic Games or Olympics (French: Jeux olympiques)[a][1] are the leading international sporting events featuring summer and winter sports competitions in which thousands of athletes from around the world participate in a variety of competitions. The Olympic Games are considered the world's foremost sports competition with more than 200 nations participating.[2] The Olympic Games are normally held every four years, alternating between the Summer and Winter Olympics every two years in the four-year period.`,
        `https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-01/Beijing-Olympic-medals-013122-Getty-FTR.jpg`
    ),
    obj(
        `Eyal Golan's Necklace`,
        `A necklace that was worn by Eyal Golan, it has Hai on it and stuff`,
        `Eyal Golan (Hebrew: אייל גולן; born Eyal Bitton on 12 April 1971) is an Israeli singer who sings in the Mizrahi music pop fusion genre, and considered one of the most successful singers in Israel. Golan reported the highest income of all singers in Israel in 2011.`,
        `https://yonityonit.com/wp-content/uploads/2018/07/filigree-hai-or-chai-necklace-hai-925-sterling-silver-necklace-judaica-necklace-silver-hai-necklace-5b5439ce.jpg`
    )
]

async function setup() {
    await connectDB();
    let item;
    await Items.deleteMany({}).then((a) => console.log('deleted')).catch(err => console.log(err));
    for(let i = 0; i < arr.length; i++){
        item = new Items(arr[i]);
        await item.save();
    }
    console.log(`finished, uploaded ${item.length} items`);
    
}

setup();