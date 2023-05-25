export class Packer {
    constructor(options: any);
    _options: any;
    getDeflateOptions(): {
        chunkSize: any;
        level: any;
        strategy: any;
    };
    createDeflate(): any;
    filterData(data: any, width: any, height: any): Buffer;
    _packChunk(type: any, data: any): Buffer;
    packGAMA(gamma: any): Buffer;
    packIHDR(width: any, height: any): Buffer;
    packIDAT(data: any): Buffer;
    packIEND(): Buffer;
}
import { Buffer } from "buffer";
