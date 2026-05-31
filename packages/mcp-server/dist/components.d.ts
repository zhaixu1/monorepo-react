export interface PropDef {
    name: string;
    type: string;
    required: boolean;
    default?: string;
    description: string;
}
export interface ComponentDoc {
    name: string;
    description: string;
    importPath: string;
    props: PropDef[];
    example: string;
}
export declare const components: Record<string, ComponentDoc>;
export declare const componentNames: string[];
