const env = process.env

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
    console.log('************');
    console.log(message);
    console.log('************');
}

export default {
    port: env.port || 8080,
    host: env.HOST || '0.0.0.0',
    get serverUrl() {
        return `http://${this.host}:${this.port}`;
    }
};
