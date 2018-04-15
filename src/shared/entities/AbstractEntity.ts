/**
 * AbstractEntity class file.
 * 
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import {BaseEntity} from "typeorm";

/**
 * AbstractEntityクラス
 * すべてのEntityの基底野郎
 * Data MapperじゃなくActive Recordで進める（その方がFE側学習コストが少ないので）
 * 
 * @author hoge(hoge@mediba.jp)
 */
export default abstract class AbstractEntity extends BaseEntity {
}