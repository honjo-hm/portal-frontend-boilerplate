/**
 * AbstractQuery class file
 *
 * @package Query
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import { MapLike } from "map-like";

/**
 * AbstractQuery
 *
 * @author hoge(hoge@mediba.jp)
 */
export default abstract class AbstractQuery {

    /**
     * (protected)@property MapLike args
     */
    protected args: MapLike<string, any> = new MapLike<string, any>();

    /**
     * 引数
     *
     * @param string key
     * @param any value
     *
     * @returns this
     */
    public arg(key: string, value: any): this {
        this.args.set(key, value);
        return this;
    }

    /**
     * query
     *
     * @returns string
     */
    public abstract query(): string;
}
