export class User{    
    
    constructor(
        public _id:string,
        public name:string,
        public lastname:string,
        public username:string,
        public password:string,
        public email:string,
        public rol:string,
        public bills: [],
        public history: []
    ){}


}