const imagesPath = `${process.env.PUBLIC_URL}/images`

module.exports = {
  "user": {
    "avatar": `${imagesPath}/avatar.png`
  },
  "products": {
    "item1": {
      "name": "Nike Air Force 1 '07",
      "price": 95,
      "category": "Men’s Shoe",
      "description": "Men’s Shoe, Black",
      "image": `${imagesPath}/item1.png`
    },
    "item2": {
      "name": "Nike Air Shadow Force",
      "price": 105,
      "category": "Men’s Shoe",
      "description": "Men’s Shoe, Black",
      "image": `${imagesPath}/item2.png`
    },
    "item3": {
      "name": "Nike Air Force X '17",
      "price": 125,
      "category": "Men’s Shoe",
      "description": "Men’s Shoe, Black",
      "image": `${imagesPath}/item3.png`
    },
    "item4": {
      "name": "Nike Air Force Z '12",
      "price": 250,
      "category": "Men’s Shoe",
      "description": "Men’s Shoe, Black",
      "image": `${imagesPath}/item4.png`
    }
  }
}