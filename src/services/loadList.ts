import { ListIndexProps } from '../pages/list';
import { setupAPIClient } from './api';

export const loadListQuery = async (param: string): Promise<ListIndexProps> => {
  console.log('called');
  const apiClient = setupAPIClient();
  const response = await apiClient.get('/list', {
    params: {
      breed: param,
    },
  });
  console.log(response.data);
  if (response) {
    return response.data;
  }

  return;
};

export const loadList = async (): Promise<ListIndexProps> => {
  const apiClient = setupAPIClient();
  const response = await apiClient.get('/list');
  if (response) {
    return response.data;
  }

  return;
};
