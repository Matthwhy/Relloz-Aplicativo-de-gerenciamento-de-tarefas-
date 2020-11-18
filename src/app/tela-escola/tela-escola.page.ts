import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tela-escola',
  templateUrl: './tela-escola.page.html',
  styleUrls: ['./tela-escola.page.scss'],
})
export class TelaEscolaPage implements OnInit {

    value0 = ''
    items0:any = []
  
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
      if (localStorage.getItem('items0')){
        this.items0 = JSON.parse(localStorage.getItem('items0'))  
      }
    }
    addT(){
      let obj = {
        value: this.value0,
        isDone : false
    
      }
      this.items0.unshift(obj)
      localStorage.setItem('items0', JSON.stringify(this.items0))
      this.value0 = ''
    }
    deleteItem(ind0){
      this.items0 = this.items0.filter((c,index)=>index != ind0)
      localStorage.setItem('items0', JSON.stringify(this.items0))
    }
    setDone(index){
      let item = this.items0.find((c,ind0)=> index != ind0 )
      item.isDone = !item.isDone
      localStorage.setItem('items0', JSON.stringify(this.items0))
    }
  }
  