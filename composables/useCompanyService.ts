// composables/useCompanyService.ts

import { ref } from 'vue';
import { APIService } from '~/services/APIService';
import { Company } from '~/types/Company';

// Instantiate ApiService with the base URL for companies and the Company type
const companyService = new APIService<Company[]>('https://3f09553e-84c6-41f3-b299-3386a9b20870.mock.pstmn.io');

export const useCompanyService = () => {
  const companies = ref<Company[] | string>([]); // Reactive reference for company data
  const errorMessage = ref<string>(''); // Reactive reference for error messages

  // Function to list all companies
  const listCompanies = async () => {
    const response = await companyService.list("/tradeshow"); // Use ApiService to fetch data
    if (typeof response === 'string') {
      errorMessage.value = response; // Handle errors
    } else {
      
      companies.value = response; // Update companies with the fetched data
    }
  };

  // Expose company data, error messages, and methods to components
  return { companies, errorMessage, listCompanies };
};