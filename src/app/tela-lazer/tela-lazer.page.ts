import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tela-lazer',
  templateUrl: './tela-lazer.page.html',
  styleUrls: ['./tela-lazer.page.scss'],
})
export class TelaLazerPage implements OnInit {
  value3 = ''
  items3:any = []

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
    if (localStorage.getItem('items3')){
      this.items3 = JSON.parse(localStorage.getItem('items3'))  
    }
  }
  addTaf(){
    let obj = {
      value: this.value3,
      isDone : false
  
    }
    this.items3.unshift(obj)
    localStorage.setItem('items3', JSON.stringify(this.items3))
    this.value3 = ''
  }
  deleteItem(ind3){
    this.items3 = this.items3.filter((c,index)=>index != ind3)
    localStorage.setItem('items3', JSON.stringify(this.items3))
  }
  setDone(index){
    let item = this.items3.find((c,ind3)=> index != ind3 )
    item.isDone = !item.isDone
    localStorage.setItem('items3', JSON.stringify(this.items3))
  }
}
