const mongoose = require('mongoose');
const Artist = require('../models/Artist');

mongoose.connect('mongodb+srv://fwasil83:pFFAx4kG5oRSCmCG@cluster0.tll1tc2.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const artistsData = [
  {
    name: 'Brittany Watkins',
    location: 'Alabama',
    image:'https://www.classic13tattoo.com/uploads/3/1/1/3/31131321/img-5905-brittany1_orig.jpg',
    bio: 'Brittany Watkins has been tattooing since 2009.',
    style: ['Watercolor', 'Neo Traditional'],
    rating: 5,
    availability: 'Mon-Fri 12pm-9pm',
    pieces: [
      'https://www.classic13tattoo.com/uploads/3/1/1/3/31131321/img-2622.jpeg',
      'https://www.classic13tattoo.com/uploads/3/1/1/3/31131321/img-2614.jpeg',
    ],
    email: 'bwatkins@gmail.com',
  },
  {
    name: 'Marcos Cortinas',
    location: 'Alabama',
    image:'https://www.classic13tattoo.com/uploads/3/1/1/3/31131321/img-5950-marcos1_orig.jpg',
    bio: 'Marcos is an extraordinary talent...',
    style: ['Neo Traditional', 'Custom Designs'],
    rating: 5,
    availability: 'Mon-Fri 12pm-9pm',
    pieces: [
      'https://www.classic13tattoo.com/uploads/3/1/1/3/31131321/marcos-cortinas-classic-13-tattoo-brain-skull.jpg',
      'https://www.classic13tattoo.com/uploads/3/1/1/3/31131321/marcos-cortinas-classic-13-tattoo-dove.jpg',
    ],
    email: 'Marcos@gmail.com',
  },
    {
      name: 'Ms Judy',
      location: 'Alaska',
      image: 'https://images.squarespace-cdn.com/content/v1/5a14c1be2aeba50443a25ed4/640c292a-ed76-419b-923a-f53cb14f80fb/IMG_7529.jpg?format=750w',
      bio: 'Ms Judy began tattooing in 1988 in Anchorage, Alaska. She apprenticed under Larry and has continued working for Anchorage Tattoo Studio. She is now our senior artist and specializes in large work as well as cover ups.',
      style: 'Large Pieces and Cover Ups',
      rating: 5,
      availability: 'Monday - Saturday 10am-7pm',
      pieces: [
        'https://images.squarespace-cdn.com/content/v1/5a14c1be2aeba50443a25ed4/1526510195882-94SCOJGX9SNTTKQ5YR9S/IMG_20171114_195812_603.jpg?format=300w',
        'https://images.squarespace-cdn.com/content/v1/5a14c1be2aeba50443a25ed4/1526510159876-8Q597JR8XDQQXXWUPR3Q/IMG_20170421_092001_504.jpg?format=300w'
      ],
      email: 'AnchorTat@gmail.com'
    },
    {
      name: 'Miss Jenn',
      location: 'Alaska',
      image: 'https://images.squarespace-cdn.com/content/v1/5a14c1be2aeba50443a25ed4/e9ca4bde-b9bf-49ee-8e6c-477baad7e36d/IMG_7489.jpg?format=750w',
      bio: 'Miss Jenn began tattooing in 2008 while apprenticing under Miss Judy, James Allen, and the rest of the senior artists who were working at the time. She loves tattooing lettering and line work, as well as black and gray photo realism, and making her clients happy no matter what style they choose.',
      style: 'Realism and Black and Gray',
      rating: 5,
      availability: 'Monday - Saturday 10am-7pm',
      pieces: [
        'https://images.squarespace-cdn.com/content/v1/5a14c1be2aeba50443a25ed4/1525732665816-XO43R39WYYYUQEDU4WG3/IMG_20180419_221805_721.jpg?format=300w',
        'https://images.squarespace-cdn.com/content/v1/5a14c1be2aeba50443a25ed4/9f01c345-dac6-4092-b204-0da207770b85/20220402_175314_HDR.jpg?format=300w'
      ],
      email: 'MJ@gmail.com'
    },
    {
      name:'Cecilia',
      location:'Arizona',
      image:'https://urbanarttattoo.com/wp-content/uploads/2022/02/cecilia-300x300.jpg',
      bio:'Born in Phoenix, AZ Cecilia has been tattooing since 2011 she draws her inspiration from artists like Nick Baxter, Kelly Doty, Karl Umlauf, Tim Burton, Pietrosedda, Blindvulture, as well as so many others!',
      style:'Neo-Traditional, Illustrative Color Work, Fantasy/Comic Book Color Work, Geometric/Line Work Only',
      rating:'5',
      availability:'THURSDAY – SATURDAY 12-8PM',
      pieces:[
        'https://urbanarttattoo.com/wp-content/uploads/2022/01/CICI22.jpg',
        'https://urbanarttattoo.com/wp-content/uploads/2022/01/CICI27.jpg'
      ],
      email:'cece@gmail.com',

    },
    {
      name:'Maus',
      location:'Arizona',
      image:'https://urbanarttattoo.com/wp-content/uploads/2022/02/phpThumb_generated_thumbnailjpg-5-200x300.jpeg',
      bio:'Born in Lake Havasau City, AZ Maus has been tatooing sice 2013 when he isn\'t busy playing in his punk rock band TV Tragedy he is making amazing art for which he draws his inspiration from aritsts like James Haun, Pushead, Honkey Kong, Skinner, James Rowe, Schwab, Jasen Workman.',
      rating:'5',
      availability:'Tuesday – Saturday 12-8pm',
      pieces:[
        'https://urbanarttattoo.com/wp-content/uploads/2022/01/MAUS9.jpg',
        'https://urbanarttattoo.com/wp-content/uploads/2022/01/MAUS11.jpg'
      ],
      email:'awgreaxf@gmail.com'

    },
   {
      name: 'Jhon Kunst',
      location: 'Colorado',
      image: 'https://images.squarespace-cdn.com/content/v1/61f6f914388acb6c7aaf8d6f/88d44ddb-959d-4775-a07c-9662423f8b87/Jhon+Kunst+Portrait+_+Photo+_+2023-1.jpg?format=750w',
      bio: 'Our incredible South American Family is growing rapidly, and we\’re extremely happy to have Jhon Kunst as one of our newest Artists from Colombia! Whether it\’s color or black and grey, Jhon has an eye that captures details to make a tattoo like a photo.',      
      Style:'HYPER REALISM / BLACK AND GREY / COLOR ILLUSTRATIVE TATTOOS ',
      rating:5 ,
      availability: 'Thur-Tues: 11am-7pm',
      pieces:[ 
        'https://images.squarespace-cdn.com/content/v1/61f6f914388acb6c7aaf8d6f/a8683ab2-7902-4aa4-bdf8-072093b87bcb/Certified+Tattoo+Studios+-+jhon++k+11.8.22-08.jpg?format=300w','https://images.squarespace-cdn.com/content/v1/61f6f914388acb6c7aaf8d6f/4c0b24cd-8e98-4ca8-b304-5c0e61911454/Certified+Tattoo+Studios+-+jhon++k+11.8.22-02.jpg?format=300w',
      ],
     email: 'tahaf@gmail.com'
    },
      {
        name: 'GABRIEL CHAVEZ MONDRAGON',
        location:'Colorado', 
         image: 'https://images.squarespace-cdn.com/content/v1/61f6f914388acb6c7aaf8d6f/bcad9823-bc70-4493-b87d-c6afc0c587ed/Copy+of+Gabriel+Mondragon.jpg?format=750w',
         bio:'Gabriel Mondragon is a talented Tattoo artist known for his exceptional black and grey anime-inspired Tattoos and black work Tattoos. Hailing from Denver, Gabriel is inspired by his fascination, talent, and love for the anime style, and uses his talent to pay tribute to this unique and visually striking art form. His work evokes a sense of nostalgia as he brings together elements from childhood cartoons, monsters, robots, and ninja warriors to create harmonious and dynamic designs.',  
         style:'BLACK AND GRAY ANIME-INSPIRED TATTOOS / BLACKWORK TATTOOS',
         rating:5,
         availability:'Thur-Tues: 11am-7pm',
         pieces:[
          'https://images.squarespace-cdn.com/content/v1/61f6f914388acb6c7aaf8d6f/a15a35ce-e514-404e-b52f-a423221c8f3b/Certified+Tattoo+Studios+-+Gabriel+Mondragon-09.jpg?format=300w','https://images.squarespace-cdn.com/content/v1/61f6f914388acb6c7aaf8d6f/ceeb0d70-9da9-4e6f-825f-25d110788a7c/Certified+Tattoo+Studios+-+Gabriel+Mondragon-21.jpg?format=750w', 
         ],
          email: 'asggdfg@gmail.com',
      },
      {
        name:'Phil Young',
        location:'Connecticut',
        image:'https://cdn.shopify.com/s/files/1/0700/5991/files/ArtisitsPhil.jpg?2948',
        bio: 'Tattooing for seven years and starting at Hope in 2008, Phil Young’s formal art training was drawing all the freaking time. Phil spends most of his spare time trying to combine painting, wiffle ball, Star Wars, and guitar shredding into one sport to be recognized by the Olympic Committee. And he will continue to tattoo until his dream of becoming a ninja astronaut is realized.',
        style:'HYPER REALISM / BLACK AND GREY / COLOR ILLUSTRATIVE TATTOOS',
        rating:5,
        availability:'Monday - Saturday 12:00pm - 8:00pm',
        pieces: [
          'https://cdn.shopify.com/s/files/1/0700/5991/files/py0042.jpg?1636', 'https://cdn.shopify.com/s/files/1/0700/5991/files/py0041.jpg?1636',
        ],
        email: 'aergadg@gmail.com',
      },
      {
      name:'Shane Baker',
      image:'https://cdn.shopify.com/s/files/1/0700/5991/files/mecat_large.jpg?v=1548977612',
      location: 'Connecticut',
      bio: 'Shane has been tattooing since 2008 in Connecticut, Rhode Island and Massachusetts, and has recently come full circle back to his tattoo roots in New Haven. Shane’s childhood love of comics, monster movies, video games and Sci-fi/ Fantasy has helped to sculpt (warp) his unique artistic perspective. A love of animation and comics, became study in animation and illustration at the Art Institute of Boston.',
      style: 'HYPER REALISM / BLACK AND GREY / COLOR ILLUSTRATIVE TATTOOS ',
      rating:5,
      availability:'Monday - Saturday 12:00pm - 8:00pm',
      pieces:[
        'https://cdn.shopify.com/s/files/1/0700/5991/files/5DEA1A4D-3923-44F8-A242-21107E972387_480x480.jpg?v=1680780769', 'https://cdn.shopify.com/s/files/1/0700/5991/files/1-shane.jpg?6678399985056776734'
      ],
      email: 'ARGFDHRH@gmail.com',
      },
      {
    name:'TINA MARABITO',
    location:'Delaware',
    image:'https://www.poppycocktattoo.com/uploads/b/cd094af1853f4a83feb80b6bb99a535d9f93e8aa441c075e477b0f78c0d77129/IMG_0030_1646961174.jpg?width=800&optimize=medium',  
    bio:'Tina attended Camden County College for Fine Arts, as well as CCTI for Commercial Graphics and Ornamental Welding. She began her tattooing career in 2005 and opened Poppycock Tattoo in Dec of 2009. She enjoys painting and tattooing animals, botanicals and anatomical designs. She tattooed at conventions since 2010, including Philadelphia, Atlantic City, Baltimore and Virginia Beach. Tina sells her artwork at shows, festivals and her online store. In her spare time, Tina enjoys camping with her husband & pups, creating macaroni art and driving her 62 Ranchero.',
    style:'All of Tinas tattoos are created specifically for each of her clients and are posted as examples of her work.',
    rating:5 ,
    availability: 'Monday- Friday 12pm-7pm',
    pieces:[
      'https://www.poppycocktattoo.com/uploads/b/cd094af1853f4a83feb80b6bb99a535d9f93e8aa441c075e477b0f78c0d77129/ED7C7B97-E17F-4B16-85C3-9E41D9EC2779_1685860105.JPG?width=400&optimize=medium','https://www.poppycocktattoo.com/uploads/b/cd094af1853f4a83feb80b6bb99a535d9f93e8aa441c075e477b0f78c0d77129/285066050_3196207933955548_7824341685146144815_n_1657164978.jpg?width=400&optimize=medium'
    ],
    email: 'htsjgf@gmail.com',
  },
  {
 name:'Eric Hendrickson',
 location:'Delaware',
 image:'https://www.poppycocktattoo.com/uploads/b/cd094af1853f4a83feb80b6bb99a535d9f93e8aa441c075e477b0f78c0d77129/2022-12-05_17-16-28_1670278597.jpg?width=800&dpr=1',
bio:'Eric graduated the Delaware College of Art and Design in 2000 with an Associates in Illustration and the University of Delaware in 2005 with a Bachelor’s Degree in Fine Arts. Eric joined Poppycock Tattoo in December of 2009 as a tattooist and piercer. He specializes in graphic, new school and watercolor designs. In his spare time, Eric enjoys long walks on the beach and street fighting.',
style:'All of Tinas tattoos are created specifically for each of her clients and are posted as examples of her work.',
rating:5, 
availability: 'Monday- Friday 12pm-7pm',
Pieces:[
  'https://www.poppycocktattoo.com/uploads/b/cd094af1853f4a83feb80b6bb99a535d9f93e8aa441c075e477b0f78c0d77129/IMG_6604_1667872935.jpg?width=400&optimize=medium','https://www.poppycocktattoo.com/uploads/b/cd094af1853f4a83feb80b6bb99a535d9f93e8aa441c075e477b0f78c0d77129/IMG_6602_1667872935.jpg?width=400&optimize=medium',
],
email: 'rhsaH@gmail.com',
  },
  {
name:'Fain Douler' ,
location:'Florida',
image:'https://static.wixstatic.com/media/3f1608_156e7b2512344efb8352513b50e5d93e~mv2.jpg/v1/fill/w_455,h_566,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3f1608_156e7b2512344efb8352513b50e5d93e~mv2.jpg',
bio:'Little Fang tattoos specializes in Neo-trad color, dot work mandalas, and surreal portraits,but she can do it all! Book a free consult or an appointment with her today online.',
style:'Neo-trad color, dot work mandalas, and surreal portraits.',
rating: 5,
availability:'12pm- 9pm,  Monday - Saturday',
pieces:[
  'https://static.wixstatic.com/media/3f1608_53d269b0bddb4292896bedfd9cb948f9~mv2.jpg/v1/fit/w_480,h_640,q_87/3f1608_53d269b0bddb4292896bedfd9cb948f9~mv2.webp','https://static.wixstatic.com/media/3f1608_0a8013ce1fa84fea9f9a9016da832a73~mv2.jpg/v1/fit/w_480,h_640,q_87/3f1608_0a8013ce1fa84fea9f9a9016da832a73~mv2.webp',
],
email: 'dgatrjzf@gmail.com',
  },
  {
name:'Alisa Kislych',
location:'Florida',
image:'https://static.wixstatic.com/media/3f1608_0fa0d997d15c4553a02b497cf152ed33~mv2.jpg/v1/fill/w_680,h_723,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3f1608_0fa0d997d15c4553a02b497cf152ed33~mv2.jpg',
bio: 'Alisa Specializes in floral, fauna, and crystal tattoos.',
style:'floral, fauna, and crystal tattoos',
rating:5,
availability: '12pm- 9pm,  Monday - Saturday',
pieces:[
  'https://static.wixstatic.com/media/3f1608_3e1fddde2dc84cb781808c6143aa47b9~mv2.jpg/v1/fit/w_480,h_640,q_90/3f1608_3e1fddde2dc84cb781808c6143aa47b9~mv2.webp','https://static.wixstatic.com/media/3f1608_e479ebb3909045279ab8baed1b49be23~mv2.jpg/v1/fit/w_480,h_640,q_90/3f1608_e479ebb3909045279ab8baed1b49be23~mv2.webp',
],
email: 'redhshj@gmail.com',
  },
{ 
name:'Angelina Kaduk',
location: 'Georgia',
bio:'A native of the Ukraine, born crafty, Angelina Kaduk grew up painting and drawing. She earned her bachelor’s degree in fine arts in 2009, and settled in with a design job in her European home town. In 2012 Angelina won a visa-lottery; the American Dream was on the horizon for her small family. After working professionally in the American design field for 5 years, Angelina took on a tattoo apprenticeship with our Boss’s longtime associate Vinnie Battle.',
style:'Eastern traditional, floral',
rating:5,
availability:'12pm- 9pm,  Monday - Friday',
pieces:[
  'https://images.squarespace-cdn.com/content/v1/5b0bfcbc31d4df5388af120e/1646257794495-PEQO18SYO24KZKROVAYX/7307DB2B-1B89-428E-AD0D-E32BA3EA086F-90EDC261-BD70-46BC-8D4A-786CA79D1BD5.jpeg?format=300w','https://images.squarespace-cdn.com/content/v1/5b0bfcbc31d4df5388af120e/1646257813152-U4O1EXUVCD61VBM8SDUO/IMG_1463.jpg?format=500w',
],
email: 'trusrh@gmail.com',
},
{
name: 'Saje gray',
location:'Georgia',
image:'https://images.squarespace-cdn.com/content/v1/5b0bfcbc31d4df5388af120e/1527728438341-CO3EV4FQ8V1X27B4UES8/New-Thunderbolt-48.jpg?format=1000w',
bio:'In 2016 Saje earned her B.F.A. In Illustration, and an art career back in California was calling her name. We were sad to see her go.2018 brought some changes to the studio and we were able to lure Saje Gary back to Atlanta and Thunderbolt Tattoo. She loaded up the car with art supplies, and some cute outfits, and made the journey home... lucky for us. She’s a pleasure to be around, and super talented.',
style:'Geometric, portraits',
rating:5,
availability:'12pm- 9pm,  Monday - Friday',
pieces:[
  'https://images.squarespace-cdn.com/content/v1/5b0bfcbc31d4df5388af120e/1530876723303-VGRS1XRRTX6FR4NO65SY/IMG-1115.JPG?format=100w','https://images.squarespace-cdn.com/content/v1/5b0bfcbc31d4df5388af120e/1530876729264-WJAO3PFGC6JLHOGGB4IQ/IMG-0699.jpg?format=100w'
],
email: 'rejdrh@gmail.com',
},
{
name:'Big Island Mike Castillo',
location:'Hawaii',
image:'https://skindeeptattoowaikiki.com/wp-content/uploads/2015/12/Big-Island-Mike.jpg',
bio:'Big Island Mike Castillo started tattooing in 2001. He apprenticed under Mark Mahoney at the Shamrock Social Club in Hollywood, CA with help from Rick Walters and Freddy Negrete. He is known for tattooing many of  the action sports community, such as Travis Pastrana and the Nitro Circus crew and Weeman of the Jackass crew. When he is not tattooing, Big Island Mike rides BMX and has been a BMX judge for the X-Games for the past 21 years. His favorite style of tattooing is black and gray fineline pieces, but is capable of all styles of tattoos.',
style:'black and gray fineline pieces',
rating:'5',
availability:'Monday-Sunday 10Am-11pm',
pieces:[
  'https://skindeeptattoowaikiki.com/wp-content/uploads/2015/10/hale-nui-tattoo-shop-waikiki-hawaii-20-500x500.jpg','https://skindeeptattoowaikiki.com/wp-content/uploads/2015/10/hale-nui-tattoo-shop-waikiki-hawaii-15-500x500.jpg'
],
Email: 'rehds@gmail.com',
},
{
name:'Jennifer Bradbury',
location:'Hawaii',
image: 'https://skindeeptattoowaikiki.com/wp-content/uploads/2017/04/Jennifer-Bradbury.jpg',
bio:'My name is Jennifer Bradbury and I have been tattooing since 2007. I love my job and will pretty much tattoo anything, however my specialty is black and grey realism. When I am not tattooing you can usually find me on a hike with my Shiba Inu, Khaleesi, or reading a book on the beach at Waimanalo Bay. I’m an Aries sun, Aquarius moon, Gemini rising. If you know what that means, then you’re as weird as me and we should get along just fine',
style:'black and grey realism',
rating:'5',
availability:'Monday-Sunday 10Am-11pm ',
pieces:[
  'https://skindeeptattoowaikiki.com/wp-content/uploads/2017/04/fullsizeoutput_76-380x380.jpeg','https://skindeeptattoowaikiki.com/wp-content/uploads/2017/04/fullsizeoutput_60-380x380.jpeg',
],
email: 'sdhfa@gmail.com'
},
{
name: 'Cody “second from the top dollar” Lee',
location:'Idaho',
image:'https://images.squarespace-cdn.com/content/v1/5553d46de4b071d194a175b4/1431563426343-S7AUBHOH0R6170GI626K/image-asset.jpeg?format=1000w',
bio:'Cody Lee is a tattoo artist based in Meridian, ID. He is an accomplished swordsman and 2nd place World Champion Kickball Player.Cody was also once abducted by the Hungarian Mob while on a trip to visit relatives, and sold into the sex trade. He was only released later on when they found him drawing with his own tears, and decided to put his drawing skill to good use.',
style:'Colored Illustration and Cover Ups',
rating:5,
availability:'Monday-Sunday 10Am-11pm',
pieces:[
  'https://images.squarespace-cdn.com/content/v1/5553d46de4b071d194a175b4/1559682237614-CW1A3TW5090FJM2P0JX3/IMG_1796.jpg?format=500w', 'https://images.squarespace-cdn.com/content/v1/5553d46de4b071d194a175b4/1559682178477-SHOYZQ9B273E39FMI5OF/IMG_1792.jpg?format=500w',
],
email: 'seysdfgc@gmail.com',
},
{
name:'Justin P DUncan',
location:'Idaho',
image:'https://images.squarespace-cdn.com/content/v1/5553d46de4b071d194a175b4/1561070637879-Z49G9G11HXMR2W50BGJJ/4C1F0DD8-8C2A-4585-A7EA-4553B2BDEE1B.jpg?format=1000w',
bio:'After a terrible explosion at a rock factory, gamma radiation mixed human DNA and the worlds 2nd largest stone. The resulting aftermath gave rise to Justin P Duncan, a super rock with all the powers of a real life human being. With a hard exterior shell and the creative ambition of a teenager wanting to make his own youtube channel, Justin creates works of art that made even the Hungarian mafia cry. As a reword for blessing their hearts with his advanced understanding of culture, they made him captain of the kick ball team, where he meets his future bff forever Cody “second from the top dollar” Lee. Justin enjoys Jiu-jitsu, uncomfortably large fires, and a somewhat solid handshake. ',
style:'Colored Illustration',
rating:5,
availability:'Monday-Sunday 10Am-11pm ',
pieces:[
  'https://images.squarespace-cdn.com/content/v1/5553d46de4b071d194a175b4/1559679852789-7X1K2EHD5ZYC62TCI40A/IMG_2006.JPG?format=300w','https://images.squarespace-cdn.com/content/v1/5553d46de4b071d194a175b4/1559679875301-2ZL5UH2BR4FGEZGG0OL7/IMG_4550.JPG?format=300w'
],
email: 'rysdv@gmail.com'
},
{
name:'Mike Baalke', 
location: 'Illonois',
image:'https://www.tattoofactory.com/assets/1/13/StaffProfilePicture/craz-this-1.jpg?3341',
bio:'I have been interested in tattooing since my early teens. Receiving my first tattoo twenty years ago and never stopping. In-between these years I came up with the idea of becoming a tattoo artist.Many changes have occurred during these years in the tattoo industry, but I still enjoy doing traditional style tattoos with heavy outlines and bold colors. My latest interest involves black and gray realism and portraits. I am very pleased to join the TATTOO FACTORY! Hope to tattoo you soon.',
style:'black and gray realism and portraits traditional style tattoos with heavy outlines and bold colors.',
rating: 5 ,
availability:'Thursday - Monday from 6pm till 2am',
pieces:[
  'https://www.tattoofactory.com/cms/images/layout/gallerySpacer.png',' https://www.tattoofactory.com/cms/images/layout/gallerySpacer.png',
],
email: 'segx@gmail.com'
          },
{
  name:'JEFF "FROSTY" FRAAS ',
location: 'Illonois',
image:'https://www.tattoofactory.com/assets/1/13/StaffProfilePicture/aaa_Frosty_web_picture.jpg?2544',
Bio: 'Frosty has been working for Tattoo Factory for his entire career, he started his apprenticeship back in 2005 under Master Tattooist Jerry Thrash, when we were across the street in the old shop. Since then, he has been in the deep end of our industry, working hard to perfect his skill and give his clientele the tattoo they deserve.His style has been heavily influenced by the street art movement of the last couple of decades. Like tattoo art it has a raw nature not seen in many other art forms. Tattooing is often motivated by a preference on the part of the client to communicate directly with the public at large, free from perceived confines of the formal art world. ',
style:'Bold colorful illustration and heavy line illustration',
rating:5,
availability:'Thursday - Monday from 6pm till 2am',
pieces:[ 'https://www.tattoofactory.com/cms/images/layout/gallerySpacer.png', 'https://www.tattoofactory.com/cms/images/layout/gallerySpacer.png'
],
email: 'sfbds@gmail.com'
},
{
name: 'Gerrit Verplank ',
location:'Indiana',
image:'https://images.squarespace-cdn.com/content/v1/61ecca27f0be53505d7c5c0b/1ae4e61d-a350-4220-8591-efef4713dcb8/IMG_2069.jpg?format=500w',
bio:'Gerrit Verplank was born an artist. His love of art started at childhood where he covered his schoolwork, sketchbooks, and even his bedroom walls with dynamic doodles and drawings. He  fell in love with art through comic books and the work of illustrator Alex Ross. As you might have noticed, Gerrit and Dina share the same last name; this brother sister team come from a family full of artists.  Its in his DNA!',
style:'black and gray portraits ',
rating:5,
availability:'Monday - Sunday 9Am-10Pm ',
pieces:(1) [
  'https://images.squarespace-cdn.com/content/v1/61ecca27f0be53505d7c5c0b/5fed9796-b3db-4271-ad72-18e8efaadb54/A03D1CC1-D482-4F2A-BAB4-EAC06134B17E.JPG?format=300w ','https://images.squarespace-cdn.com/content/v1/61ecca27f0be53505d7c5c0b/f1c6eba9-e08e-4dc6-97ff-f4ca673427f8/IMG_0182.JPG?format=300w'
],
Email:' segxbj@gmail.com'
},
{
name: 'Katie Small' ,
location:'Indiana',
image:'https://images.squarespace-cdn.com/content/v1/61ecca27f0be53505d7c5c0b/91158291-110b-43b5-81c0-4d6407360fcd/katieProfilePic.jpg?format=300w',
bio:'I have always made art from the time I was tiny, I always had some sort of project. That’s why I decided to pursue art as a career. I studied Fine Art Illustration at the Academy of Art University in San Francisco and I frequently seek out continued education through workshops and classes such as the illustration Master Class, SmArt school and many other resources including my incredibly talented friends and peers! My work is influenced heavily by my background in painting, sculpting, costume appreciation, metal craft and a love of sci-fi and fantasy, comic books, and animation.' ,
style:'black and gray portraits ',
rating: 5,
availability:'Availability:Monday - Sunday 9Am-10Pm ',
pieces:[ 
  'https://images.squarespace-cdn.com/content/v1/61ecca27f0be53505d7c5c0b/aebc7028-21f9-43d4-b8ca-c994b43a98ab/PhotoRoom-20220506_221603_1.png?format=300w ',' https://images.squarespace-cdn.com/content/v1/61ecca27f0be53505d7c5c0b/d957d37e-a120-4d2b-b103-9f7ce749698e/PhotoRoom-20220424_124136.png?format=300w'
],
email: 'jdasfg@gmail.com',
},
{
name:'Jack',
location:'Iowa',
image:' https://www.skinkitchen.com/sites/default/files/2019-02/jack%20resize.jpg',
bio:'Jack has been tattooing since 1993. He has been published in multiple magazines and has won several awards for his tattooing. Jack does truly enjoy doing all styles, though he is most well-known for his photorealistic black and gray. He believes that the customer should have a good idea of what they want, but is more than willing to help them realize their full vision. All in all, Jack thinks the tattoo should be a fun, positive experience, and does his best to offer that to all of his clients.',
style:'hyper realism and black and gray',
rating:5 ,
availability:'Monday-Friday 1–8 PM',
pieces:[
  ' https://www.skinkitchen.com/sites/default/files/styles/scaled_for_gallery_view/public/2022-08/66846FA0-3BB2-409B-AB51-AFD35CB94E3F.jpeg?itok=ZUjkbuqi',' https://www.skinkitchen.com/sites/default/files/styles/scaled_for_gallery_view/public/2019-09/IMG_5436.JPG?itok=QtvrAlRY'
],
email: 'ezzxn@gmail.com'
           },
{
name: 'Jimmy St John',
location: 'Iowa',
image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5WbXsJLtGTVkevRrwF0l5_BdKdKHY1lepYw&usqp=CAU',
bio:'Jimmy has been Tattooing since 1999 and has tattooed all over the United State and even Japan. He will be tattooing by appointment or walk-in through the winter and plans on making Des Moines his headquarters in the future. ',
style:'realism and black and gray',
rating:5 ,
availability:'Monday-Friday 1–8 PM',
pieces:[
  ' https://www.skinkitchen.com/sites/default/files/styles/scaled_for_gallery_view/public/2022-08/188E403A-8AE9-41ED-8680-E04686779FF8.jpeg?itok=FVLG38kK',' https://www.skinkitchen.com/sites/default/files/styles/scaled_for_gallery_view/public/2022-08/24BBAAC1-5A80-4BBD-876A-10A0FC10C48C.jpeg?itok=xRUPVjld'
],
Email: 'rgsgx@gmail.com'
},
{
name: 'Courtney Schenk ',
location:'Kansas',
image:'https://static.wixstatic.com/media/8329f0_4b43a65dccbe483e8b77847a2b5336a8~mv2.jpg/v1/fill/w_490,h_462,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8329f0_4b43a65dccbe483e8b77847a2b5336a8~mv2.jp',
bio: 'Courtney has been tattooing since2017 and she tattoos American traditional, anime, Black and Grey portraits, and script.',
style:'American traditional, anime, Black and Grey portraits, and script',
rating:5,
availability:'Tuesday - Saturday  12pm  - 8pm',
pieces:(1)[
  'https://static.wixstatic.com/media/8329f0_b44aff51cc97497c83fef507d5cdd28c~mv2.jpeg/v1/fill/w_512,h_640,al_c,q_80,enc_auto/8329f0_b44aff51cc97497c83fef507d5cdd28c~mv2.jpeg' ,'https://static.wixstatic.com/media/8329f0_6df4f7beff4c4c51aac991679e8f00f2~mv2.jpeg/v1/fill/w_642,h_803,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8329f0_6df4f7beff4c4c51aac991679e8f00f2~mv2.jpeg'
],
Email:' sgcxvb@gmail.com',
},
{
name: 'Robbie Reel',
location:'Kansas',
image:'https://static.wixstatic.com/media/8329f0_867ec634554d4818a71a49e34f11a4d8~mv2.jpg/v1/fill/w_490,h_461,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8329f0_867ec634554d4818a71a49e34f11a4d8~mv2.jpg',
bio:'Robbie has been tattooing since 1999 and does most all styles of tattooing. ',
style:'American traditional, anime, Black and Grey portraits, and script',
rating:5,
availability:'Tuesday - Saturday  12pm  - 8pm',
pieces:[
  'https://static.wixstatic.com/media/8329f0_41eeafdda4ab4181aa4df3a9902cb6b7~mv2.png/v1/fill/w_602,h_803,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/8329f0_41eeafdda4ab4181aa4df3a9902cb6b7~mv2.png','https://static.wixstatic.com/media/8329f0_3a633292abd848459ab2b4b1f0f01257~mv2.png/v1/fill/w_675,h_750,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/8329f0_3a633292abd848459ab2b4b1f0f01257~mv2.png'
],
email: 'rghsx@gmail.com'
},
{
name:' Meagan Shelton',
location:'Kentucky' ,
image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpw4DJ4Edk295PQpdEaWNxO2qhaAvxed1hSA&usqp=CAU',
Bio:'Tatoo Artist From Kentucky' ,         
style:'Eastern Traditional',
rating:5,
availability:'Tuesday - Saturday  12pm  - 8pm',
pieces:[ 
 ' https://images.squarespace-cdn.com/content/v1/5dd0307112e639242dded8c7/1575495688725-UXMXD3HSNVCEIJ2R3JVA/megan16.jpg?format=500w ', 'https://images.squarespace-cdn.com/content/v1/5dd0307112e639242dded8c7/1575494178346-SURZDZ0ERV4M8L4PTLNX/megan11.jpg?format=500w'
],
email: 'rsgx@gmail.com'
},
{name:'Shaila Roach',
location:'Kentucky',
image:'https://speakeasycustomtattoo.com/wp-content/uploads/2020/07/Editorial_20.jpg',
           bio: 'Artist From Kentucky',
           style:'Eastern Traditional',
          rating:5,
           availability:'Tuesday - Saturday  12pm  - 8pm',
           pieces:['https://images.squarespace-cdn.com/content/v1/5dd0307112e639242dded8c7/1575496180546-QHU7R14TI4TMTNW11VTM/shai5.jpg?format=750w' ,'https://images.squarespace-cdn.com/content/v1/5dd0307112e639242dded8c7/1588439215245-U3DY6Y86P100ZLHL3X3J/43025507_2148695938702958_2126292184872255488_n.jpg?format=1000w'],
           email:'rgsgn@gmail.com'
          },
{
name: 'RICHARD',
           location:'Lousiana',
           image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR87WlkCPtBJRMOLP5HdIGpM-QUFOYQwTyZbg&usqp=CAU',
           bio:'Not much is known about the origins of the one they call Richard, though it is whispered in hushed tones that he emerged from the depths of an ancient land known now as the Midwest. Once confronted about his beginnings by a drunken hobo, he sliced the man in half with a large sword. It is as yet unclear where he produced this sword from. Eventually, he was taken in by a woman and cared for the best way she knew how, which meant a lot of weapons training and bare-knuckle boxing. It was then that he picked up a love for the art of tattooing. Together they stormed the city of New Orleans, where he found the tattooing field to be a lucrative business. Most famous, however, is his method of not so much using a needle and ink, but instead staring down a person’s skin until colors and designs raise up purely out of fear.',
           style:'realism and black and gray',
           rating:5,
           availability:'WED-FRI, SUN 6PM-12AM, SAT 12PM-12AM',
           pieces:[
            'http://nebula.wsimg.com/cd143afdf72f49353de3b3122eb6f283?AccessKeyId=AF5E445D93A5027D25A1&disposition=0&alloworigin=1 ',' http://nebula.wsimg.com/9297e8e6f91af50d885820acb4b23808?AccessKeyId=AF5E445D93A5027D25A1&disposition=0&alloworigin=1'
          ],
           email: 'shxbshsg@gmail.com'
          },
{
  name: 'SCOTT',
          location:'Lousiana',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR87WlkCPtBJRMOLP5HdIGpM-QUFOYQwTyZbg&usqp=CAU',
           bio:'Scott is, for all intents and purposes, not a real person. He is more machine than man, a droid of sorts, imported for the government, digitally combined with a giant gorilla only found in the deepest jungles. Scott was deployed as a bringer of destruction, and it was his life’s purpose to destroy every moving thing with laser beams shooting from his eyes and his hairy steel clawed hands wrapped around the throat of whatever crossed his path. Eventually bored of the constant destruction, he decided to travel to New Orleans and do what came naturally, tattooing. His hideous appearance was shunned, but he was eventually taken in by Juju and joined the Mid City Voodoux krewe. He chooses his victims, narrowly pointing them out with the bright dot of the laser, and demands they be seated in his chair. Those who survive, leave with a permanent mark not only from the tattoo, but his once deadly grasp.',
           style:'realism and black and gray',
           rating:5,
           availability:'THURS-MON 6PM-12AM',
           pieces:[
            'http://nebula.wsimg.com/a7b3bebe1e7a53f7090b552ec03538f4?AccessKeyId=AF5E445D93A5027D25A1&disposition=0&alloworigin=1 ', 'http://nebula.wsimg.com/c6b8272c10b292e10a1d4c9848801f94?AccessKeyId=AF5E445D93A5027D25A1&disposition=0&alloworigin=1'
          ],
           email: 'sgzagb@gmail.com'
          },
          {
name: 'Emma Thompson',
            location: 'Maine',
            image: 'https://media1.popsugar-assets.com/files/thumbor/7PosA_ry1rsSYWbsYXUBdzQEy54/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2016/09/16/932/n/1922153/6d6195e3_edit_img_image_42398419_1473983690/i/Female-Tattoo-Artists-Instagram.png',
            bio: 'With a passion for nature-inspired tattoos, Emma brings intricate details and vibrant colors to her work. Her designs often feature animals, flowers, and landscapes, creating captivating and personalized tattoos for her clients.',
            style: 'Nature-inspired',
            rating: 5,
            availability: 'Monday to Friday, 10am to 6pm',
            pieces: [
            'https://i0.wp.com/www.printmag.com/wp-content/uploads/2019/04/2a34d8_7cfbb39eca5a460ca5179e621c13dc2cmv2.jpg?fit=1025%2C761&ssl=1',
            'https://i.pinimg.com/originals/36/c3/ff/36c3ffc744db82264c158708c01420a6.jpg'
            ],
            email: 'gsgxdcb@gmail.com'
            },
            {
name: 'Liam Parker',
            location: 'Maine',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Florence_Tattoo_Convention_%285158061891%29.jpg/1200px-Florence_Tattoo_Convention_%285158061891%29.jpg',
            bio: 'Liam is known for his bold and geometric tattoo designs. His work combines clean lines and symmetrical patterns to create visually striking tattoos. Liam enjoys working with clients to bring their ideas to life in a unique and precise manner.',
            style: 'Geometric',
            rating: 5,
            availability: 'Tuesday to Saturday, 12pm to 8pm',
            pieces: [
            'https://vawaa.imgix.net/GYxNL49XzQwsiRWHeCM3Y5So?auto=format&w=1440',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRabc4mYcW6r6LQSi1b9WqKiC5vkp8ZZKWvGXIKChJw1StuEi_rRHOKK_Za0SZzv0e675k&usqp=CAU'
            ],
            email: 'hsdgcb@gmail.com'
            },
            {
name: 'Maxine Rodriguez',
            location: 'Maryland',
            image: 'https://cdn.vox-cdn.com/thumbor/AYaujCuY2i1QcUan-PGFWL-FCtI=/0x0:7800x5200/1400x1050/filters:focal(2237x2009:3485x3257):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/69438808/GettyImages_1281406222.0.jpg',
            bio: 'Maxine is a versatile tattoo artist who loves experimenting with different styles. She is skilled in both realistic and illustrative tattoos, creating captivating artwork that tells stories. Maxines attention to detail and ability to capture emotions in her tattoos make her a sought-after artist.',
            style: 'Realistic, Illustrative',
            rating: 5,
            availability: 'Wednesday to Sunday, 11am to 7pm',
            pieces: [
            'https://i.pinimg.com/474x/92/8f/c2/928fc2d76b0b756c9489d1fb83103650.jpg',
            'https://i.pinimg.com/236x/53/c3/ed/53c3ed9ae694c8809811a268b939735e.jpg'
            ],
            email: 'cvdfga@gmail.com'
            },
            {
name: 'Gabriel Martinez',
            location: 'Maryland',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_gDvlTZyyWMllKZXa4lpCqbt5MYLNOvYwm51zpxk9vFxHXMQDlIM_YmTpdvMQLN3R58&usqp=CAU',
            bio: 'Gabriel specializes in bold and vibrant traditional tattoos. His designs draw inspiration from classic Americana and vintage illustrations, creating timeless and eye-catching tattoos. Gabriel enjoys collaborating with clients to create custom pieces that reflect their personal style and story.',
            style: 'Traditional',
            rating: 5,
            availability: 'Monday to Friday, 10am to 6pm',
            pieces: [
            'https://i.pinimg.com/736x/a7/6a/44/a76a4491a18d4523a714a85a4de5cb7a.jpg',
            'https://i.pinimg.com/originals/7e/56/13/7e56131818eee0a710fd04bc05e8790a.jpg'
            ],
            email: 'adgfbj@gmail.com'
            },
            
              {
name: 'Lucas Johnson',
location: 'Michigan',                
image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcDQc3uNy-C3Ubw3CO2u_7KE706rOegvI3qzzg-sJzRu2fkRiuRwGeV0ZTiNruE7-pbWw&usqp=CAU',   
bio: 'With a background in fine arts, Lucas brings a unique artistic perspective to his tattooing. He specializes in intricate black and gray realism, creating detailed portraits and nature-inspired tattoos. Lucas is known for his patience and ability to capture his clients\' visions, ensuring they leave with a tattoo that exceeds their expectations.',               
style: 'Black and Gray Realism',              
rating: 5,            
availability: 'Tuesday to Sunday, 12pm to 8pm',             
pieces: [
                  'https://i.pinimg.com/736x/90/be/d9/90bed9208020e882fe8e37525d15e037.jpg',
                  'https://i.pinimg.com/736x/de/75/74/de75744b2e287f1274374f0d7b605346.jpg'
                ],
email: 'hzfh@gmail.com'
              },
{
name: 'Zoe Anderson',
location: 'Michigan',               
image: 'https://i2-prod.mirror.co.uk/incoming/article28412255.ece/ALTERNATES/s1200b/0_GettyImages-1360681309.jpg',                
bio: 'Zoe is a versatile tattoo artist who enjoys working with various styles, from bold traditional designs to delicate watercolor tattoos. Her attention to detail and passion for storytelling through tattoos make her a sought-after artist at Big Top Tattoo. Zoe loves collaborating with her clients to create personalized and meaningful tattoos.',                            
style: 'Traditional, Watercolor',             
rating: '5',          
availability: 'Monday to Friday, 10am to 6pm',                
pieces: [
                  'https://lifectio.com/wp-content/uploads/2023/04/lifectio-patchwork-tattoos-5.jpg',
                  'https://i.pinimg.com/originals/0a/ea/17/0aea179d210767616535e55de12d1a40.jpg'
                ],
email: 'hfbfg@gmail.com'
},
{
name: 'Ethan Reed',
location: 'Minnesota',                
image: 'https://www.houstononthecheap.com/wp-content/uploads/2022/02/allef-vinicius-vKIc4k6dm10-unsplash-e1645706789883.jpg',               
bio: 'With over 15 years of experience in the tattoo industry, Ethan is a skilled artist who specializes in Japanese-style tattoos. He is known for his bold and vibrant designs, incorporating elements such as dragons, koi fish, and cherry blossoms. Ethan\'s dedication to his craft and his ability to create stunning, custom tattoos have earned him a loyal clientele.',            
style: 'Japanese',         
rating: 5,           
availability: 'Wednesday to Sunday, 11am to 7pm',            
pieces: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQsgV66q0e0dNK_VPaXy3nNlJekcMSlReX-A&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGfNl0LmZeOyz-XkyrWm4tUaZG3JftLfMHHw&usqp=CAU'
    ],
  email: "dgdgdf@gmail.com"
  },
  {
    name: 'Ava Thompson',
    location: 'Minnesota',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKB0u9Sxip-YGVsyU1b58zeN7R-V158US71sIVsgQGptngMVIfp3ePB0YOUOki1ZM5mgY&usqp=CAU',
    bio: 'Ava is a talented tattoo artist with a passion for neo-traditional and illustrative styles. Her tattoos are characterized by bold lines, rich colors, and a touch of whimsy. Ava enjoys pushing the boundaries of her creativity and loves to create unique and eye-catching designs that tell a story. Her friendly and approachable nature makes the tattoo experience enjoyable for her clients.',
    style: 'Neo-traditional, Illustrative',
    rating: 5,
    availability: 'Monday to Saturday, 10am to 6pm',
    pieces: [
      'https://i.pinimg.com/originals/41/3c/d7/413cd710737b42f6972c00a4e44af280.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr5aM-OVIC5Il_MNDVWljc_BL5DPRt9t6NVFz-LTP5v9JYR-UgEpZn5llVeyDgUJAWSsw&usqp=CAU'
    ],
    email: 'dsvcawdwd@gmail.com'
  },
  {
    name: 'Mason Wright',
    location: 'Mississippi',
    image: 'https://wp.inews.co.uk/wp-content/uploads/2018/09/GettyImages-483488907-Read-Only-e1538068001763.jpg?resize=760,507&strip=all&quality=90',
    bio: 'Mason is a talented tattoo artist who specializes in watercolor and abstract tattoo styles. He loves experimenting with colors and textures, creating unique and vibrant tattoos. Mason\'s artistic background and attention to detail allow him to create stunning and personalized tattoos that reflect his clients\' individuality.',
    style: 'Watercolor, Abstract',
    rating: 5,
    availability: 'Tuesday to Sunday, 12pm to 8pm',
    pieces: [
      'https://ychef.files.bbci.co.uk/976x549/p0ctmpn6.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0T6ssefrMQZ95bDRzRVdfS77NO3xVzzqcsaMmSNQ1nC43k3rXvAvAtJSXlwYo2dlSs6A&usqp=CAU'
    ],
    email: 'rhj@gmail.com'
  },
  {
    name: 'Harper Lewis',
    location: 'Mississippi',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiIsp3IdqMM4mdhBfKp0_P-xl2tcqgQFUSOjUXvwGaobtIIZImjDz66qfSA0PQlUFH-6c&usqp=CAU',
    bio: 'Harper is a skilled tattoo artist with a passion for blackwork and dotwork styles. She enjoys creating intricate geometric and mandala tattoos, using precise linework to achieve stunning results. Harper\'s calm and patient demeanor makes her clients feel comfortable throughout the tattooing process, ensuring a positive experience.',
    style: 'Blackwork, Dotwork',
    rating: 5,
    availability: 'Monday to Friday, 10am to 6pm',
    pieces: [
      'https://i.pinimg.com/236x/af/77/fb/af77fb2626e60ff7ee93ddc0508c6d48--badass-tattoos-art-tattoos.jpg',
      'https://i.pinimg.com/736x/50/fc/42/50fc42ace18151aaddbefa5efc8db323.jpg'
    ],
    email: 'gnsmmf@gmail.com'
  },
  {
    name: 'Oliver Parker',
    location: 'Missouri',
    image: 'https://floridatattooacademy.b-cdn.net/wp-content/uploads/people-man-tattoo.jpg',
    bio: 'Oliver is a versatile tattoo artist with a strong foundation in traditional tattooing. He excels in creating bold and timeless designs, incorporating elements such as skulls, roses, and eagles. Oliver\'s attention to detail and dedication to his craft have made him a favorite among clients seeking classic and impactful tattoos.',
    style: 'Traditional',
    rating: 5,
    availability: 'Wednesday to Sunday, 11am to 7pm',
    pieces: [
      'https://i.pinimg.com/originals/56/35/85/56358541a2a556cc0c7139ae40773f2e.jpg',
      'https://i.pinimg.com/736x/2c/0d/dc/2c0ddcdd828193e8fbd7b032a7fb1b92.jpg'
    ],
    email: 'gnfswe@gmail.com'
  },
  {
    name: 'Mia Evans',
    location: 'Missouri',
    image: 'https://brightontattoo.com/wp-content/uploads/2017/02/image-001-1.jpeg',
    bio: 'Mia is a talented tattoo artist known for her intricate and delicate black and gray tattoos. She specializes in realistic portraits, floral designs, and fine linework. Mia\'s ability to capture emotions and expressions in her tattoos sets her apart as an artist. Her dedication and passion for tattooing are evident in every piece she creates.',
    style: 'Black and Gray Realism, Fine Linework',
    rating: 5,
    availability: 'Monday to Saturday, 10am to 6pm',
    pieces: [
      'https://i.pinimg.com/236x/f4/14/19/f41419c8e5e0abe49e9ea904bf932ac2.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOm6Aa6bzXEDIJOUSktfvgqc9idwjnGSpP-w0x7P9-PjqOv5RA-BVO7pNuZ7iy3_iLvLg&usqp=CAU'
    ],
    email: 'rgfDGDH@gmail.com'
  },
  {
    name: 'Benjamin Hayes',
    location: 'Montana',
    image: 'https://img77.uenicdn.com/image/upload/v1652747183/business/9f30e4bd-25cd-4f7e-90ea-2b78dede1fb7.jpg',
    bio: 'Benjamin is a skilled tattoo artist with a passion for nature-inspired tattoos. His style is characterized by intricate linework and a touch of realism, capturing the beauty and essence of animals, plants, and landscapes. Benjamin\'s attention to detail and ability to create tattoos that resonate with his clients\' stories have made him a sought-after artist in Missoula.',
    style: 'Nature-inspired, Realism',
    rating: 5,
    availability: 'Tuesday to Sunday, 12pm to 8pm',
    pieces: [
      'https://www.inkedmag.com/.image/ar_3:2%2Cc_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTU5MDMyODI3OTI0NjUzNzE3/sleeve-tattoo-2.png',
      'https://i.pinimg.com/originals/7f/59/89/7f59890a8084f6fb6dc06f9a0b3e60f5.jpg'
    ],
    email: 'ngsdrgsd@gmail.com'
  },
  {
    name: 'Scarlett Adams',
    location: 'Montana',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYRfAD7kKxe5EszrXldVsazKFaneTAU_ct-Mvokdw-0Wm-iwiyTAZ2nE-XGTTVc_QluoE&usqp=CAU',
    bio: 'Scarlett is a versatile tattoo artist who enjoys working with various styles, from traditional to illustrative. She loves creating bold and colorful tattoos that make a statement. Scarlett\'s friendly and warm personality makes her clients feel comfortable, ensuring a positive tattoo experience.',
    style: 'Traditional, Illustrative',
    rating: 5,
    availability: 'Monday to Friday, 10am to 6pm',
    pieces: [
      'https://i.pinimg.com/originals/5c/94/44/5c9444dcc31d20234ce8197b70af9d25.jpg',
      'https://i.pinimg.com/736x/17/83/30/1783308e102d2aacbc11d17c8ae6e55b--arm-tattoo-tattoo-ink.jpg'
    ],
    email: 'gfbcvbe@gmail.com'
  },
  {
    name: 'Sofia Rodriguez',
    location: 'Nebraska',
    image: 'https://content.api.news/v3/images/bin/2c3bbc1b509a1ce12c8facea9958022a',
    bio: 'Sofia is a talented tattoo artist who specializes in geometric and abstract designs. Her unique style combines clean lines and precise symmetry to create visually striking tattoos. Sofia\'s passion for modern art and her attention to detail make her a sought-after artist in Omaha.',
    style: 'Geometric, Abstract',
    rating: 5,
    availability: 'Tuesday to Saturday, 11am to 7pm',
    pieces: [
      'https://i.pinimg.com/originals/b6/83/2d/b6832de4df3ed5635a7b9b1d0b8fdc18.jpg',
      'https://i.pinimg.com/236x/68/6e/ab/686eab1dbe33454e0d1f4cec3ac921e8--cool-tattoos-awesome-tattoos.jpg'
    ],
    email: 'fgjsfv@gmail.com'
  },
  {
    name: 'Lucas Thompson',
    location: 'Nebraska',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTabHDkcybD0tfdWqCT4ms0wzZ-bptl8psIoC8zbsGSOU2EhgFdC8e4cbRtBWHuPM4ZHr4&usqp=CAU',
    bio: 'Lucas is a versatile tattoo artist who enjoys creating custom designs for his clients. He is skilled in various styles, including realism, black and gray, and neo-traditional. Lucas\'s ability to adapt to different styles and his commitment to customer satisfaction make him a reliable and respected artist in Omaha.',
    style: 'Realism, Black and Gray, Neo-traditional',
    rating: 5,
    availability: 'Monday to Friday, 12pm to 8pm',
    pieces: [
      'https://img.freepik.com/premium-photo/cropped-close-up-bearded-tattoo-artist-working-his-studio-tattooing-sleeve-arm-his-male-client-man-getting-tattooed-by-professional-tattooist_255667-21261.jpg?w=2000',
      'https://images-platform.99static.com/ahmprGzvrCPk2rMem4aoE9EqKHE=/1126x110:2120x1104/580x580/projects-files/135/13506/1350688/f9bb2d52-de80-41ff-830a-159e7220a83b.jpg'
    ],
    email: 'aracvd@gmail.com'
  },
  {
    name: 'Isabella Taylor',
    location: 'Nevada',
    image: 'https://bloximages.chicago2.vip.townnews.com/piratemedia1.com/content/tncms/assets/v3/editorial/1/3b/13b20f44-a3e5-11e8-85c8-637ce740f960/5b79c3a363e7b.image.jpg?resize=1200%2C771',
    bio: 'Isabella is a talented tattoo artist with a passion for floral and botanical designs. Her work often incorporates intricate details and vibrant colors, capturing the beauty and delicacy of flowers. Isabella\'s artistic background and dedication to her craft make her a sought-after artist at Hart & Huntington Tattoo Co.',
    style: 'Floral, Botanical',
    rating: 5,
    availability: 'Wednesday to Sunday, 10am to 6pm',
    pieces: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHznRPLKw0u7fWGdq6ascAu38sgbdxOc7z-bkySK7Ds-hZjzqGRmTwe0DCQ4wifeA5ptM&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg2Zdjx77IujdRsapEkflZwSqdqxiR9ijo8JrELjxYSiwIpOm-bHPFL1VmgBu-NoJ6gfA&usqp=CAU'
    ],
    email: 'aracvd@gmail.com'
  },
  {
    name: 'Nathan Walker',
    location: 'Nevada',
    image: 'https://images.prismic.io/dublinink/c05a8c5c-f566-47f3-8342-6895460c9a70_5CEA0048-8224-4352-BE5E-C122A167C330.jpeg?auto=compress,format',
    bio: 'Nathan specializes in bold and vibrant new school tattoos. His designs feature exaggerated proportions, cartoonish elements, and vibrant colors. Nathan\'s energetic and playful style brings out the fun and whimsical side of tattoo art, creating eye-catching and memorable tattoos for his clients.',
    style: 'New School',
    rating: 5,
    availability: 'Tuesday to Saturday, 11am to 7pm',
    pieces: [
      'https://i.pinimg.com/736x/37/ee/7c/37ee7ccd3658c614fd46f7a40d5c3396.jpg',
      'https://i.pinimg.com/736x/5e/ae/8a/5eae8a8365cdf2a10dc793696f797d9c--zombie-sleeve-tattoos.jpg'
    ],
    email: 'aracvd@gmail.com'
  },
  {
    name: 'Emily Campbell',
    location: 'New Hampshire',
    image: 'https://www.inkedmag.com/.image/t_share/MTU5MDMzMTA4NzA3NDE5OTI4/jesmainfeature.jpg',
    bio: 'Emily is a skilled tattoo artist who enjoys creating detailed black and gray tattoos. Her work often showcases realistic portraits, animals, and intricate patterns. Emily\'s meticulous approach and ability to capture textures and shading make her tattoos visually striking and impressive.',
    style: 'Black and Gray',
    rating: 5,
    availability: 'Monday to Friday, 10am to 6pm',
    pieces: [
      'https://i.pinimg.com/236x/0f/d8/2f/0fd82fb4f7f1e67a478025cca6591c4d--zombie-tattoos-zombies.jpg',
      'https://i.pinimg.com/originals/16/f0/dc/16f0dce1e327112478c84971cfca38b4.jpg'
    ],
    email: 'aracvd@gmail.com'
  },
  {
    name: 'Jacob Mitchell',
    location: 'New Hampshire',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzwkyfoM5iGdLXSSTRIVcGTwWq9FA5-0wzKgDLVJEI5BYL4A06pfc6Z35XKf_HJqxX5eI&usqp=CAU',
    bio: 'Jacob is a talented tattoo artist known for his traditional Japanese-style tattoos. He draws inspiration from Japanese culture and mythology, incorporating elements such as dragons, koi fish, and cherry blossoms into his designs. Jacob\'s attention to detail and commitment to the traditional style make his tattoos stand out.',
    style: 'Traditional Japanese',
    rating: 5,
    availability: 'Tuesday to Saturday, 12pm to 8pm',
    pieces: [
      'https://i.pinimg.com/originals/b0/b1/4d/b0b14d36456a79ef0d3785e2672c6234.jpg',
      'https://i.pinimg.com/736x/fa/46/c0/fa46c018699768ecf107b9ef07cc7bdc.jpg'
    ],
    email: 'asfgad@gmail.com'
  },
  {
    name: 'Ethan Miller',
    location: 'New Jersey',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP1UQJ0oT047eXjQMGrpyB4DC3Sg4mc55WzS-SYlrANBj1zVv6UQUpx-Qbe7bN8ioYz0Y&usqp=CAU',
    bio: 'Ethan is a talented tattoo artist who specializes in intricate mandala and dotwork designs. His attention to detail and precision in creating geometric patterns make his tattoos mesmerizing. Ethan\'s calm demeanor and ability to connect with his clients create a comfortable and enjoyable tattoo experience.',
    style: 'Mandala, Dotwork',
    rating: 5,
    availability: 'Tuesday to Saturday, 11am to 7pm',
    pieces: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHcy4wwFnfkrDFYQLknXS7fQN5m7-sEoz2iwLyXAbT6Wc-z6aeS-axk0tcabFaQnz8QU&usqp=CAU',
      'https://i.pinimg.com/originals/fa/dd/61/fadd617b88bfd8a98df79c23239b1448.jpg'
    ],
    email: 'EWFADSF@gmail.com'
  },
  {
    name: 'Olivia Scott',
    location: 'New Jersey',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ZdaPjuGizUrHq8xvCBzX4wCjGaN_XWWKA86Jy1jtFelaMMcu2H1kAOImPlVGI975f7M&usqp=CAU',
    bio: 'Olivia is a versatile tattoo artist skilled in various styles, including watercolor, illustrative, and fine line tattoos. Her creativity and ability to bring unique ideas to life make her a sought-after artist at White Lotus. Olivia\'s friendly nature and dedication to her craft ensure a positive tattooing experience.',
    style: 'Watercolor, Illustrative, Fine Line',
    rating: 5,
    availability: 'Monday to Friday, 12pm to 8pm',
    pieces: [
      'https://i.pinimg.com/originals/a6/bf/b2/a6bfb27301b45a3e6192fef093c8d4e0.jpg',
      'https://i.pinimg.com/474x/a6/f4/04/a6f4044d4cd3966871a0c29dc42bea96.jpg'
    ],
    email: 'FHETA@gmail.com'
  },
  {
    name: 'Sebastian Diaz',
    location: 'New Mexico',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSswLnAu5V7-ZCtlhWh_AMDdzhO2iXTebUP9nIN5FVCLM0tHcj9IFp2V1fT5Uf81BFR2C8&usqp=CAU',
    bio: 'Sebastian is a passionate tattoo artist who specializes in realistic portraits and black and gray tattoos. His ability to capture the essence of his subjects and create lifelike tattoos is highly regarded. Sebastian\'s professionalism and commitment to delivering exceptional tattoos have earned him a loyal client base.',
    style: 'Realism, Black and Gray',
    rating: 4.9,
    availability: 'Wednesday to Sunday, 10am to 6pm',
    pieces: [
    'https://nextluxury.com/wp-content/uploads/full-arm-great-guys-tattoo-ideas.jpg',
    'https://www.inkedmag.com/.image/t_share/MTU5NzIxMjMzODcxNjEwOTg1/jessica-w.png'
    ],
    email: 'asfav@gmail.com'
    },
    {
    name: 'Maya Patel',
    location: 'New Mexico',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpl-ke1vv0tdCnuhi81j9qyGZ7Vf0rnyqKNJoZareL7xLaxo9ShppCYmv9gnbqyMnd-I&usqp=CAU',
    bio: 'Maya is a skilled tattoo artist who combines elements of nature and geometry in her designs. Her style often features botanical illustrations, sacred geometry, and intricate linework. Maya\'s attention to detail and ability to create harmonious compositions make her tattoos visually appealing and meaningful.',
    style: 'Nature, Geometry',
    rating: 4.6,
    availability: 'Tuesday to Saturday, 11am to 7pm',
    pieces: [
    'https://www.inkedmag.com/.image/t_share/MTU5NDkzMTk1ODA0NDUyNDQw/screen-shot-2018-10-29-at-35435-pm.png',
    'https://i.pinimg.com/736x/6b/69/40/6b69404d526d6a8ce70bac0832c22ad4--clock-tattoos-arm-tattoos.jpg'
    ],
    email: 'sdghh@gmail.com'
    },
    {
    name: 'Benjamin Turner',
    location: ' New York',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBSwaUlPeDdebQcTvLWqaaIyvDNCRldsSakg6olBan45Lc8KyZBu__1itoIN5OaLYbNJA&usqp=CAU',
    bio: 'Benjamin is a talented tattoo artist who specializes in neotraditional and illustrative tattoos. His bold and vibrant style, inspired by traditional tattoo art, incorporates elements of modern illustration. Benjamin\'s creativity and passion for tattooing shine through his unique designs and attention to detail.',
    style: 'Neotraditional, Illustrative',
    rating: 4.7,
    availability: 'Monday to Friday, 10am to 6pm',
    pieces: [
    'https://i.pinimg.com/736x/6b/69/40/6b69404d526d6a8ce70bac0832c22ad4--clock-tattoos-arm-tattoos.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQc2tikzZ5EZ6pxwr-qHjhIK5YPZCwvr88FysXw8Z5bPxSlRycduVjidVDnU80HWYwq6g&usqp=CAU'
    ],
    email: 'hsdrer1@gmail.com'
    },
    {
    name: 'Chloe Bennett',
    location: 'New York',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqJcV-FTUw-u8lNkxkQ4tZwTtF0opsdd-ldBVxZ8J3mzptYTsNeTRIUv9bAACItcl6-8&usqp=CAU',
    bio: 'Chloe is a versatile tattoo artist known for her delicate and intricate fine line tattoos. Her designs often feature botanical motifs, animals, and detailed linework. Chloe\'s artistic finesse and ability to create intricate designs on a smaller scale make her tattoos elegant and timeless.',
    style: 'Fine Line, Botanical',
    rating: 4.8,
    availability: 'Tuesday to Saturday, 12pm to 8pm',
    pieces: [
    'https://i.pinimg.com/originals/a8/b7/80/a8b78030bd763bea8faf494be9607305.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfO2j-wxQ-Re8k-OK2yyjSq26SZhKp9ckEYVijKG9j0svyN2jGDoHd1Wtsslew2JX2xk8&usqp=CAU'
    ],
    email: 'threh34h@gmail.com'
    },
    {
      name: 'Gabriel Ramirez',
      location: 'North Carolina',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7-CjmMPVPBtCMCfElQk48emfD3276ZxPrMgA2-NvCZWQDXqeSLKMYDerr2wfzz6Z3fY&usqp=CAU',
      bio: 'Gabriel is a talented tattoo artist with a passion for illustrative and surreal tattoos. His designs often combine elements of fantasy, nature, and storytelling. Gabriel\'s ability to create unique and captivating compositions makes his tattoos a true work of art.',
      style: 'Illustrative, Surreal',
      rating: 4.7,
      availability: 'Tuesday to Saturday, 11am to 7pm',
      pieces: [
        'https://i.pinimg.com/originals/f9/0f/05/f90f058a441350c35aaa48b5296ac1b6.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpOLLU82upqbWHO-mTG5sPFvCZ8T7_-_JC_Qbfks6wO4gRKPFoxyUvpDoT_NLRcTl9mD0&usqp=CAU'
      ],
      email: 'hstjsgfh2@gmail.com'
    },
    {
      name: 'Sophia Lee',
      location: 'North Carolina',
      image: 'https://images.squarespace-cdn.com/content/v1/627e89776e22d004804e1077/abb0991d-d036-4da4-828e-03f7d2ceb9f6/EAPXBPFk.jpg?format=1000w',
      bio: 'Sophia is a skilled tattoo artist who specializes in delicate and minimalistic tattoos. Her designs often incorporate subtle linework, small motifs, and negative space. Sophia\'s gentle approach and attention to detail create tattoos that are understated yet meaningful.',
      style: 'Delicate, Minimalistic',
      rating: 4.8,
      availability: 'Monday to Friday, 12pm to 8pm',
      pieces: [
        'https://i.pinimg.com/originals/9f/a8/76/9fa87627c424e10c3f2490a680cceae5.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZXKGe3A2hG9GDFr5IDbSOoUj9pMg6hwZxzl5i7osx5UVrioiV1IkoBLuFcbFalUAftvM&usqp=CAU'
      ],
      email: 'tdsgrh@gmail.com'
    },
    {
      name: 'Alexander Wright',
      location: 'North Dakota',
      image: 'https://www.fwweekly.com/wp-content/uploads/2021/11/tattoo-05.jpg',
      bio: 'Alexander is a talented tattoo artist who excels in blackwork and geometric designs. His style often features bold lines, symmetrical patterns, and sacred geometry. Alexander\'s meticulous craftsmanship and ability to create visually striking tattoos make him a sought-after artist in Fargo.',
      style: 'Blackwork, Geometric',
      rating: 4.9,
      availability: 'Wednesday to Sunday, 10am to 6pm',
      pieces: [
        'https://i.pinimg.com/originals/65/dd/f5/65ddf5fa0638dbbaceb22be2326cb3ae.jpg',
        'https://i.pinimg.com/originals/da/e6/68/dae668a4c2539072450d23f15add9b54.jpg'
      ],
      email: 'thsh34h@gmail.com'
    },
    {
      name: 'Ava Anderson',
      location: 'North Dakota',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijiRn4tdZjVjJDJbsX1HLpW_8f2bqjR85c5rzEsl5TLkFU2w4ypQGtqiTQopjv2b3ULs&usqp=CAU',
      bio: 'Ava is a versatile tattoo artist skilled in a variety of styles, including traditional, illustrative, and ornamental tattoos. Her ability to adapt to different styles and create custom designs tailored to her clients\' preferences is highly appreciated. Ava\'s dedication and passion for tattooing ensure a memorable experience.',
      style: 'Traditional, Illustrative, Ornamental',
      rating: 4.6,
      availability: 'Tuesday to Saturday, 11am to 7pm',
      pieces: [
        'https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/253594072/original/e12debeb86fbaed697587d2d4b478484c33e1507.jpg',
        'https://i.redd.it/uadumjfi6t431.png'
      ],
      email: 'hdfvbtrh34@gmail.com'
    },
    {
      name: 'Elijah Reed',
      location: 'Ohio',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQupH4GcinaTuIWTETF8hlp16vqQtUQGHQVYrqHt_iaoyTEHGOjfMa4NSX8SbyfLR27Rg8&usqp=CAU',
      bio: 'Elijah is a talented tattoo artist known for his bold and vibrant color tattoos. His style often incorporates elements of traditional tattooing with a modern twist. Elijah\'s passion for tattoo art and his ability to bring designs to life with vivid colors make his tattoos eye-catching and memorable.',
      style: 'Color, Traditional',
      rating: 4.7,
      availability: 'Monday to Friday, 10am to 6pm',
      pieces: [
        'https://d1kq2dqeox7x40.cloudfront.net/images/news_uploads/legacy/0/85257.jpg',
        'https://i.pinimg.com/550x/16/bc/50/16bc503572ffb6897b1548ec3bdcf0e1.jpg'
      ],
      email: 'trehsdgt234t@gmail.com'
    },
    {
      name: 'Lily Thompson',
      location: 'Ohio',
      image: 'https://tallypress.com/wp-content/uploads/2018/07/Kinki-Ryusaki.jpeg',
      bio: 'Lily is a skilled tattoo artist who specializes in script and lettering tattoos. Her precise lettering and attention to detail ensure beautifully executed tattoos with meaningful messages. Lily\'s dedication to her craft and ability to create personalized designs make her a trusted artist at Tattoo Faction.',
      style: 'Script, Lettering',
      rating: 4.8,
      availability: 'Tuesday to Saturday, 12pm to 8pm',
      pieces: [
        'https://99designs-blog.imgix.net/blog/wp-content/uploads/2015/08/tattoo_styles.jpg?auto=format&q=60&w=1280&h=750&fit=crop&crop=faces',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgtwRcd8NMNV0r4HsGODLRjCzKgb8jLQw8sVsSty2_mZSmVP-aMRxnifuAozzD39hGJ_M&usqp=CAU'
      ],
      email: 'herg34t@gmail.com'
    },
    {
      name: 'Ethan Anderson',
      location: 'Oklahoma',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO5etrICugahrMC6BvSobAMBDei-n4F-wogb8C7ito5zqfv5vqX4-VWt2Z3_F4wCU2DgU&usqp=CAU',
      bio: 'Ethan is a versatile tattoo artist known for his ability to bring intricate designs to life. From realistic portraits to vibrant traditional tattoos, Ethan\'s artistic skills shine through in every piece. He enjoys collaborating with clients to create unique and personalized tattoos that exceed their expectations.',
      style: 'Versatile',
      rating: 4.9,
      availability: 'Monday to Friday, 10am to 6pm',
      pieces: [
        'https://hips.hearstapps.com/hmg-prod/images/701/tattoo-artists-follow-instagram-1503064082.jpg?crop=1xw:0.786xh;center,top&resize=1200:*',
        'https://www.capetown.travel/wp-content/uploads/2022/07/shutterstock_646327681.jpg'
      ],
      email: 'hjytrhc@gmail.com'
    },
    {
      name: 'Zoe Davis',
      location: 'Oregon',
      image: 'https://s3-media0.fl.yelpcdn.com/bphoto/kN1YtB4Myn8ijn-c625d0g/1000s.jpg',
      bio: 'Zoe is a passionate tattoo artist with a love for nature-inspired tattoos. Her intricate linework and attention to detail bring out the beauty of floral, animal, and landscape tattoos. Zoe takes pride in creating meaningful and visually stunning tattoos that leave a lasting impression.',
      style: 'Nature-inspired',
      rating: 4.7,
      availability: 'Wednesday to Sunday, 11am to 7pm',
      pieces: [
        'https://i.pinimg.com/originals/a4/6f/f8/a46ff8e95d057aebe61cde5462a47a7f.jpg',
        'https://pbs.twimg.com/media/EGGDFNwWsAAzeKK?format=jpg&name=large'
      ],
      email: 'thergw@gmail.com'
    },
    {
      name: 'Olivia Turner',
      location: 'Pennsylvania',
      image: 'https://img.jakpost.net/c/2016/06/15/2016_06_15_6577_1465989100._large.jpg',
      bio: 'Olivia is a talented tattoo artist who specializes in minimalist and geometric designs. Her clean lines and precise symmetry create striking tattoos with a modern aesthetic. Olivia enjoys working with clients to transform their ideas into minimalist masterpieces that stand the test of time.',
      style: 'Minimalist, Geometric',
      rating: 4.8,
      availability: 'Tuesday to Saturday, 12pm to 8pm',
      pieces: [
        'https://i.pinimg.com/736x/c0/0c/f4/c00cf4d00f2260dda2d18e0db44327b6--side-tattoos-art-tattoos.jpg',
        'https://i.pinimg.com/564x/6a/67/40/6a6740df53b50e23d9594d2cd85974a0.jpg'
      ],
      email: '2135rfh@gmail.com'
    },
    {
      name: 'Benjamin Mitchell',
      location: 'Rhode Island',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3oMWb5pcZXdBzhuLdcUI9-vI_fBGZop9EqStVaFnZKp-U7rNJk5Qys5zpzT66VmXNshY&usqp=CAU',
      bio: 'Benjamin is a dedicated tattoo artist known for his expertise in custom designs. He loves working on intricate blackwork tattoos and enjoys incorporating elements of nature and mythology into his art. Benjamin\'s passion for storytelling through tattoos ensures each piece has its own unique narrative.',
      style: 'Custom, Blackwork',
      rating: 4.9,
      availability: 'Wednesday to Sunday, 11am to 7pm',
      pieces: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3oMWb5pcZXdBzhuLdcUI9-vI_fBGZop9EqStVaFnZKp-U7rNJk5Qys5zpzT66VmXNshY&usqp=CAU',
        'https://i.pinimg.com/736x/92/9f/d8/929fd8846da20b408ae9a86a7f9a8dd3.jpg'
      ],
      email: 'garegdfbrh@gmail.com'
    },
    {
      name: 'Ava Roberts',
      location: 'South Carolina',
      image: 'https://images.squarespace-cdn.com/content/v1/5ac6760f1aef1d7f46022dc4/e257cee1-060d-4afd-8c99-a6a4cc4fae49/A21176DC-E3BA-45DC-8BAD-EEB6EB6BF023.jpeg',
      bio: 'Ava is a versatile tattoo artist who excels in a variety of styles, from bold traditional to delicate watercolor tattoos. Her ability to adapt to different techniques and genres allows her to bring clients\' visions to life with creativity and precision. Ava\'s dedication to providing a positive and comfortable experience sets her apart as an artist.',
      style: 'Versatile',
      rating: 4.8,
      availability: 'Monday to Saturday, 10am to 6pm',
      pieces: [
        'https://i.pinimg.com/originals/39/94/8d/39948d481476338a049909c56b409e55.jpg',
        'https://i.pinimg.com/736x/f9/05/63/f90563abc6767a361906d6db5eba3b0c.jpg'
      ],
      email: 'erhdf@gmail.com'
    },
    {
      name: 'Mason Johnson',
      location: 'South Dakota',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCWR9Z96LbvGofBGutd6Oxt_BKIWi-2HZGiXiZt1hAur-IeuKJ1q9mEtbDYG8xbrKBVBM&usqp=CAU',
      bio: 'Mason is a talented tattoo artist known for his expertise in bold and vibrant tattoos. His unique style blends traditional and neo-traditional elements to create eye-catching designs. Mason\'s passion for art and commitment to delivering exceptional tattoos make him a sought-after artist at Permanent Addictions.',
      style: 'Traditional, Neo-traditional',
      rating: 4.7,
      availability: 'Tuesday to Saturday, 12pm to 8pm',
      pieces: [
        'https://i.pinimg.com/736x/ed/d3/eb/edd3ebada6d97a7e576af360addfb905.jpg',
        'https://i.pinimg.com/564x/a5/ff/3f/a5ff3f1c48777cbb7d748692fbc09f17.jpg'
      ],
      email: 'erhgfb54@gmail.com'
    },
    {
      name: 'Maya Hernandez',
      location: 'Tennessee',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8kHYT-QxOyip0MhqzzAoEJXvIZfGygg6wcNG3za8t5sIRygZSbdPyMOo9DdR0I1CA5R4&usqp=CAU',
      bio: 'Maya is a skilled tattoo artist with a passion for black and gray realism. Her attention to detail and mastery of shading bring depth and dimension to her tattoos. Maya enjoys creating portraits and nature-inspired pieces that capture the essence of her clients\' ideas and emotions.',
      style: 'Black and Gray Realism',
      rating: 4.9,
      availability: 'Wednesday to Sunday, 11am to 7pm',
      pieces: [
        'https://i.pinimg.com/564x/a5/ff/3f/a5ff3f1c48777cbb7d748692fbc09f17.jpg',
        'https://i.pinimg.com/originals/46/bf/18/46bf181553f5805e509baca55c4e377a.jpg'
      ],
      email: '5herhfn@gmail.com'
    },
    {
      name: 'Xavier Nguyen',
      location: 'Texas',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXscPOWwxWbh2Wq5L4HXqi9Rd1Z-tdmNGoPPO-thTtnEa2O9-brnkDL4S8RmUw3wQ1Jxk&usqp=CAU',
      bio: 'Xavier is a versatile tattoo artist who enjoys working on various styles, from intricate mandalas to bold traditional tattoos. His passion for artistry and dedication to providing exceptional customer service have earned him a loyal clientele. Xavier\'s ability to translate clients\' ideas into remarkable tattoos makes him a valuable artist at Advent Tattoo.',
      style: 'Versatile',
      rating: 4.8,
      availability: 'Monday to Friday, 10am to 6pm',
      pieces: [
        'https://i.pinimg.com/200x/b4/2f/58/b42f582f725978471aacf327a26c4944.jpg',
        'https://i.pinimg.com/originals/90/82/99/908299ef47c88cc359cdcf2038db646e.jpg'
      ],
      email: 'thd432t@gmail.com'
    },
    {
      name: 'Ava Thompson',
      location: 'Utah',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHq9znvG-FF7j3n0hZomBz8Gh-AbhWqrY47VChBgBE5AROZXBHTiQcXLjq0uhQgxy9tS4&usqp=CAU',
      bio: 'Ava is a talented tattoo artist specializing in watercolor and illustrative tattoos. Her use of vibrant colors and flowing brushstrokes creates captivating tattoos with a painterly quality. Ava\'s ability to translate clients\' visions into unique and expressive tattoos has made her a sought-after artist at Lost Art.',
      style: 'Watercolor, Illustrative',
      rating: 4.7,
      availability: 'Tuesday to Saturday, 12pm to 8pm',
      pieces: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTC-Na1G6ARzIwAr9DgzyBo_x4w5T9hCVr2CBE_0tXV-W9mkKSvTR8k6NrQhWEfHH_Os&usqp=CAU',
        'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs3/318449568/original/2bea75b1a8b2833befd55e6fe7dabd855a0fb6a5.png'
      ],
      email: 'h3erghdh4@gmail.com'
    },
    {
      name: 'Harper Wilson',
      location: 'Vermont',
      image: 'https://www.cnctattoo.com/wp-content/uploads/tattoo-skills.webp',
      bio: 'Harper is a talented tattoo artist known for her intricate dotwork and mandala tattoos. Her precise and delicate work creates mesmerizing designs that are both captivating and meaningful. Harper\'s dedication to her craft and ability to create customized designs make her a trusted artist at Luminary Ink Tattoos.',
      style: 'Dotwork, Mandala',
      rating: 4.9,
      availability: 'Wednesday to Sunday, 11am to 7pm',
      pieces: [
        'https://i.pinimg.com/originals/87/aa/65/87aa659a4ec521de113457d3f0d89350.jpg',
        'https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190314_8PTLHc3sA0C6HkO.jpg?w=400'
      ],
      email: '53rhbdw@gmail.com'
    },
    {
      name: 'Liam Anderson',
      location: 'Virginia',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWV6oTmc_Ew-_vjj0EQHQPf1qxC9DfS89iXcze_nsqotACJoqlc9_-hARkD-05h0FZZiM&usqp=CAU',
      bio: 'Liam is a versatile tattoo artist with a passion for realism and nature-inspired tattoos. His attention to detail and ability to capture the essence of his subjects make his tattoos come to life. Liam\'s dedication to creating unique and personalized designs has earned him a reputation as a skilled artist at Red 5 Tattoo.',
      style: 'Realism, Nature-inspired',
      rating: 4.8,
      availability: 'Tuesday to Saturday, 12pm to 8pm',
      pieces: [
        'https://www.4evertattooink.com/wp-content/uploads/2021/12/by4evertattoo_ink_.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7oLi05uiU3PekCnJOeCFkriuNUA3mhxHscsDTstPSex4A_iO4GH2iEulYHTWU74bX4g8&usqp=CAU'
      ],
      email: '4tsdgh@gmail.com'
    },
    {
      name: 'Olivia Martinez',
      location: 'Washington',
      image: 'https://i2-prod.mirror.co.uk/incoming/article29108370.ece/ALTERNATES/s1200d/0_Close-up-of-female-artist-wearing-mask-tattooing-on-womans-thigh-with-tattoo-machine.jpg',
      bio: 'Olivia is a talented tattoo artist specializing in intricate linework and geometric tattoos. Her precision and attention to detail result in clean and striking designs. Olivia\'s ability to combine symmetry and creativity in her work has made her a sought-after artist at Cicada Tattoo Parlor.',
      style: 'Linework, Geometric',
      rating: 4.7,
      availability: 'Monday to Friday, 10am to 6pm',
      pieces: [
        'https://i.pinimg.com/736x/c0/0c/f4/c00cf4d00f2260dda2d18e0db44327b6--side-tattoos-art-tattoos.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWcKUIcq54EfURAXyPUWFCAFHvb4DShVM2FH6M2C0-fmt_8-zTJB0YE9bVhi3cF57Msc0&usqp=CAU'
      ],
      email: 'e5ergd@gmail.com'
    },
    {
      name: 'Ethan Clark',
      location: 'West Virginia',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWV6oTmc_Ew-_vjj0EQHQPf1qxC9DfS89iXcze_nsqotACJoqlc9_-hARkD-05h0FZZiM&usqp=CAU',
      bio: 'Ethan is a skilled tattoo artist known for his bold and vibrant traditional tattoos. His love for classic tattoo designs and his ability to create timeless pieces set him apart. Ethan\'s dedication to providing a memorable experience and exceptional tattoos make him a valued artist at Wild Zero Studios.',
      style: 'Traditional',
      rating: 4.9,
      availability: 'Tuesday to Saturday, 12pm to 8pm',
      pieces: [
        'https://www.thisiscolossal.com/wp-content/uploads/2020/07/michele_volpi_2.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDCj9rId6LNhqTAscDbZw8fZXDjeRn06rEV9P9jZGDLTJXwd_nWMCxf2cykRfe25rNzyg&usqp=CAU'
      ],
      email: 'regfd4@gmail.com'
    },
    {
      name: 'Nora Sullivan',
      location: 'Wisconsin',
      image: 'https://resources.stuff.co.nz/content/dam/images/1/w/p/z/k/q/image.related.StuffLandscapeSixteenByNine.320x180.1wsmaa.png/1567869530339.jpg',
      bio: 'Nora is a versatile tattoo artist who enjoys working on various styles, from bold illustrative tattoos to delicate floral designs. Her attention to detail and ability to adapt to clients\' preferences result in unique and personalized tattoos. Nora\'s passion for art and commitment to customer satisfaction make her a trusted artist at Moving Shadow Ink.',
      style: 'Versatile',
      rating: 4.8,
      availability: 'Wednesday to Sunday, 11am to 7pm',
      pieces: [
        'https://i.pinimg.com/originals/16/24/f9/1624f9a8cd31c593ed437b3e66faa486.jpg',
        'https://i.pinimg.com/736x/b6/f9/cd/b6f9cded10a1f6e70912b77d4a51df81--whale-tattoos-abstract-tattoos.jpg'
      ],
      email: '4t3trsd@gmail.com'
    },
    {
      name: 'Benjamin Harris',
      location: 'Wyoming',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX6i7fSbtIFTWUKMT7ssHJyEnG-6PHq5t2FhC24pY0V_EZ84_s4vQmzQAQB33lD2ma5rU&usqp=CAU',
      bio: 'Benjamin is a talented tattoo artist specializing in blackwork and ornamental tattoos. His intricate designs and meticulous attention to detail create visually stunning and highly detailed tattoos. Benjamin\'s dedication to his craft and ability to create captivating tattoos make him a sought-after artist at T.R.I.B.E Zoo, LLC Tattoo.',
      style: 'Blackwork, Ornamental',
      rating: 4.7,
      availability: 'Monday to Friday, 10am to 6pm',
      pieces: [
        'https://images.readinsideout.com/20200203213205/58408897_143676640084304_1775024919815695169_n.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Dk1dvvUQW6RiUhObN640kQlYmauyDZm2lu08JS7DriZXUvCwA0mB7iBommdmBbxtWnY&usqp=CAU'
      ],
      email: 'etrhsd4@gmail.com'
    },
    {
      name: 'Stella Nguyen',
      location: 'California',
      image: 'https://images.squarespace-cdn.com/content/v1/5e5b2fe0805a63534f0eed59/1612151805041-UFDU9WQR5FRDM44PLGN8/CB-17.jpg?format=1000w',
      bio: 'Stella is a talented artist who specializes in watercolor tattoos. Her unique style combines vibrant colors and fluid brushstrokes to create beautiful and dreamy tattoo designs. Stella loves incorporating elements of nature and fantasy into her artwork, resulting in mesmerizing and ethereal tattoos.',
      style: 'Watercolor',
      rating: 4.7,
      availability: 'Tuesday to Saturday, 11 AM to 7 PM',
      pieces: [
        'https://mymodernmet.com/wp/wp-content/uploads/2019/05/eva-krbdk-fine-art-tattoos-2.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2zr4vW2rzx7LBYvqMYgoUggsLrBJkApyVjsy-q80x-UtAoVbbaHJvHG9YKaPbc9ht9I&usqp=CAU'
      ],
      email: '35hdfnt@gmail.com'
    },
    {
      name: 'Carlos Alvarez',
      location: 'California',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOE5ON7u57_fPCtxIFgW0bX_erGULQ2102MeAwpUwc0JjF90Ra0Rl5XAYdfK0lu8EdP1U&usqp=CAU',
      bio: 'Carlos is a versatile tattoo artist known for his expertise in various styles, including realism and neo-traditional. He has a keen eye for detail and brings a high level of craftsmanship to his work. Carlos enjoys creating custom tattoos that capture the essence of his clients\' ideas and desires.',
      style: 'Realism, Neo-traditional',
      rating: 4.7,
      availability: 'Tuesday to Saturday, 12 PM to 8 PM',
      pieces: [
        'https://i.pinimg.com/originals/c1/c3/a0/c1c3a03bdda8b7ca74cfde3fb30d5e02.jpg',
        'https://i.pinimg.com/236x/1a/04/89/1a04894f83d916eaf8621ec83db8773b.jpg'
      ],
      email: 'gwegcb@gmail.com'
    },
    {
      name: 'Alex',
      location: 'vermont',
      image: 'https://images.squarespace-cdn.com/content/v1/61f6f914388acb6c7aaf8d6f/1668653815876-7W9VVVV72RAJBYBT2GWI/unsplash-image-D6CbgeFuPC0.jpg?format=1000w',
      bio: 'This is a fake artist I just made up',
      rating: 4.9,
      availability: 'Mon-Fri 9Am - 5Pm',
      pieces: [
        'https://i.pinimg.com/236x/e6/c3/a7/e6c3a7acc2bc0657dd7e8c7b9da31833.jpg'
      ],
      email: '53rhbdw@gmail.com'
    },
    {
      name: 'Nora Anderson',
      location: 'Washington',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJdTpXtHubYbLI1Td-zGo78h-Ij15-puxmcktHMEWihTvgveYLtfzpgcDXRR8y42yPAY&usqp=CAU',
      bio: 'Nora is a talented artist specializing in illustrative and fantasy-themed tattoos. Her designs often feature elements of nature, mythical creatures, and enchanting landscapes. Nora\'s attention to detail and ability to create intricate and imaginative tattoos make her a sought-after artist in the Seattle area.',
      style: 'Illustrative, Fantasy',
      rating: 4.8,
      availability: 'Wednesday to Sunday, 11 AM to 7 PM',
      pieces: [
        'https://i.ytimg.com/vi/Hytki4cfVqg/maxresdefault.jpg',
        'https://thechhavi.in/wp-content/uploads/2023/02/Untitled-design-2023-02-01T141343.062.jpg'
      ],
      email: 'sedgsd@gmail.com'
    },
    {
      name: 'Ethan Reynolds',
      location: 'Washington',
      image: '',
      bio: 'Ethan is a skilled tattoo artist who specializes in black and gray realism. His work showcases a mastery of shading and texture, creating lifelike and highly detailed tattoos. Ethan enjoys working with clients to bring their ideas to life and often takes on custom portrait and nature-inspired pieces.',
      style: 'Black and gray realism',
      rating: 4.7,
      availability: 'Monday to Friday, 10 AM to 6 PM',
      pieces: [
        'https://i.pinimg.com/736x/a7/6a/44/a76a4491a18d4523a714a85a4de5cb7a.jpg',
        'https://i.pinimg.com/originals/d8/1b/a6/d81ba6e115587734346113ff5698fbc1.jpg'
      ],
      email: 'dsgdgb@gmail.com'
    },
    {
      name: 'Sophia Thompson',
      location: 'Colorado',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0apeIGREXNUaIn0HyfSrX8m22DKFqn1k1eSeivIDRETpikLIk7GgpVsem0QPIFkVZmuA&usqp=CAU',
      bio: 'Sophia is a talented artist who excels in creating colorful and vibrant tattoos. Her style is heavily influenced by traditional tattooing, with bold lines, bright colors, and a touch of whimsy. Sophia loves working with clients to create personalized and eye-catching designs that make a statement.',
      style: 'Traditional, Colorful',
      rating: 4.8,
      availability: 'Tuesday to Saturday, 11 AM to 7 PM',
      pieces: [
        'https://static.boredpanda.com/blog/wp-content/uploads/2020/05/double-tattoo-optical-illusion-yatzil-tatts-fb25-png__700.jpg',
        'https://www.byrdie.com/thmb/aZgHU3v7O2v47pO7aqxi0PPnhrM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/60186224_291258728418974_3601475234885745753_n-35cab50b128740c3ab40090b5a163791.jpg'
      ],
      email: 'ewgdv@gmail.com'
    },
    {
      name: 'Isabella Ramirez',
      location: 'Florida',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHGtn712AKC9AjxOfaMiNIhJrqC1pybaZSwKxuItB1O3jMbwb1yR80nskqR0gmGtgdpek&usqp=CAU',
      bio: 'Isabella is a talented artist specializing in abstract and geometric tattoos. Her unique style blends clean lines, intricate patterns, and a modern aesthetic to create visually striking and contemporary tattoos. Isabella enjoys creating custom designs that reflect her clients\' individuality and personality.',
      style: 'Abstract, Geometric',
      rating: 4.7,
      availability: 'Monday to Friday, 11 AM to 7 PM',
      pieces: [
        'https://i.pinimg.com/originals/65/21/60/6521602c36f6be7a146c685ddbd908de.jpg',
        'https://i.pinimg.com/originals/57/21/84/57218486c76c420890c208a2b00fe40b.jpg'
      ],
      email: 'sdgse@gmail.com'
    },
    {
      name: 'Gabriel Santos',
      location: 'New York',
      image: 'https://bloximages.chicago2.vip.townnews.com/peoriatimes.com/content/tncms/assets/v3/editorial/1/50/150950c2-bede-11e9-afb5-a301e41f76d7/5d5484a3ac7bd.image.jpg?resize=400%2C284',
      bio: 'Gabriel is a skilled tattoo artist with a passion for surrealism and dark art. His designs often feature elements of fantasy, horror, and macabre themes, creating tattoos that are visually captivating and thought-provoking. Gabriel enjoys pushing the boundaries of traditional tattooing to create unique and impactful artwork.',
      style: 'Surrealism, Dark Art',
      rating: 4.8,
      availability: 'Tuesday to Saturday, 12 PM to 8 PM',
      pieces: [
        'https://i.pinimg.com/originals/49/9f/17/499f17a13da305bbaac536a689475bcc.jpg',
        'https://i.pinimg.com/236x/81/34/bf/8134bfd055c0c4fbf5a30b9420ea6a4e.jpg'
      ],
      email: 'wevdrg@gmail.com'
    },
    {
      name: 'Mia Thompson',
      location: 'Texas',
      image: 'https://i.cbc.ca/1.5033260.1551136910!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/kirsty-wells.JPG',
      bio: 'Mia is a talented artist known for her expertise in watercolor and floral tattoos. Her designs showcase delicate brushstrokes, vibrant colors, and intricate floral arrangements. Mia\'s tattoos often evoke a sense of beauty, femininity, and nature, making them a popular choice among those seeking a touch of elegance in their ink.',
      style: 'Watercolor, Floral',
      rating: 4.9,
      availability: 'Monday to Friday, 10 AM to 6 PM',
      pieces: [
        'https://11tattoos.files.wordpress.com/2016/07/sweet-realistic-angel-baby-with-cross-tattoo.jpg',
        'https://i.pinimg.com/originals/4b/ab/f0/4babf0c6a56447514e4c870f9391db92.jpg'
      ],
      email: 'sdwergw@gmail.com'
    },  
    {
      name: 'Vincent Blackwood',
      location: 'Illinois',
      image: 'https://www.savedtattoo.com/wp-content/uploads/2021/12/Realistic-Cat-Tattoo-On-Arm.jpg',
      bio: 'Vincent is a versatile tattoo artist specializing in blackwork and ornamental tattoos. His designs combine bold lines, intricate patterns, and a touch of mystique to create visually captivating and unique tattoos. Vincent\'s attention to detail and dedication to his craft result in tattoos that are both aesthetically pleasing and meaningful.',
      style: 'Blackwork, Ornamental',
      rating: 4.7,
      availability: 'Wednesday to Sunday, 12 PM to 8 PM',
      pieces: [
        'https://www.ourmindfullife.com/wp-content/uploads/2022/01/Sunflower-Van-Gogh-tattoo-by-@john_boy_tattoo.jpg',
        'https://www.savedtattoo.com/wp-content/uploads/2021/12/Realistic-Cat-Tattoo-On-Arm.jpg'
      ],
      email: 'rwefr@gmail.com'
    },
    {
      name: 'Oliver Hughes',
      location: 'New York',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaTLJSMq39ELfJafjWqu8PayC5QulYbBVPNZCbtjqnXTQqO8o0yXamvTl1QK1MGIL1zo&usqp=CAU',
      bio: 'Oliver is a skilled tattoo artist specializing in portrait and realism tattoos. His work captures the likeness and emotions of his subjects with exceptional precision and detail. Oliver\'s ability to translate photographs into lifelike tattoos has made him a sought-after artist among those looking to commemorate loved ones or preserve cherished memories.',
      style: 'Portrait, Realism',
      rating: 4.9,
      availability: 'Monday to Friday, 10 AM to 6 PM',
      pieces: [
        'https://cdn.shopify.com/s/files/1/0084/4844/2473/files/Patchwork_Style_Tattoos_Different_Tattoo_Styles_480x480.jpg?v=1675278925',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLzIWuzDE3mA_GT0fF1PPuoXL-UhcZQbaoCQ960yxRbWmAzBlEeAZDF_R87XQC4MxxVA&usqp=CAU'
      ],
      email: 'wrafggw@gmail.com'
    },
    {
      name: 'Sophia Lopez',
      location: 'California',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFF1B8bvyrCcwSsiDReHbtC3WgB5tFExGkRnQUMJY8L7kZYJKjFd-dYt7aEZdfSDXGhjw&usqp=CAU',
      bio: 'Sophia is a talented artist known for her expertise in fine line and minimalist tattoos. Her designs focus on simplicity, clean lines, and subtle details, resulting in tattoos that are elegant, understated, and timeless. Sophia\'s ability to convey complex ideas with minimalistic aesthetics has earned her a dedicated following.',
      style: 'Fine Line, Minimalist',
      rating: 4.8,
      availability: 'Tuesday to Saturday, 12 PM to 8 PM',
      pieces: [
        'https://i.pinimg.com/736x/a7/ac/be/a7acbee32e891d2f26f808665d42cd12.jpg',
        'https://i.pinimg.com/736x/a7/f0/89/a7f08988aa5b5a426ed3c1b3328ed5b2.jpg'
      ],
      email: 'wegsdbhr@gmail.com'
    },
    {
      name: 'Ethan Roberts',
      location: 'California',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpDq8BxGuh2EZsLXP8xJQdNZmGzZ729ZtvQsAprAxUlAwwz0_nmq8cf3KaknCe0PI5l8&usqp=CAU',
      bio: 'Ethan is a skilled tattoo artist specializing in traditional American and old school tattoos. His designs pay homage to the classic tattoo style, featuring bold lines, vibrant colors, and iconic imagery. Ethan\'s passion for tattooing and his commitment to the traditional style shine through in his work, creating tattoos with a timeless appeal.',
      style: 'Traditional American, Old School',
      rating: 4.9,
      availability: 'Wednesday to Sunday, 11 AM to 7 PM',
      pieces: [
        'https://i.pinimg.com/originals/a0/9c/fe/a09cfeb975c26368b748ebdfa8df490e.jpg',
        'https://i.pinimg.com/236x/4f/3b/54/4f3b5440bd5eb5f6493cd62fa411b585.jpg'
      ],
      email: 'rgsgsdg@gmail.com'
    },
    {
      name: 'Luna Chen',
      location: 'California',
      image: 'https://www.inkedmag.com/.image/t_share/MTU5MDMzMTA4NzA3NDE5OTI4/jesmainfeature.jpg',
      bio: 'Luna is a talented artist known for her expertise in mandala and dotwork tattoos. Her intricate designs showcase precise dotwork techniques and mesmerizing patterns that create a sense of harmony and balance. Luna\'s tattoos often carry a spiritual and meditative quality, making them a popular choice for those seeking a deeper connection through their ink.',
      style: 'Mandala, Dotwork',
      rating: 4.7,
      availability: 'Monday to Friday, 11 AM to 7 PM',
      pieces: [
        'https://i.pinimg.com/236x/30/df/ed/30dfed1453a11f99b668d4b0bd665739.jpg',
        'https://i.pinimg.com/236x/4f/3b/54/4f3b5440bd5eb5f6493cd62fa411b585.jpg'
      ],
      email: 'ergdfbf@gmail.com'
    },
    {
      name: 'Benjamin Reed',
      location: 'Utah',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      bio: 'Benjamin is a versatile tattoo artist with a passion for diverse styles. He loves exploring various tattoo techniques and genres, ranging from realism to abstract. Benjamin\'s creativity and attention to detail allow him to create unique and personalized tattoos for his clients.',
      style: 'Versatile',
      rating: 4.6,
      availability: 'Monday to Friday, 10 AM to 6 PM',
      pieces: [
        'https://ychef.files.bbci.co.uk/976x549/p0ctmnh6.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhRgkBdpB8vkWmLepLOLCENvxyyp7vWEWlSg&usqp=CAU'
      ],
      email: 'benjamin.reed@gmail.com'
    },
    {
      name: 'Ava Wilson',
      location: 'Washington',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      bio: 'Ava is a talented tattoo artist specializing in watercolor tattoos. She has a unique style that blends vibrant colors and fluid brushstrokes, resulting in tattoos that resemble beautiful watercolor paintings. Ava\'s ability to capture emotions and create ethereal designs has made her a sought-after artist in the industry.',
      style: 'Watercolor',
      rating: 4.9,
      availability: 'Tuesday to Saturday, 11 AM to 7 PM',
      pieces: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXfg6RYStshJfVwQh-U-RBIWxIH9sJzEDwYpQhBANpk0gZZY2-5i7x7rxhKI5q-6tM5Y&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkymNRg01HSexM8gNmiZknf6eChZ3_Cfw3kcHjUOIMFiZXLOVbl-Sj5HtgFywa7BzVI4&usqp=CAU'
      ],
      email: 'ava.wilson@gmail.com'
    },
    {
      name: 'Léa Dupont',
      location: 'Washington',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      bio: 'Léa is a passionate tattoo artist specializing in botanical and floral tattoos. She draws inspiration from nature, incorporating delicate flowers, leaves, and plants into her designs. Léa\'s tattoos evoke a sense of beauty, serenity, and connection to the natural world.',
      style: 'Botanical, Floral',
      rating: 4.8,
      availability: 'Monday to Friday, 10 AM to 6 PM',
      pieces: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAOwoqfUZw7saoDcEFNX0MDYZq7imQiZc2J0yEEExSzWycxQtVMCe37ifPJsL_0Un8exg&usqp=CAU',
        'https://picsum.photos/seed/piece8/500/500'
      ],
      email: 'lea.dupont@gmail.com'
    },
    {
      name: 'Alejandro Ruiz',
      location: 'Florida',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      bio: 'Alejandro is a talented tattoo artist known for his expertise in blackwork and surreal tattoos. His designs combine dark, bold lines with dreamlike imagery, creating tattoos that intrigue and captivate. Alejandro\'s unique style and attention to detail make each of his tattoos a work of art.',
      style: 'Blackwork, Surreal',
      rating: 4.7,
      availability: 'Tuesday to Saturday, 11 AM to 7 PM',
      pieces: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDh7XGqMJ0K2Zz0gCyW0nng4deshbugoknGA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjduyH6k2OJZm95Po2f05ZyFEtIaKf6iBXqdvHgEIML4XhZOlPGV3xJ-hMem9tOZjhtnc&usqp=CAU'
      ],
      email: 'alejandro.ruiz@gmail.com'
    },
    {
      name: 'Sofia Herrera',
      location: 'Florida', 
      image: 'https://randomuser.me/api/portraits/women/6.jpg',
      bio: 'Sofia is a skilled tattoo artist specializing in script and calligraphy tattoos. Her designs beautifully combine meaningful words and elegant lettering, resulting in tattoos that carry personal stories and messages. Sofia\'s ability to create intricate and flowing letterforms makes her tattoos truly stand out.',
      style: 'Script, Calligraphy',
      rating: 4.9,
      availability: 'Monday to Friday, 10 AM to 6 PM',
      pieces: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEAYdoe3wY0WvTQ7WXRm1rnlsEEmgyyjp1NedZKBlcXs71SXWdzqTeSxWVpIlGqKRiPxA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYpy8em3JYlnBbl0yYGDmyLBNgMkrUvitEgO_S6wzCqDMiczMz_skvXFjo8-WkacOQlTQ&usqp=CAU'
      ],
      email: 'sofia.herrera@gmail.com'
    },
    {
      name: 'Niklas Weber',
      location: 'Nevada',
      image: 'https://randomuser.me/api/portraits/men/7.jpg',
      bio: 'Niklas is a talented tattoo artist known for his mastery of ornamental and tribal tattoos. His designs draw inspiration from various cultures and traditions, incorporating intricate patterns and symbols. Niklas\' attention to detail and dedication to preserving the authenticity of each style make his tattoos truly remarkable.',
      style: 'Ornamental, Tribal',
      rating: 4.8,
      availability: 'Tuesday to Saturday, 11 AM to 7 PM',
      pieces: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZI3YMNoduRlinGTzjDFEwNWmTrEATLK5yvO88qL8quEqVBK_sK722AiYShIELNzQTvKQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-k7t0nUrDUMLxi6V4hiWFXltm0LF4KMo_Cnpn4RVSQcIP6McXCnxssN0g89-uuTw5lk4&usqp=CAU'
      ],
      email: 'niklas.weber@gmail.com'
    },
    {
      name: 'Emma Schmidt',
      location: 'Texas',
      image: 'https://randomuser.me/api/portraits/women/8.jpg',
      bio: 'Emma is a passionate tattoo artist specializing in fantasy and mythical creature tattoos. Her designs transport clients into a world of imagination and magic, featuring majestic dragons, enchanting unicorns, and other fantastical elements. Emma\'s ability to bring mythical creatures to life through her tattoos is truly extraordinary.',
      style: 'Fantasy, Mythical Creatures',
      rating: 4.9,
      availability: 'Monday to Friday, 10 AM to 6 PM',
      pieces: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUUiCTwOMdzQk0Hv-BoliYvNCIwZzRg8BT4V2eaHI9Ckm-r4Kjix63meX7qh2dWHM02ic&usqp=CAU',
        'https://i.pinimg.com/736x/58/8f/ff/588fffabd2769c1ccc89036edc3f62ed.jpg'
      ],
      email: 'emma.schmidt@gmail.com'
    },
    {
      name: 'Daniel Anderson',
      location: 'Oregon',
      image: 'https://randomuser.me/api/portraits/men/9.jpg',
      bio: 'Daniel is a skilled tattoo artist specializing in Japanese and traditional tattoos. He combines traditional techniques with contemporary elements, creating tattoos that honor the rich history of Japanese tattooing while embracing modern aesthetics. Daniel\'s dedication to his craft and deep respect for tradition shine through in his work.',
      style: 'Japanese, Traditional',
      rating: 4.7,
      availability: 'Wednesday to Sunday, 12 PM to 8 PM',
      pieces: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJn4U9AvZzbJamO0Z5yw_mbgQPMCilimap1B9AW8cwSDE4SK5VGLX7Wq34C1D_M4H20RA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTneyrpMJh9ceJy8pODZqUUJmFMR1rnEkiVGsN1kqOsOqP-IEcFH_VSU-X0jOPbhbnj8Ek&usqp=CAU'
      ],
      email: 'daniel.anderson@gmail.com'
    },
    {
      name: 'Chloe Turner',
      location: 'Ohio',
      image: 'https://randomuser.me/api/portraits/women/10.jpg',
      bio: 'Chloe is a talented tattoo artist known for her expertise in abstract and modern art tattoos. Her designs explore unique compositions, blending geometric shapes, splashes of color, and minimalist elements. Chloe\'s ability to create visually striking and thought-provoking tattoos sets her apart in the artistry community.',
      style: 'Abstract, Modern Art',
      rating: 4.8,
      availability: 'Monday to Friday, 10 AM to 6 PM',
      pieces: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQhENYh1X9aOpfjO5RuOtVCJWq8gn12-jJ8KWBNWUr9h7uVdjyG28iUtbSexlz-KHTEQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYp-WlKSYRP7xwrs5VfBsqrokjS7jGU4wIuAu5NmahtAOIJM1pryZuxqInOsv6Bpk7fM&usqp=CAU'
      ],
      email: 'chloe.turner@gmail.com'
    },
    {
      name: 'Harper Wilson',
      location: 'vermont',
      image: 'https://www.cnctattoo.com/wp-content/uploads/tattoo-skills.webp',
      bio: 'Harper is a talented tattoo artist known for her intricate dotwork and mandala tattoos. Her precise and delicate work creates mesmerizing designs that are both captivating and meaningful. Harper\'s dedication to her craft and ability to create customized designs make her a trusted artist at Luminary Ink Tattoos.',
      style: 'Dotwork, Mandala',
      rating: 4.9,
      availability: 'Wednesday to Sunday, 11am to 7pm',
      pieces: [
        'https://i.pinimg.com/originals/87/aa/65/87aa659a4ec521de113457d3f0d89350.jpg',
        'https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190314_8PTLHc3sA0C6HkO.jpg?w=400'
      ],
      email: '53rhbdw@gmail.com'
    }                                                                                                  
  ];

  async function seedDatabase(){
    try{
        await Artist.deleteMany();
        await Artist.insertMany(artistsData);
        console.log('Artists are inking happily!');
    } catch (error){
        console.error('Oh no where are the artists:',error);
    } finally {
        mongoose.disconnect();
    }
  }

  seedDatabase();