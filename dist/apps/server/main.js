/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const app_service_1 = __webpack_require__("./src/app/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const user_module_1 = __webpack_require__("./src/app/users/user.module.ts");
const config_1 = __webpack_require__("@nestjs/config");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const app_controller_1 = __webpack_require__("./src/app/app.controller.ts");
const app_service_1 = __webpack_require__("./src/app/app.service.ts");
const podcasts_module_1 = __webpack_require__("./src/app/podcasts/podcasts.module.ts");
const ormconfig_1 = tslib_1.__importDefault(__webpack_require__("../../ormconfig.ts"));
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            podcasts_module_1.PodcastsModule,
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot(ormconfig_1.default),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to server!' };
    }
};
AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./src/app/podcasts/dto/create-podcast.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePodcastDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const class_validator_1 = __webpack_require__("class-validator");
class CreatePodcastDto {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The title of the podcast',
        example: 'The Title',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'The Title is required' }),
    tslib_1.__metadata("design:type", String)
], CreatePodcastDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The description of the podcast',
        example: 'The Description',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'The Description is required' }),
    tslib_1.__metadata("design:type", String)
], CreatePodcastDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The podcast url of the podcast',
        example: 'The Podcast Url',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'The Podcast Url is required' }),
    tslib_1.__metadata("design:type", String)
], CreatePodcastDto.prototype, "podcastUrl", void 0);
exports.CreatePodcastDto = CreatePodcastDto;


/***/ }),

/***/ "./src/app/podcasts/entities/podcast.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Podcast = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
let Podcast = class Podcast {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Podcast.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Podcast.prototype, "title", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Podcast.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Podcast.prototype, "podcastUrl", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Podcast.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Podcast.prototype, "updatedAt", void 0);
Podcast = tslib_1.__decorate([
    (0, typeorm_1.Entity)('podcasts')
], Podcast);
exports.Podcast = Podcast;


/***/ }),

/***/ "./src/app/podcasts/podcasts.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PodcastsController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const podcasts_service_1 = __webpack_require__("./src/app/podcasts/podcasts.service.ts");
const create_podcast_dto_1 = __webpack_require__("./src/app/podcasts/dto/create-podcast.dto.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
let PodcastsController = class PodcastsController {
    constructor(podcastsService) {
        this.podcastsService = podcastsService;
    }
    create(createPodcastDto) {
        return this.podcastsService.create(createPodcastDto);
    }
    getPodcasts() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const podcasts = yield this.podcastsService.findAll();
            return podcasts;
        });
    }
    findOne(id) {
        return this.podcastsService.findOne(+id);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully created.',
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'The record has not been created.',
    }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_podcast_dto_1.CreatePodcastDto !== "undefined" && create_podcast_dto_1.CreatePodcastDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], PodcastsController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], PodcastsController.prototype, "getPodcasts", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], PodcastsController.prototype, "findOne", null);
PodcastsController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Podcasts'),
    (0, common_1.Controller)('podcasts'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof podcasts_service_1.PodcastsService !== "undefined" && podcasts_service_1.PodcastsService) === "function" ? _a : Object])
], PodcastsController);
exports.PodcastsController = PodcastsController;


/***/ }),

/***/ "./src/app/podcasts/podcasts.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PodcastsModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const podcasts_controller_1 = __webpack_require__("./src/app/podcasts/podcasts.controller.ts");
const podcasts_service_1 = __webpack_require__("./src/app/podcasts/podcasts.service.ts");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const pgsql_1 = __webpack_require__("../../libs/pgsql/src/index.ts");
const podcast_entity_1 = __webpack_require__("./src/app/podcasts/entities/podcast.entity.ts");
let PodcastsModule = class PodcastsModule {
};
PodcastsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([podcast_entity_1.Podcast]), pgsql_1.DatabaseModule],
        controllers: [podcasts_controller_1.PodcastsController],
        providers: [podcasts_service_1.PodcastsService],
    })
], PodcastsModule);
exports.PodcastsModule = PodcastsModule;


/***/ }),

/***/ "./src/app/podcasts/podcasts.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PodcastsService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
const podcast_entity_1 = __webpack_require__("./src/app/podcasts/entities/podcast.entity.ts");
let PodcastsService = class PodcastsService {
    constructor(podcastRepository) {
        this.podcastRepository = podcastRepository;
    }
    create(createPodcastDto) {
        const newPodcast = this.podcastRepository.create(Object.assign(Object.assign({}, createPodcastDto), { createdAt: new Date() }));
        return this.podcastRepository.save(newPodcast);
    }
    findAll() {
        return this.podcastRepository.find();
    }
    findOne(id) {
        return `This action returns a #${id} podcast`;
    }
};
PodcastsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(podcast_entity_1.Podcast)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], PodcastsService);
exports.PodcastsService = PodcastsService;


/***/ }),

