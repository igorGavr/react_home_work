export interface IUser {
    id: number
    username: string
    email: string
    name: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: number
            lng: number
        }
    }
}

interface IPayloads {
    payload_type: string,
    payload_mass: number,
    payload_mass_lbs: number
};

interface ICores {
    flight: number
    core: {
        reuse_count: number
        status: string
    }
};

export interface IExmp {
    mission_name: string
    launch_date_local: string
    launch_site: {
        site_name_long: string
    }
    links: {
        article_link: string
        video_link: string
    }
    rocket: {
        rocket_name: string
        first_stage: {
            cores: ICores[]
        },
        second_stage: {
            payloads: IPayloads[]
        }
    }
}

///////////////////////////////////////////////
interface IUser2 {
    name: string,
    age: number,
    gender: string
}

const user2: IUser2 = {
    name: 'Max',
    age: 18,
    gender: 'male'
}

const sum = (a: number, b: number): number => a + b

const incAge = (someUser: IUser2, inc: number): IUser2 => {
    someUser.age += inc
    return someUser
}
console.log(sum(1, 2))
showSum(2, 3)
incAge(user2, 2)

/////////////////////////////////////////
type Name = 'Jurik'|'Kutasik'|'Skirka'|'Zyat'

interface IMokriy {
    id?: number
    name: Name
}
interface IMorkiyOne extends IMokriy{
    age: number
}
const mokriy: Required<IMorkiyOne> = {name: "Jurik", age: 2, id: null}
