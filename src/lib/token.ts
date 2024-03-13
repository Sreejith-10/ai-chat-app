export const setSession = (token: string) => {
	localStorage.setItem("token", token);
	document.cookie = `$token=${token}; path='/';`;
};
