"use strict";
// import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
// import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
/**
 * ListEntity
 * サンプルリスト
 * initial dataはdocker/mysql配下にいる
 *
 * @author hoge(hoge@mediba.jp)
 */
var ListEntity = /** @class */ (function () {
    function ListEntity() {
    }
    __decorate([
        typeorm_1.PrimaryColumn("integer")
    ], ListEntity.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], ListEntity.prototype, "name");
    __decorate([
        typeorm_1.Column()
    ], ListEntity.prototype, "url");
    __decorate([
        typeorm_1.CreateDateColumn({ name: "created_date" })
    ], ListEntity.prototype, "created_date");
    __decorate([
        typeorm_1.UpdateDateColumn({ name: "updated_date" })
    ], ListEntity.prototype, "updated_date");
    __decorate([
        typeorm_1.Column()
    ], ListEntity.prototype, "deleted_date");
    ListEntity = __decorate([
        typeorm_1.Entity("list")
    ], ListEntity);
    return ListEntity;
}());
exports.ListEntity = ListEntity;
