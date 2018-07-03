/**
 * ContainerInitializer class file
 *
 * @package Libs
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import { Container } from "typedi";

/**
 * ContainerInitializer
 * 
 * @author hoge(hoge@mediba.jp)
 */
export class ContainerInitializer {

    /**
     * constructor
     * 
     * @param Container container 
     */
    public constructor(private container = Container) {
    }

    /**
     * セットする
     * 
     * @param string key 
     * @param any value 
     * 
     * @returns this
     */
    public prepare(key: string, value: any): this {
        this.container.set(key, value);
        return this;
    }

    /**
     * loadする
     * 
     * @returns Container
     */
    public load(): Container {
        return this.container;
    }
}