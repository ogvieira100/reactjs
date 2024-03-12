//Initial State
export type User = {

        id:number,
        name:string
}

//Initial State
export type UserState = {
    user:User| null

}

//Actions 
type SignInUser = {
    type :'SIGNIN',
    payload:{user:User}
}

type SignOutUser = {
    type :'SIGNOUT'
}

export type UserAction  = SignInUser | SignOutUser