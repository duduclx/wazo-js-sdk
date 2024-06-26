import type Contact from '../domain/Contact';
import getApiClient from '../service/getApiClient';

export class Directory {
  async findMultipleContactsByNumber(numbers: string[], fields?: Record<string, any>): Promise<Contact[]> {
    return getApiClient().dird.findMultipleContactsByNumber(numbers, fields);
  }

}

if (!global.wazoDirectoryInstance) {
  global.wazoDirectoryInstance = new Directory();
}

// @ts-ignore: Circular definition of import alias 'default'.
export default global.wazoDirectoryInstance;
