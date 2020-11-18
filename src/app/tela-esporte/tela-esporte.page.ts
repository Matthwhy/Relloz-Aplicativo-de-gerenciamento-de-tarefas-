import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tela-esporte',
  templateUrl: './tela-esporte.page.html',
  styleUrls: ['./tela-esporte.page.scss'],
})
export class TelaEsportePage implements OnInit {

  value1 = ''
  items1:any = []

  constructor(public ToastController : ToastController){}

  async openToast(){
    const toast = await this.ToastController.create({
      message: 'Sua tarefa foi deletada com sucesso.',
      duration: 2000,
      color: 'primary'
    });
    toast.present();
  }


  ngOnInit() {
    if (localStorage.getItem('items1')){
      this.items1 = JSON.parse(localStorage.getItem('items1'))  
    }
  }
  addTask(){
    let obj = {
      value: this.value1,
      isDone : false
  
    }
    this.items1.unshift(obj)
    localStorage.setItem('items1', JSON.stringify(this.items1))
    this.value1 = ''
  }
  deleteItem(ind1){
    this.items1 = this.items1.filter((c,index)=>index != ind1)
    localStorage.setItem('items1', JSON.stringify(this.items1))
  }
  setDone(index){
    let item = this.items1.find((c,ind1)=> index != ind1 )
    item.isDone = !item.isDone
    localStorage.setItem('items1', JSON.stringify(this.items1))
  }
}
