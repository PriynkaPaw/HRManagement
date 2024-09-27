export const storeTokensInSession = (Authentication) => {
    console.log('Authentication: in store token', Authentication);
    const accessToken = Authentication.response.access_token;
    const refreshToken = Authentication.response.refresh_token;
    sessionStorage.setItem("authAccessToken", accessToken);
sessionStorage.setItem("authRefreshToken", refreshToken);

}
