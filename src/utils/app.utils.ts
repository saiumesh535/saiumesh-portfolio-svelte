export interface Langs {
    name: string;
    color: string;
}

export interface Repo {
    title: string;
    titleBackground: string;
    langs: string[];
    description: string;
    location: string;
}

export const getReps = (): Repo[] => {
    return [
        {
            title: "NPM Reminder",
            titleBackground: "linear-gradient(170.18deg, #90F7EC 0%, #32CCBC 100%)",
            langs: ["Rust", "Node"],
            description: "Some Rust project by a mad person",
            location: "https://github.com/saiumesh535/actix-server"
        },
        {
            title: "Rocket Rust",
            titleBackground: "linear-gradient(170.18deg, #FAD7A1 0%, #E96D71 100%)",
            langs: ["Rust", "Angular"],
            description: "Some Rust project by a mad person",
            location: "https://github.com/saiumesh535/actix-server"
        },
        {
            title: "Chi-Http",
            titleBackground: "linear-gradient(170.18deg, #F5CBFF 0%, #C346C2 100%)",
            langs: ["Go", "React"],
            description: "Some Rust project by a mad person",
            location: "https://github.com/saiumesh535/actix-server"
        },
    ]
}


export const getLangs = (): Langs[] => {
    return [
        {
            name: 'All',
            color: '#ef476f'
        },
        {
            name: 'Node',
            color: '#ffd166'
        },
        {
            name: 'React',
            color: '#118ab2'
        },
        {
            name: 'Go',
            color: '#06d6a0'
        },
        {
            name: 'Rust',
            color: '#ef476f'
        },
        {
            name: 'Angular',
            color: '#c742dd'
        },

    ]
}