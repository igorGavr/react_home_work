export interface IUser{
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

export interface IExmp{
    mission_name: string
    launch_date_local: string
    launch_site: {
        site_name_long: string
    }
    links: {
        article_link: null
        video_link: string
    }
    rocket: {
        rocket_name: string
        first_stage: {
            cores: [
                {
                    flight: number
                    core: {
                        reuse_count: number
                        status: string
                    }
                }
            ]
        },
        second_stage: {
            payloads: [
                {
                    payload_type: string
                    payload_mass: number
                    payload_mass_lbs: number
                }
            ]
        }
    }
}