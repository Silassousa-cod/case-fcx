import { faker } from '@faker-js/faker';

export const constsDatas = { 
    productType: ['LAPTOP', 'TABLET', 'MICE', 'HEADPHONE', 'SPEAKER'],
}

export function generatePassword() {
  return faker.internet.password({ length: 8, prefix: 'A1b' });
}