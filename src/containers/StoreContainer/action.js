export const STORE_INIT_ACTION = "LOCATION_INIT_ACTION"

export function storeDetail() {
    console.log("store action")
    return {
        type: STORE_INIT_ACTION
    }
}