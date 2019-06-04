import { action, decorate, observable } from "mobx";
import DrawingsAPI from "@/drawingsapi";
import sleep from "../common/sleep";

export default class ShowModel {
  drawing;
  originalDrawing;

  _setDrawing(drawing) {
    this.drawing = drawing;
  }

  async init(urlParams) {
    const drawing = await DrawingsAPI.getDataById(urlParams.id);
    this._setDrawing(drawing);
    this.originalDrawing = drawing;
  }

  async handleRedraw() {
    const content = [];

    this._setDrawing({
      ...this.drawing,
      content
    });
    
    // for (let index = 0; index < this.originalDrawing.content.length; index++) {
    //   const currentStroke = this.originalDrawing.content[index];
    //   await sleep(1000);
    //   content.push(currentStroke);

    //   this._setDrawing({
    //     ...this.drawing,
    //     content
    //   });
    // }
  }
}

decorate(ShowModel, {
  _setDrawing: action,
  drawing: observable
});
