class LocalStorageUtils {

    static getObjectKey(type, objectType, objectID) {
        return `${type}_${objectType}_${objectID}_pos`;
    }

    static getObjectKeyDonated(type, objectType, objectID) {
        return `${type}_${objectType}_${objectID}_pos_donated`;
    }

    static getEQOrderKey(type) {
        return `${type}_earthquakeOrder`;
    }

    static getUseTroopDeathDamageKey(type) {
        return `${type}_useTroopDeathDamage`;
    }

    static getUseModifierKey(type, modifierID) {
        return `${type}_use_${modifierID}`;
    }

    static getKey(key) {
        return localStorage.getItem(key);
    }

    static getNumber(key) {
        const number = Number.parseInt(LocalStorageUtils.getKey(key));

        return Number.isNaN(number) === "number" ? number : null;
    }

    static getString(key) {
        const string = LocalStorageUtils.getKey(key);

        return typeof string === "string" ? string : null;
    }

    static getBoolean(key) {
        const boolean = LocalStorageUtils.getKey(key);

        if (boolean !== null && ["true", "false"].includes(boolean)) {
            return boolean;
        } else {
            return null;
        }
    }

    static loadNumber(key, defaultValue) {
        const number = Number.parseInt(LocalStorageUtils.getKey(key)); 
        if (Number.isNaN(number)) {
            if (typeof defaultValue === "number") {
                localStorage.setItem(key, defaultValue);
                return defaultValue;
            } else {
                throw new Error(`Invalid defaultValue: ${defaultValue}`);
            }       
        } else {
            return number;
        }
    }

    static loadString(key, defaultValue) {
        const string = LocalStorageUtils.getKey(key); 
        if (string === null) {
            if (typeof defaultValue === "string") {
                localStorage.setItem(key, defaultValue);
                return defaultValue;
            } else {
                throw new Error(`Invalid defaultValue: ${defaultValue}`);
            }       
        } else {
            return string;
        }
    }

    static loadStringInRange(key, checkStringList, defaultValue) {
        if (Array.isArray(checkStringList)) {
            const string = LocalStorageUtils.getKey(key);
            if (string === null || !checkStringList.includes(string)) {
                if (typeof defaultValue === "string") {
                    localStorage.setItem(key, defaultValue);
                    return defaultValue;
                } else {
                    throw new Error(`Invalid defaultValue: ${defaultValue}`);
                }          
            } else {
                return string;
            }
        } else {
            throw new Error(`Invalid checkStringList: ${checkStringList}`);
        }
    }

    static loadBoolean(key, defaultValue) {
        const boolean = LocalStorageUtils.getKey(key); 
        if (boolean === null || !["true", "false"].includes(boolean)) {
            if (typeof defaultValue === "boolean") {
                localStorage.setItem(key, defaultValue);
                return defaultValue;
            } else {
                throw new Error(`Invalid defaultValue: ${defaultValue}`);
            }       
        } else {
            return boolean === "true";
        }
    }

    static saveNumber(key, number) {
        if (typeof number === "number") {
            localStorage.setItem(key, number);
        } else {
            throw new Error(`Invalid number: ${number}`);
        }
    }

    static saveString(key, string) {
        if (typeof string === "string") {
            localStorage.setItem(key, string);
        } else {
            throw new Error(`Invalid string: ${string}`);
        }
    }

    static saveBoolean(key, boolean) {
        if (typeof boolean === "boolean") {
            localStorage.setItem(key, boolean);
        } else {
            throw new Error(`Invalid boolean: ${boolean}`);
        }
    }
}