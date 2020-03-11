import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {User} from './user';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  PHP_API_SERVER = 'http://localhost';
  

  constructor( private http: HttpClient,private router:Router) { 
  }
  getdata() {
    
    const url = "http://localhost:3000"; // site that doesn’t send Access-Control-*
   
    
    return this.http.get<User[]>(url+'/user');
  }
  getId(id: number) {
    return this.http.get<User[]>('http://localhost:3000/user?id=' + id);
  }
update(user:User){

    const url = "http://localhost:3000"; // site that doesn’t send Access-Control-*
    
   console.log("this is service");
   return this.http.post<User>(url+'/user/add',user);
  


}

deleteuser(id: number) {
  const url = "http://localhost:3000"; // site that doesn’t send Access-Control-*
  
  
 
  


  return this.http.delete(url+'/user/:' + id);


  // return this.http.delete<Emp[]>('http://localhost/crud/delete.php?id=' + id, config);
}


}
