import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  empleadoForm: FormGroup;
  titulo = 'Registrar empleado'
  id: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private _empleadoService: EmpleadoService,
    private aRouter: ActivatedRoute){
    
      this.empleadoForm = this.fb.group ({
      nombre: ['', Validators.required],
      aPaterno: ['', Validators.required],
      aMaterno: ['', Validators.required],
      rfc:['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      estado: ['', Validators.required],
      ciudad: ['', Validators.required],
      departamento: ['', Validators.required],
      supervisor: ['', Validators.required],
      puesto:['', Validators.required]
    });
    this.id = this.aRouter.snapshot.paramMap.get('id')
}


  ngOnInit(): void {
    this.esEditar();
  }

  crearEmpleado(){
    const EMPLEADO: Empleado = {
      nombre: this.empleadoForm.get('nombre')?.value,
      aPaterno: this.empleadoForm.get('aPaterno')?.value,
      aMaterno: this.empleadoForm.get('aMaterno')?.value,
      rfc: this.empleadoForm.get('rfc')?.value,
      telefono: this.empleadoForm.get('telefono')?.value,
      email: this.empleadoForm.get('email')?.value,
      estado: this.empleadoForm.get('estado')?.value,
      ciudad: this.empleadoForm.get('ciudad')?.value,
      departamento: this.empleadoForm.get('departamento')?.value,
      supervisor: this.empleadoForm.get('supervisor')?.value,
      puesto: this.empleadoForm.get('puesto')?.value
    }
    console.log(EMPLEADO);
    if('Editar Empleado' === this.titulo) {
      if(this.id != null) {
        this._empleadoService.actualizarEmpleado(this.id, EMPLEADO).subscribe(data =>{
          alert('Empleado actualizado con exito!');
          this.router.navigate(['/listar-empleado'])
          this.empleadoForm.reset();
        }, error => {
          alert(error);
        })
      }
    } else {
      this._empleadoService.crearEmpleado(EMPLEADO).subscribe(data =>{
        alert('Empleado agregado con exito!');
        this.router.navigate(['/listar-empleado'])
      }, error => {
        this.empleadoForm.reset();
        alert(error);
      })
    }
  }
  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Empleado';
      this._empleadoService.obtenerEmpleado(this.id).subscribe(data => {
        this.empleadoForm.setValue({
          nombre: data.nombre,
          aPaterno: data.aPaterno,
          aMaterno: data.aMaterno,          
          rfc: data.rfc,
          telefono: data.telefono,
          email: data.email,
          estado: data.estado,
          ciudad: data.ciudad,
          departamento: data.departamento,
          supervisor: data.supervisor,
          puesto: data.puesto
        })
      })
    }
  }
}