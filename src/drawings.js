import { action, decorate, observable } from "mobx";
import DrawingsAPI from "@/drawingsapi";

export default class DrawingsModel {
  data = undefined;

  async getData() {
    const data = await DrawingsAPI.getData();
    this._setData(data);
  }

  _setData(data) {
    this.data = data;
  }

  async addDrawing(drawing) {
    await DrawingsAPI.addDrawing(drawing);
    await this.getData();
  }
}

decorate(DrawingsModel, {
    data: observable,
    _setData: action,
})
