import { ref } from 'vue';
import { faker } from '@faker-js/faker';

export const useData = () => {
  const data = ref([]);

  const generateData = () => {
    const priorities = [1, 2, 3, 4, 5]; // 1 = HIGH, 5 = LOW
    const assignees = ['Paul', 'Dwain', 'Bret'];

    data.value = Array.from({ length: 20 }, () => ({
      // generate id
      id: faker.datatype.uuid(),
      companyName: faker.person.firstName(),
      category: faker.person.firstName(),
      website: faker.internet.url(),
      contact: faker.person.firstName(),
      location: `c${faker.datatype.number({ min: 1000, max: 9999 })}`,
      notes: faker.lorem.sentence(),
      priority: faker.helpers.arrayElement(priorities),
      assigned: faker.helpers.arrayElement(assignees),
    }));
  };

  generateData(); // Populate initial data

  return { data, generateData };
};
