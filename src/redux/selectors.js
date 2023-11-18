export const selectTasks = state => state.tasks.items;
export const getIsLoading = state => state.tasks.isLoading;
export const getError = state => state.tasks.error;
export const selectStatusFilter = state => state.filters.status;