export interface Langs {
    name: string;
    color: string;
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