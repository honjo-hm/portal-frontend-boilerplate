import 'reflect-metadata'
import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import AbstractEntity from './AbstractEntity';

/* tslint:disable:variable-name */
@Entity('list')
export class ListEntity extends AbstractEntity {

    /**
     * @var number id サロゲートキー
     */
    @PrimaryColumn('integer')
    public id!: number;

    /**
     * @var string name 名前
     */
    @Column()
    public name!: string;

    /**
     * @var string url url
     */
    @Column()
    public image_url!: string;

    /**
     * @var Date created_date 作成日
     */
    @CreateDateColumn({ name: 'created_date' })
    public created_date!: Date;

    /**
     * @var Date updated_date 更新日
     */
    @UpdateDateColumn({ name: 'updated_date' })
    public updated_date!: Date;

    /**
     * @var Date deleted_date 削除日
     */
    @Column('date')
    public deleted_date!: Date;
}
/* tslint:enable:variable-name */
