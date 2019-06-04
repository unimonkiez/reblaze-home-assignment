import { action, decorate, observable } from "mobx";
import DrawingsAPI from "@/drawingsapi";

export default class CreateModel {
  drawings;

  _setDrawings(drawings) {
    this.drawings = drawings;
  }

  async init() {
    this._setDrawings(await DrawingsAPI.getData());
  }
}

decorate(CreateModel, {
  _setDrawings: action,
  drawings: observable
});
