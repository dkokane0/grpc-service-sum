import { OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
interface AddRequest {
    a: number;
    b: number;
}
export declare class AppController implements OnModuleInit {
    private client;
    private summatorService;
    constructor(client: ClientGrpc);
    onModuleInit(): void;
    add(body: AddRequest): Promise<{
        result: number;
    }>;
}
export {};
