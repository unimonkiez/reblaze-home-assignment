import { action, decorate, observable } from "mobx";
import DrawingsAPI from "@/drawingsapi";

export default class HomeModel {
  drawings;
  modelApi;

  constructor(modelApi) {
    this.modelApi = modelApi;
  }

  _setDrawings(drawings) {
    this.drawings = drawings;
  }

  async init() {
    this._setDrawings(await DrawingsAPI.getData());
  }

  handleThumbClick(id) {
    this.modelApi.setTab(
      {
        path: "show",
        params: { id: id }
      },
      `show/${id}`
    );
  }
}
decorate(HomeModel, {
  _setDrawings: action,
  drawings: observable
});
