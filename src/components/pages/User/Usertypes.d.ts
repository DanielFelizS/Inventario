export type LoginData = {
    userName: string;
    password: string;
    dataRoles: Array< ()=> void >
}

export type RegisterData = {
    FirstName: string;
    LastName: string;
    userName: string;
    Email: string;
    password: string;
    data: Array< ()=> void >
}