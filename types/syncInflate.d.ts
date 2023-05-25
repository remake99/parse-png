export function createInflate(opts: any): Inflate;
export function inflateSync(buffer: any, opts: any): any;
export class Inflate {
    constructor(opts: any);
    _offset: any;
    _buffer: any;
    _maxLength: any;
    _processChunk(chunk: any, flushFlag: any, asyncCb: any): any;
}
