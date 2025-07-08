import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() btn_text:string = ""
  @Input() btn_class:string = ""
  @Input() btn_input:any = [0, '']
  
	btn_click = ()=>{}

  ngOnInit(){
    if(this.btn_input[0]==2){
      this.btn_click = ()=>{
        const target = document.querySelector(`#${this.btn_input[1]}`);
        target?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  
}
