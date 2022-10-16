/* eslint-disable import/no-anonymous-default-export */
import { randomNumber } from './utils';
import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default {
  user: Factory.extend({
    name() {
      return faker.name.fullName();
    },
    email() {
      return faker.internet.email();
    },
    role() {
      return faker.helpers.arrayElement(['admin', 'user']);
    },
    department() {
      return faker.helpers.arrayElement(['Sales', 'Marketing', 'IT']);
    },
    mobile() {
      return faker.phone.number();
    },
    address: {
      street() {
        return faker.address.streetAddress();
      },
      city() {
        return faker.address.state();
      },
      country() {
        return faker.address.country();
      },
      zip() {
        return faker.address.zipCode();
      },
    }
  }),
};
