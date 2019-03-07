
export class DataService{
    userName: string;
    userEmail: string;
    getData(){
        // make a call to the server....
        this.userName = 'Guest User';
        this.userEmail = 'guest@mycompany.com';
    }
}