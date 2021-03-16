export const development = false

const ipConfig = {
    all: {
        env: development ? 'development' : 'production'
    },
    development: {
       
    },
    production: {
      
    }

}

export const appConfig = Object.assign(ipConfig.all, ipConfig[ipConfig.all.env])


export const momentDateFormat = 'HH:mm ddd MM-DD-YYYY z'
