export const LOCATION_INIT_ACTION = "LOCATION_INIT_ACTION"

export function location() {
    console.log("location action")
    return {
        type: LOCATION_INIT_ACTION
    }
}