
export class SyncReader {
  constructor(buffer) {
    this._buffer = buffer;
    this._reads = [];
  }

  read(length, callback) {
    this._reads.push({
      length: Math.abs(length), // if length < 0 then at most this length
      allowLess: length < 0,
      func: callback,
    });
  }

  process() {
    while (this._reads.length > 0 && this._buffer.length) {
      let read = this._reads[0];

      if (
        this._buffer.length &&
        (this._buffer.length >= read.length || read.allowLess)
      ) {
        // ok there is any data so that we can satisfy this request
        this._reads.shift(); // == read

        let buf = this._buffer;

        this._buffer = buf.slice(read.length);

        read.func.call(this, buf.slice(0, read.length));
      } else {
        break;
      }
    }

    if (this._reads.length > 0) {
      throw new Error("There are some read requests waiting on finished stream");
    }

    if (this._buffer.length > 0) {
      throw new Error("Unrecognised content at end of stream");
    }
  }
}

