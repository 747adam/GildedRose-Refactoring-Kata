const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("Sulfuras, Hand of Ragnaros", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("Aged Brie", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("foo", function() {
    const gildedRose = new Shop([new Item("foo", -1, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(38);
  });

  it("Aged Brie", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 1, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(41);
  });

  it("Aged Brie", function() {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(42);
  });

  it("Aged Brie", function() {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("Backstage passes to a TAFKAL80ETC concert", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(42);
  });
});
