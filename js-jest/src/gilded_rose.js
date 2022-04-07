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
        item = updateAgedBrieItem(item)
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        item = updateBackstageItem(item)
      } else {
        item = updateNormalItem(item)
      }
    }

    return this.items;
  }
}

const updateAgedBrieItem = (item) => {
  item.sellIn = item.sellIn - 1;
  item.quality = increaseQuality(item.quality)
  if (item.sellIn < 0) {
    item.quality = increaseQuality(item.quality)
  }
  return item
}

const updateBackstageItem = (item) => {
  item.sellIn = item.sellIn - 1;
  item.quality = increaseQuality(item.quality)
  if (item.sellIn < 10) {
    item.quality = increaseQuality(item.quality)
  }

  if (item.sellIn < 5) {
    item.quality = increaseQuality(item.quality)
  }

  if (item.sellIn < 0) {
    item.quality = item.quality - item.quality;
  }

  return item
}

const updateNormalItem = (item) => {
  item.sellIn = item.sellIn - 1;
  item.quality = decreaseQuality(item.quality)
  if (item.sellIn < 0) {
    item.quality = decreaseQuality(item.quality)
  }
  return item
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
