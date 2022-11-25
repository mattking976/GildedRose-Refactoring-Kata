import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should reduce sellIn by 1 for standard items', () => {
    const gildedRose = new GildedRose([new Item('+5 Dexterity Vest', 15, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(14);
  });

  it('should reduce quality by 1 for standard items', () => {
    const gildedRose = new GildedRose([new Item('+5 Dexterity Vest', 15, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(9);
  });

  it('should reduce quality by 2 for standard items after sellIn goes negative', () => {
    const gildedRose = new GildedRose([new Item('+5 Dexterity Vest', 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(8);
  });

  it('should never have a negative quality', () => {
    const gildedRose = new GildedRose([new Item('+5 Dexterity Vest', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  it('should return the item name', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 15, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('Aged Brie');
  });

  it('Aged Brie should increase in quality over time', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 15, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(11);
  });

  it('should not have a quality more than 50', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  })

  it('Backstage passes to a TAFKAL80ETC concert should increase in quality over time', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(11);
  });

  it('should increase in quality by 2 within 10 days of the event', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 12)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(14);
  })

  it('should increase in quality by 3 within 5 days of the event', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 12)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(15);
  })

  it('should have a quality of 0 once the event has passed', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 12)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  })

  it('Sulfuras should have a quality of 80', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 15, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(80);
  })

  it('Sulfuras should not reduce in quality', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 15, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  })

  it('should reduce sellIn by 1 for conjured items', () => {
    const gildedRose = new GildedRose([new Item('Conjured +5 Dexterity Vest', 15, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(14);
  });

  it('should reduce quality by 2 for conjured items', () => {
    const gildedRose = new GildedRose([new Item('Conjured +5 Dexterity Vest', 15, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(8);
  });

  it('should reduce quality by 4 for conjured items after sellIn goes negative', () => {
    const gildedRose = new GildedRose([new Item('Conjured +5 Dexterity Vest', 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(6);
  });

  it('should never have a negative quality', () => {
    const gildedRose = new GildedRose([new Item('Conjured +5 Dexterity Vest', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });
});
