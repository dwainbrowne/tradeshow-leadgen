// composables/useCompanyService.ts

import { ref } from 'vue';
import { APIService } from '~/services/APIService';
import { Company } from '~/types/Company';
import { UpdateDataModel } from '~/types/UpdateDataModel';


const googleSheetsUpdateMakeAPI = "https://hook.us1.make.com/jrsfmxacmu1ktri2auxn5jc4zb7oylyp";

export const columnMapper =   {
  "id": 2,
  "companyname": "A",
  "category": "B",
  "website": "C",
  "contact": "D",
  "location": "E",
  "notes": "F",
  "priority": "F",
  "assigned": "I",
  "tradeshownotes": "J"
  }


// Instantiate ApiService with the base URL for companies and the Company type
const companyService = new APIService<Company[]>('https://hook.us1.make.com/rpfn0oqv6m9zrg8k03l06ie4tqrkz36c');

export const useCompanyService = () => {
  const companies = ref<Company[] | string>([]); // Reactive reference for company data
  const errorMessage = ref<string>(''); // Reactive reference for error messages

  // Function to list all companies
  const listCompanies = async () => {
    const response = await companyService.list(""); // Use ApiService to fetch data

    if (typeof response === 'string') {
      errorMessage.value = response; // Handle errors
    } else {
      
      companies.value = response.targetlist; // Update companies with the fetched data
    }
  };

  // Expose company data, error messages, and methods to components
  return { companies, errorMessage, listCompanies };
};


export const useUpdateCompanyInfo = (updateData: UpdateDataModel) => {


  const saveCompanyData = async (updateData: UpdateDataModel) => {
    console.log("Saving Company Data", updateData);
    const response = await companyService.update(updateData.rowNumber,updateData,googleSheetsUpdateMakeAPI);
    return response;
  };
  return { saveCompanyData };
}

// Function to ge the mapped column letter for the column name
//eg. useMapper("companyname") will return "A"
export const useMapper = (columnName:string) => {

  const column = columnName.toLowerCase();

  const mappedLetter = columnMapper[column];

  return { mappedLetter };
}