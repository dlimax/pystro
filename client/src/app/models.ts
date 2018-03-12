export class User {
    email: string;
    name: boolean;
    phone: string;
    password: string;    
    activation_token: string;
    reset_pw_token: string;
    constructor(email?: string, name?: string, 
                phone?: string, password?: string,
            activation_token?: string) {}
    loginData(): object {
        return {
            'username': this.email,
            'password': this.password
        }
    }
    resetPasswordData() : object {        
        return {
            'email': this.email,
            'password':  this.password,
            'reset_pw_token': this.reset_pw_token
        }
    }    

}

export class Restaurant {
    id: number;    
    name: string;
    cname: string;
}

export class Item {
    id: number;    
    title: string;    
    price: number;
}

export class Section {
    title: string;
    items: Item[];    
}
