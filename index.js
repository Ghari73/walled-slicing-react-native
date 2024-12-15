import { registerRootComponent } from 'expo';

// import App from './App';
// import App from './belajarApp';
// import App from './flexBox';
// import App from './home';
import TopUpScreen from './topup';
import TransferScreen from './transfer';
import RegisterScreen from './register';
import LoginScreen from './login';
import TermsCon from './termsCon';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(TermsCon);
