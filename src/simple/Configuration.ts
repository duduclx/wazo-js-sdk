import Wazo from '.';
import getApiClient from '../service/getApiClient';
import Profile from '../domain/Profile';

export class Configuration {
  async getCurrentUser(): Promise<Profile> {
    const session = Wazo.Auth.getSession();
    return getApiClient().confd.getUser(`${session ? session.uuid : ''}`);
  }

}

if (!global.wazoConfigurationInstance) {
  global.wazoConfigurationInstance = new Configuration();
}

// @ts-ignore: Circular definition of import alias 'default'.
export default global.wazoConfigurationInstance;
