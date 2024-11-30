import { handleProcessError } from "../messages/ErrorHandlers.ts";

class AuthService {

    public checkStatusForLogin = async (correo: string, _password: string): Promise<any> => {
        try {
            // const usuario = await this.userRepository.getOne({ correo: correo });
            // const { userStatus, error } = checkUserStatusForLogin(usuario!, password);

            // if (!userStatus) {
            //     return handleProcessError({ status: error.status, error: error.message || '' });
            // }

            // const token = generarJWT(usuario!.id);
            // return { usuario, token };


            return { usuario: `User123 ${correo}`, token: 'ABCDFE38409SDAFS390' };

        } catch (error) {
            handleProcessError({ status: (error as any).status, error: (error as any).message || '' });
        }
    }

}

export default AuthService;