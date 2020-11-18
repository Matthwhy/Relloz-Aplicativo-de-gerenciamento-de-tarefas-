import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tela-trabalho',
  templateUrl: './tela-trabalho.page.html',
  styleUrls: ['./tela-trabalho.page.scss'],
})
export class TelaTrabalhoPage implements OnInit {

  value2 = ''
  items2:any = []

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
    if (localStorage.getItem('items2')){
      this.items2 = JSON.parse(localStorage.getItem('items2'))  
    }
  }
  addTa(){
    let obj = {
      value: this.value2,
      isDone : false
  
    }
    this.items2.unshift(obj)
    localStorage.setItem('items2', JSON.stringify(this.items2))
    this.value2 = ''
  }
  deleteItem(ind2){
    this.items2 = this.items2.filter((c,index)=>index != ind2)
    localStorage.setItem('items2', JSON.stringify(this.items2))
  }
  setDone(index){
    let item = this.items2.find((c,ind2)=> index != ind2 )
    item.isDone = !item.isDone
    localStorage.setItem('items2', JSON.stringify(this.items2))
  }
}
