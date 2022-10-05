export class LocalStorageMock {
  readonly length: number = 0;

  public store: { [key: string]: string } = {};

  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value: any) {
    this.store[key] = String(value);
  }

  removeItem(key: string) {
    delete this.store[key];
  }

  key(index: number) {
    return this.store[Object.keys(index)[0]];
  }
}

global.localStorage = new LocalStorageMock();
