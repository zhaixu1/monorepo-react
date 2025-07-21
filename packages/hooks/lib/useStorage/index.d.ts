declare function useLocalStorage(key: string, defaultValue: any): any[];
declare function useSessionStorage(key: string, defaultValue: any): any[];
declare function useStorage(key: string, defaultValue: any, storageObject: Storage): any[];

export { useStorage as default, useLocalStorage, useSessionStorage };