/***/ "./src/app/users/dto/create-user.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const class_validator_1 = __webpack_require__("class-validator");
const class_transformer_1 = __webpack_require__("class-transformer");
class CreateUserDto {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'The image url is required' }),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "imageUrl", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(18),
    (0, class_validator_1.Max)(70),
    (0, class_transformer_1.Type)(() => Number),
    tslib_1.__metadata("design:type", Number)
], CreateUserDto.prototype, "age", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "degree", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "subject", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "career", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateUserDto.prototype, "city", void 0);
exports.CreateUserDto = CreateUserDto;


/***/ }),

/***/ "./src/app/users/dto/search-term.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchTermDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const class_validator_1 = __webpack_require__("class-validator");
class SearchTermDto {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({}),
    (0, class_validator_1.IsOptional)({ message: 'The Subject is required' }),
    tslib_1.__metadata("design:type", String)
], SearchTermDto.prototype, "subject", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({}),
    (0, class_validator_1.IsOptional)({ message: 'The City is required' }),
    tslib_1.__metadata("design:type", String)
], SearchTermDto.prototype, "city", void 0);
exports.SearchTermDto = SearchTermDto;


/***/ }),

/***/ "./src/app/users/entities/user.entity.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const tslib_1 = __webpack_require__("tslib");
const typeorm_1 = __webpack_require__("typeorm");
let User = class User {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "imageUrl", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "age", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "city", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "degree", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "subject", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "career", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], User.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], User.prototype, "updatedAt", void 0);
User = tslib_1.__decorate([
    (0, typeorm_1.Entity)('users')
], User);
exports.User = User;


/***/ }),

/***/ "./src/app/users/user.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const user_service_1 = __webpack_require__("./src/app/users/user.service.ts");
const create_user_dto_1 = __webpack_require__("./src/app/users/dto/create-user.dto.ts");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const search_term_dto_1 = __webpack_require__("./src/app/users/dto/search-term.dto.ts");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    create(createUserDto) {
        return this.userService.create(createUserDto);
    }
    getUsers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.userService.findAll();
        });
    }
    findOne(id) {
        return this.userService.findOne(Number(id));
    }
    findUsersBySearchTerms(searchTerms) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.userService.findUsersBySearchTerms(searchTerms);
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully created.',
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'The record has not been created.',
    }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UserController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "findOne", null);
tslib_1.__decorate([
    (0, common_1.Post)('/search'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof search_term_dto_1.SearchTermDto !== "undefined" && search_term_dto_1.SearchTermDto) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UserController.prototype, "findUsersBySearchTerms", null);
UserController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);
exports.UserController = UserController;


/***/ }),

/***/ "./src/app/users/user.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const user_service_1 = __webpack_require__("./src/app/users/user.service.ts");
const user_controller_1 = __webpack_require__("./src/app/users/user.controller.ts");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const pgsql_1 = __webpack_require__("../../libs/pgsql/src/index.ts");
const user_entity_1 = __webpack_require__("./src/app/users/entities/user.entity.ts");
let UserModule = class UserModule {
};
UserModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]), pgsql_1.DatabaseModule],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),

/***/ "./src/app/users/user.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const typeorm_2 = __webpack_require__("typeorm");
const user_entity_1 = __webpack_require__("./src/app/users/entities/user.entity.ts");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    create(createUserDto) {
        const newUser = this.userRepository.create(Object.assign(Object.assign({}, createUserDto), { createdAt: new Date() }));
        return this.userRepository.save(newUser);
    }
    findAll() {
        return this.userRepository.find();
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    findUsersBySearchTerms(searchTerms) {
        return this.userRepository.find({
            where: {
                city: searchTerms.city,
                subject: searchTerms.subject,
            },
        });
    }
};
UserService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "../../libs/pgsql/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/pgsql/src/lib/database.module.ts"), exports);


/***/ }),

/***/ "../../libs/pgsql/src/lib/database.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const typeorm_1 = __webpack_require__("@nestjs/typeorm");
const ormconfig_1 = __webpack_require__("../../ormconfig.ts");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot(ormconfig_1.typeOrmConfig)],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ }),

/***/ "../../ormconfig.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.typeOrmConfig = void 0;
const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;
exports.typeOrmConfig = {
    type: 'postgres',
    username: DB_USERNAME,
    password: DB_PASSWORD,
    port: 5432,
    host: DB_HOST,
    database: DB_NAME,
    autoLoadEntities: true,
    synchronize: true,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    migrations: [__dirname + '/../migrations/*.{js,ts}'],
};
exports["default"] = exports.typeOrmConfig;


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/swagger":
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "class-transformer":
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "typeorm":
/***/ ((module) => {

module.exports = require("typeorm");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const app_module_1 = __webpack_require__("./src/app/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors();
        const globalPrefix = 'api';
        const version = 'v1';
        app.setGlobalPrefix(`${globalPrefix}/${version}`);
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Al-Manshaah Project')
            .setDescription('Using swagger to manage all the endpoints')
            .setVersion('1.0')
            .addTag('Al-Manshaah')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        const port = process.env.PORT || 8000;
        swagger_1.SwaggerModule.setup(`api/${version}`, app, document);
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}/${version}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map