export const development = false

const ipConfig = {
    all: {
        env: development ? 'development' : 'production'
    },
    development: {
        ip: 'http://139.59.78.74:9400/api/v1/',
        imgServerip: 'http://139.59.78.74:9400/images'
    },
    production: {
        ip: 'http://139.59.78.74:9400/api/v1/',
        imgServerip: 'http://139.59.78.74:9400/images'
    }

}

export const appConfig = Object.assign(ipConfig.all, ipConfig[ipConfig.all.env])


export const momentDateFormat = 'HH:mm ddd MM-DD-YYYY z'
