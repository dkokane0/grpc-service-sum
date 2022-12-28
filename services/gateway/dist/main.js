"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const path = require("path");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const URL = 'localhost:50051';
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.GRPC,
        options: {
            url: URL,
            package: 'gateway',
            protoPath: path.resolve(__dirname, '../../../api/api.proto'),
            loader: {
                includeDirs: [path.resolve(__dirname, '../../..')],
            },
        },
    });
    await app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map