export const setSession = (token:string) => {
    localStorage.setItem("token",token)
    document.cookie = `$jwtToken=${token}; path=/`
}
