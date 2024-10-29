import AccountProtectedScreen from '../screens/auth/AccountProtectedScreen';
import AuthVerificationScreen from '../screens/auth/AuthVerificationScreen';
import ConfirmPinScreen from '../screens/auth/ConfirmPinScreen';
import EmailOtpScreen from '../screens/auth/EmailOtpScreen';
import EmailPasswordScreen from '../screens/auth/EmailPasswordScreen';
import EmailScreen from '../screens/auth/EmailScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import PersonalDetailScreen from '../screens/auth/PersonalDetailScreen';
import PhoneScreen from '../screens/auth/PhoneScreen';
import PinScreen from '../screens/auth/PinScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import SetPasswordScreen from '../screens/auth/SetPasswordScreen';
import BottomTab from './BottomTab';

export const authStacks = [
  {
    name: 'LoginScreen',
    component: LoginScreen,
  },
  {
    name: 'EmailScreen',
    component: EmailScreen,
  },
  {
    name: 'EmailPasswordScreen',
    component: EmailPasswordScreen,
  },
  {
    name: 'EmailOtpScreen',
    component: EmailOtpScreen,
  },
  {
    name: 'PhoneScreen',
    component: PhoneScreen,
  },
  {
    name: 'PinScreen',
    component: PinScreen,
  },
  {
    name: 'ConfirmPinScreen',
    component: ConfirmPinScreen,
  },
  {
    name: 'AccountProtectedScreen',
    component: AccountProtectedScreen,
  },
  {
    name: 'PersonalDetailScreen',
    component: PersonalDetailScreen,
  },
  {
    name: 'SetPasswordScreen',
    component: SetPasswordScreen,
  },
  {
    name: 'ForgotPassword',
    component: ForgotPasswordScreen,
  },
  {
    name: 'AuthVerificationScreen',
    component: AuthVerificationScreen,
  },
  {
    name: 'RegisterScreen',
    component: RegisterScreen,
  },
];

export const dashboardStack = [
  {
    name: 'BottomTab',
    component: BottomTab,
  },
];

export const mergedStacks = [...dashboardStack, ...authStacks];
