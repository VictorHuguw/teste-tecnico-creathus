import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import movieData from '../movies.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  modalRef?: BsModalRef;
  fileToUpload: any;
  imageUrl: any;
  imageUrlDetail: any;
  avatarImage: any = "../../assets/image.png";
  movies:any = movieData;  

  title?: string;

  constructor(public router:Router,private modalService: BsModalService) { }

  ngOnInit(): void {
    console.log(this.movies)
  }

  redirectDetail(id:string){
    this.router.navigate(['detalhes',id]);
    console.log(id)
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalDetail(template: TemplateRef<any>,item:any) {
    
    const initialState: ModalOptions = {
      initialState: {
        list: [
          'Open a modal with component',
          'Pass your data',
          'Do something else',
          '...'
        ],
        title: 'Modal with component'
      }
    };
    
    this.modalRef = this.modalService.show(template,initialState);
    this.imageUrlDetail = "../../assets/capas/pantera-negra-wakanda-forever.jpg";
  }

  onSubmit(form:any){
    console.log(form);
  }

  handleFileInput(event:any) {
    this.fileToUpload = event.target.files[0];
    console.log(this.fileToUpload);

    // Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    this.imageUrl = 0
  }

}
