import { Filter } from "./Filter.js";
import { ChunkStream } from "./chunkstream.js";

export class FilterAsync extends ChunkStream {
  constructor(bitmapInfo) {
    super();

    let buffers = [];
    let that = this;
    this._filter = new Filter(bitmapInfo, {
      read: this.read.bind(this),
      write: function (buffer) {
        buffers.push(buffer);
      },
      complete: function () {
        that.emit("complete", Buffer.concat(buffers));
      },
    });

    this._filter.start();
  }
}
