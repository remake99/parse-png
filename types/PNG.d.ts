/**
 * PNG
 */
export class PNG {
    static sync: typeof PngSync;
    static bitblt: (src: any, dst: any, srcX: any, srcY: any, width: any, height: any, deltaX: any, deltaY: any) => void;
    static adjustGamma(src: any): void;
    /**
     * constructor
     * @param {number} options
     */
    constructor(options: number);
    width: number;
    height: number;
    data: Buffer;
    gamma: number;
    readable: boolean;
    writable: boolean;
    _parser: ParserAsync;
    _packer: PackerAsync;
    pack(): PNG;
    parse(data: any, callback: any): PNG;
    write(data: any): boolean;
    end(data: any): void;
    _metadata(metadata: any): void;
    _gamma(gamma: any): void;
    _handleClose(): void;
    bitblt(dst: any, srcX: any, srcY: any, width: any, height: any, deltaX: any, deltaY: any): PNG;
    adjustGamma(): void;
}
import { Buffer } from "buffer";
import { ParserAsync } from "./ParserAsync.js";
import { PackerAsync } from "./PackerAsync.js";
import * as PngSync from "./PngSync.js";
