import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  resultado: string = '';
  interpre: string = '';
  BMI: number = 0;

  constructor(
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
   let bmi:number = +this.activateRoute.snapshot.paramMap.get('valor')!;
   this.BMI = bmi
  console.log(bmi)

  this.getResultado()
  }

  getResultado(){
    if (this.BMI >= 25) {
      this.resultado = 'Exceso de peso'
      this.interpre = 'Tienes un peso corporal superior al normal.'
    } else if( this.BMI >= 18.5) {
      this.resultado = 'Normal'
      this.interpre = 'Tienes un peso corporal normal.'
    }else{
      this.resultado = 'Bajo peso'
      this.interpre = 'Tienes un peso corporal mas bajo de lo normal.'
    }
  }
}
