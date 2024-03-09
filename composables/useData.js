import { ref } from 'vue';

export const useData = () => {
    const companyData = ref(null);
    const isLoading = ref(false);
    const isError = ref(false);

    const loadCompanyData = async () => {
        if (!companyData.value) {
            isLoading.value = true;
            isError.value = false;
            try {
                const response = await fetch('/data/companies.json');
                if (response.ok) {
                    companyData.value = await response.json();
                } else {
                    throw new Error('Failed to load data');
                }
            } catch (error) {
                isError.value = true;
                console.error("Error fetching company data:", error);
            } finally {
                isLoading.value = false;
            }
        }
    };

    // Load data immediately if desired, or export function to be called explicitly
    loadCompanyData();

    return { companyData, isLoading, isError, loadCompanyData };
};
