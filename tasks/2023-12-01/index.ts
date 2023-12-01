export class GiftRegistry {
  private gifts: Map<number, string[]>;
  constructor() {
    this.gifts = new Map();
  }
  addGift = (childId: number, gift: string): void => {
    this.gifts.set(childId, [...(this.gifts.get(childId) || []), gift]);
  };
  removeGift = (childId: number, gift: string): void => {
    const newChildGifts = this.gifts.get(childId);
    if (!newChildGifts) {
      throw new Error('Child has no gifts!');
    }
    const foundGiftIndex = newChildGifts.findIndex(
      (childGift) => childGift === gift
    );

    if (foundGiftIndex === -1) {
      throw new Error('Gift not found');
    }
    newChildGifts.splice(foundGiftIndex, 1);
    this.gifts.set(childId, newChildGifts);
  };

  getGiftsForChild = (childId: number) => {
    return this.gifts.get(childId);
  };
}
