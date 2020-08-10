const config = require('config');
const _app = require('./config/app');

_app.listen(3000, () => {
  console.log(
    config.get('SECRET_FORM'), 
    config.util.getEnv('NODE_ENV')
  );
  console.log(config.util.getEnv('NODE_CONFIG_ENV'));
  console.log('Server listening in port 3000');
});
