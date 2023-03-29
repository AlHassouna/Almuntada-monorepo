import { faker as Faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';

import { User } from './user.entity';

define(User, (faker: typeof Faker) => {
  const user = new User();
  user.firstName = faker.name.firstName();
  user.lastName = faker.name.lastName();
  user.age = Number(faker.random.numeric(2));
  user.city = faker.address.city()
  user.career = faker.company.bsBuzz()
  user.email = faker.internet.email()
  user.imageUrl = faker.image.imageUrl()
  user.subject = faker.company.bsAdjective()
  user.degree = 'BSC'
  return user;
});
