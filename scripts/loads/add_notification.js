import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
 http.post('http://localhost:3001/api/v1/notifications',JSON.stringify({
      audiences:['ecb356c0-5c56-4be6-bb59-cfd368e19d15'],
      type:'URGENT',
      message:"failed"
  }),{
      
      headers:{
          'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FtdW5kcmFzcyIsImtleSI6ImJhYmEwNzdlLWU3MTYtNGQzNC05NDkwLWMxNzkwMmU4NGZmYSIsImlhdCI6MTYwNzI3NTE3MiwiZXhwIjoxNjA3NjM1MTcyfQ.7uC1T01r9yQwgD_RjZNGft85PpedRkG5tZPsysXp2qk'
      }
  });
  sleep(1);
}
