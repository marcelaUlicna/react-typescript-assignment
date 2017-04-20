export class ComponentStorage  {
    private static values: { [id: string]: any } = {};

    static SetValue(id: string, value: any) {
        ComponentStorage.values[id] = value;
    }

    static GetValue(id: string): string {
        return ComponentStorage.values[id]
    }

    static GetStorage(): any {
        return ComponentStorage.values;
    }
}