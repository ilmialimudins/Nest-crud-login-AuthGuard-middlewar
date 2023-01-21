import { IsNotEmpty, isNumberString} from "class-validator";


 export class UsersDto {
    @IsNotEmpty()
    username:string;
    @IsNotEmpty()
    password:string;
}

export default UsersDto