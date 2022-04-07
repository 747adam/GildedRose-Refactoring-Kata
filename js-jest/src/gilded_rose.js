class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let item of this.items) {
      if (item.name === 'Sulfuras, Hand of Ragnaros') {
        continue;
      }
      if (item.name === 'Aged Brie') {
        item.quality = increaseQuality(item.quality)
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        item.quality = increaseQuality(item.quality)
        if (item.sellIn < 11) {
          item.quality = increaseQuality(item.quality)
        }

        if (item.sellIn < 6) {
          item.quality = increaseQuality(item.quality)
        }
      } else {
        item.quality = decreaseQuality(item.quality)
      }
      item.sellIn = item.sellIn - 1;
      if (item.sellIn < 0) {
        if (item.name === 'Aged Brie') {
          item.quality = increaseQuality(item.quality)
        } else {
          if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
            item.quality = item.quality - item.quality;
          } else {
            item.quality = decreaseQuality(item.quality)
          }
        }
      }
    }

    return this.items;
  }
}

const decreaseQuality = (quality) => {
  if (quality > 0) {
    return quality - 1;
  } else {
    return quality
  }
}
const increaseQuality = (quality) => {
  if (quality < 50) {
    return quality + 1;
  } else {
    return quality
  }
}

module.exports = {
  Item,
  Shop
}
