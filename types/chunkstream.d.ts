export class ChunkStream {
    _buffers: any[];
    _buffered: number;
    _reads: any[];
    _paused: boolean;
    _encoding: string;
    writable: boolean;
    read(length: any, callback: any): void;
    write(data: any, encoding: any): boolean;
    end(data: any, encoding: any): void;
    _end(): void;
    destroy(): void;
    _processReadAllowingLess(read: any): void;
    _processRead(read: any): void;
    _process(): void;
}
