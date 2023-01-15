import convict from 'convict';

const xmenConfig = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development'],
    default: 'default',
    env: 'NODE_ENV'
  },
  mongo: {
    url: {
      doc: 'The Mongo connection URL',
      format: String,
      env: 'MONGO_URL',
      default: 'mongodb://localhost:27017/xmen'
    }
  }
});

xmenConfig.loadFile([__dirname + '/default.json', __dirname + '/' + xmenConfig.get('env') + '.json']);

export default xmenConfig;
