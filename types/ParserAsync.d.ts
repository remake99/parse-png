export class ParserAsync extends ChunkStream {
    constructor(options: any);
    _parser: Parser;
    _options: any;
    _handleError(err: any): void;
    errord: boolean;
    _inflateData(data: any): void;
    _inflate: any;
    _handleMetaData(metaData: any): void;
    _metaData: any;
    _bitmapInfo: any;
    _filter: FilterAsync;
    _handleTransColor(transColor: any): void;
    _handlePalette(palette: any): void;
    _simpleTransparency(): void;
    _headersFinished(): void;
    _finished(): void;
    _complete(filteredData: any): void;
}
import { ChunkStream } from "./chunkstream.js";
import { Parser } from "./Parser.js";
import { FilterAsync } from "./FilterAsync.js";
