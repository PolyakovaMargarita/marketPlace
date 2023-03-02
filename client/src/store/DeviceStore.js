import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильник" },
      { id: 2, name: "Smartphone" },
    ];
    this._brands = [
      { id: 1, name: "Sumsung" },
      { id: 2, name: "Apple" },
    ];
    this._devices = [
      {
        id: 1,
        name: "pro 12",
        price: 10000,
        rating: 5,
        img: `https://content2.rozetka.com.ua/goods/images/big/146913787.jpg`,
      },
      {
        id: 2,
        name: "pro 8",
        price: 5000,
        rating: 5,
        img: `https://content2.rozetka.com.ua/goods/images/big/146913787.jpg`,
      },
      {
        id: 3,
        name: "pro 10",
        price: 20000,
        rating: 5,
        img: `https://content2.rozetka.com.ua/goods/images/big/146913787.jpg`,
      },
      {
        id: 4,
        name: "pro 16",
        price: 9000,
        rating: 5,
        img: `https://content2.rozetka.com.ua/goods/images/big/146913787.jpg`,
      },
    ];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
}
