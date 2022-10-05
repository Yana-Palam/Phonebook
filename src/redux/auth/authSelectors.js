export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUsername = state => state.auth.user.name;
export const selectUserIsLoading = state => state.auth.isLoading;
export const selectUserError = state => state.auth.error;
export const selectIsRefreshing = state => state.auth.isRefreshing;
