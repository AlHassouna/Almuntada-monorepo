import { faker as Faker } from "@faker-js/faker";
import { define } from "typeorm-seeding";

import { Academic } from "./academic.entity";

define(Academic, (faker: typeof Faker) => {
  const user = new Academic();
  user.firstName = faker.name.firstName();
  user.lastName = faker.name.lastName();
  user.age = Number(faker.random.numeric(2));
  user.city = faker.address.city();
  user.career.career = faker.company.bsBuzz();
  user.email = faker.internet.email();
  user.imageUrl = faker.image.imageUrl();
  user.subject.subject = faker.company.bsAdjective();
  user.degree = "BSC";
  return user;
});
