import { TFilters } from '../models/filters';

// Crutch for producs filter... bruh)
export const filterProducts = (products: any, filters: TFilters) => {
  return products.filter((product: any) => {
    let successFilter: boolean = true;

    for (const [key, filterValue] of Object.entries(filters)) {
      if (filterValue === "ANY") {
        successFilter = true;
      } else {
        const productParameter = product[key].toUpperCase();
        if (productParameter === filterValue) {
          successFilter = true;
        } else {
          successFilter = false;
          break;
        }
      }
    }

    return successFilter;
  })
}
