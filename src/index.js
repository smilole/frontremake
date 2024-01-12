import {useApi} from "./api/UseApi.js";
import {mockLogin, useLogin} from "./api/doctor/UseLogin.js";
import {mockRegister, useRegister} from "./api/doctor/UseRegister.js";
import {useLogout} from "./api/doctor/UseLogout.js";
import {useProfile} from "./api/doctor/UseProfile.js";
import {mockProfileEdit, useProfileEdit} from "./api/doctor/UseProfileEdit.js";
import {mockConsultation, useConsultation} from "./api/consultation/UseConsultation.js";
import {mockConcreteConsultation, useConcreteConsultation} from "./api/consultation/UseConcreteConsultation.js";
import {mockDiagnoses, useDiagnoses} from "./api/dictionary/UseDiagnoses.js";
import {useIcdRoot} from "./api/dictionary/UseIcdRoot.js";
import {mockSpeciality, useSpeciality} from "./api/dictionary/UseSpecialities.js";

// useApi(
//     async () => useLogin(mockLogin),
//     (data) => console.log(data),
//     (error) => console.log(error)
// ).then(() => useApi(
//     async () => useProfile(),
//     (data) => console.log(data),
//     (error) => console.log(error)
// ).then(() => useApi(
//     async () => useConsultation(mockConsultation),
//     (data) => console.log(data),
//     (error) => console.log(error)
// ).then(() => useApi(
//     async () => useLogout(),
//     () => console.log("logout"),
//     (error) => console.log(error)
// ))));


useApi(
    async () => useSpeciality(mockSpeciality),
    (data) => console.log(data),
    (error) => console.log(error)
);

