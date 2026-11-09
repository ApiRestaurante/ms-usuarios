"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = app.get(config_1.ConfigService);
    const microservice = app.connectMicroservice({
        transport: microservices_1.Transport.TCP,
        options: {
            host: config.get('TCP_HOST', '127.0.0.1'),
            port: Number(config.get('TCP_PORT', '3001')),
        },
    });
    microservice.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        exceptionFactory: () => new microservices_1.RpcException({
            statusCode: 400,
            message: 'Datos de usuario no válidos',
        }),
    }));
    await app.startAllMicroservices();
}
void bootstrap();
//# sourceMappingURL=main.js.map