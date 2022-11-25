export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.updateAgedBrie(this.items[i]);
      this.updateBackstagePass(this.items[i]);
      this.updateStandardItem(this.items[i]);
      this.updateConjuredItem(this.items[i]);
    }

    return this.items;
  }

  updateStandardItem(item){
    if(item.name !== 'Sulfuras, Hand of Ragnaros' && item.name !== 'Aged Brie' &&
     item.name !== 'Backstage passes to a TAFKAL80ETC concert' && !item.name.includes('Conjured'))
    {
      item.sellIn -=1;
      if(item.sellIn > 0)
      {
        item.quality -= 1;
      }
      else{
        item.quality -= 2;
      }
      if(item.quality < 0){
        item.quality = 0;
      }
    }
  }

  updateConjuredItem(item){
    if(item.name.includes('Conjured')){
      item.sellIn -= 1;
      if(item.sellIn > 0){
        item.quality -= 2;
      }else{
        item.quality -= 4;
      }
      if(item.quality < 0){
        item.quality = 0;
      }
    }
  }

  updateAgedBrie(item){
    if(item.name == 'Aged Brie'){
      item.sellIn -= 1;
      if(item.quality < 50){
        item.quality += 1;
      }
    }
  }

  updateBackstagePass(item){
    if(item.name == 'Backstage passes to a TAFKAL80ETC concert'){
      item.sellIn -= 1;
      if(item.sellIn < 0){
        item.quality = 0;
      }
      else if(item.sellIn < 6)
      {
        item.quality += 3;
      }
      else if(item.sellIn < 11){
        item.quality += 2;
      }
      else{
        item.quality += 1;
      }
      if(item.quality > 50)
      {
        item.quality = 50;
      }
    }
  }
}
