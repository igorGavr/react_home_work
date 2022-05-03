import {userService} from "./services";
import {MyEnum} from "./enums";

const getAllUsers = async () => {
  let {data:users} =  await userService.getAll();
    for (const user of users) {
        console.log(user.name)
        console.log(JSON.stringify(user));
    }
}
getAllUsers()

console.log(MyEnum.ADD);