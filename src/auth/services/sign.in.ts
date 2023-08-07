import { ControllerArgs } from "src/core";


export const signIn = async ({ input }: ControllerArgs) => {
    const { email, password} = input;
  
    // const admin = (await Admin.scope("withPassword")
    //     .findOne({ where: { email } }))?.toJSON()
    // if (!admin)
    //     throw new UnAuthorizedError("Invalid credentials provided");

    // const isEqual = await compareHashedData(password, admin.password!);
    // if(!isEqual) throw new UnAuthorizedError("Incorrect credentials provided");

    // // check if the admin role.
    // const role = admin.role !== Role.SuperAdmin ? Role.Admin : Role.SuperAdmin;

    
    // const accessToken = generateToken(
    //     { id: admin.id, role   },
    //     config.accessTokenSecret,
    //     parseInt(config.accessTokenExpiresIn)
    // );
    // const refreshToken = generateToken(
    //     { id: admin.id, role },
    //     config.refreshTokenSecret,
    //     parseInt(config.refreshTokenExpiresIn)
    // );
 
    return {
        code: 200,
        message: 'You are logged in',
        data: {
            accessToken: "access token",
            refreshToken: "refresh token",
            accessTokenExpiresIn: "Tomorow",
            refreshTokenExpiresIn: "Tomorrow"
        }
    };
}