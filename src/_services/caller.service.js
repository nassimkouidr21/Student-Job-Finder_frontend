import axios from "axios";
// import { accountService } from "@/_services";

const Axios = axios.create({
  baseURL: "http://localhost:8080",
});

// Axios.interceptors.response.use((element) => {
//   console.log("interceptor", element);
// });
/**
 * Interceptor pour injection token
 */
// Axios.interceptors.request.use((request) => {
//   // Si connecté on ajoute le token dans l'entête
//   if (accountService.isLogged()) {
//     request.headers.Authorization = "Bearer " + accountService.getToken();
//   }

//   return request;
// });

/**
 * Interceptor des réponses de l'API
 */
// Axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status == 401) {
//       accountService.logout();
//       router.push("/login");
//     }
//   }
// );

export default Axios;
