export class Filter {
    constructor(bitmapInfo: any, dependencies: any);
    read: any;
    write: any;
    complete: any;
    _imageIndex: number;
    _images: {
        byteWidth: number;
        height: any;
        lineIndex: number;
    }[];
    _xComparison: any;
    start(): void;
    _unFilterType1(rawData: any, unfilteredLine: any, byteWidth: any): void;
    _unFilterType2(rawData: any, unfilteredLine: any, byteWidth: any): void;
    _unFilterType3(rawData: any, unfilteredLine: any, byteWidth: any): void;
    _unFilterType4(rawData: any, unfilteredLine: any, byteWidth: any): void;
    _reverseFilterLine(rawData: any): void;
    _lastLine: any;
}
