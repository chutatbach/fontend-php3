import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }
  loader = {'opacity':1,'z-index':9999};
  ngOnInit(): void {
    setTimeout(() => {
      this.loader = {'opacity':0,'z-index':-1}
    },2000)
  }



  display = 'none';
  showadd(){
    this.display = 'block';
    setTimeout(
      () => {
        this.display = 'none';
      },3000
    )
  }
  
  addtocart(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Bạn đã thêm sản phẩm vào giỏ hàng'
    })
  }

}
