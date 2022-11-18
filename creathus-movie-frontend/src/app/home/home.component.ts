import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import movieData from '../movies.json';
import { MoviesService } from '../movies.service';

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
  moviesStatic:any = movieData;  
  movies:Array<any>;  

  title?: string;

  public myContent:string;

  @ViewChild('Image',{static:false}) Image:ElementRef

  constructor(
    public router:Router,
    public modalService: BsModalService,
    public movieService:MoviesService) { }

  ngOnInit(): void {
    console.log(this.moviesStatic)
    this.getMovies();
  }

  redirectDetail(id:string){
    this.router.navigate(['detalhes',id]);
    console.log(id)
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  
  
  openModalDetail(template: TemplateRef<any>,item:any,staticData:any) {

    const data = {
      id: item.id,
      description: item.description,
      autor: item.autor,
      img: staticData?"../../assets/capas/"+item.img:item.img,
      title: item.title,
    };

    this.modalRef = this.modalService.show(template, {
      initialState : data
    });

  }

  onSubmit(form:any){

    const formData:any = new FormData();

    formData.append('autor',form.value.autor)
    formData.append('title',form.value.title)
    formData.append('description',form.value.description)
    formData.append('img',this.fileToUpload)

    this.movieService.createMovie(formData).subscribe((data)=>{
      
      if(data.code == 200){
        alert("Dados salvo com sucesso");
        this.modalRef?.hide()
        this.getMovies();
      }

    }, (error)=>{
      if(error.status == 409){
        alert("Ja existe um registro salvo com esses dados");
      }
    })
  }

  handleFileInput(event:any) {
    
    this.fileToUpload = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }

    reader.readAsDataURL(this.fileToUpload);
  
  }

  getMovies(){
    this.movieService.getAllMovies().subscribe((result)=>{
      this.movies = result.data
      console.log(this.movies);
    })
  }

}
