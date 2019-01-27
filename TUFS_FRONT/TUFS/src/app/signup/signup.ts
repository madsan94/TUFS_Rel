export interface User {
    email:String,
    password:String,
    flag:String,
    message:String,
    session:{
        email:String,
        name:String
    }
}