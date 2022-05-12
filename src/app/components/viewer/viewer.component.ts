import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styles: [],
})
export class ViewerComponent implements OnInit {
  constructor() {}

  currentFile: string = '';
  files: string[] = [
    'https://riptutorial.com/Download/html5-canvas-es.pdf',
    '/assets/pdf/cv-QN.pdf',
    '/assets/images/toyStory.jpg',
    'https://www.orientacionandujar.es/wp-content/uploads/2015/03/CUENTOS-CON-EL-ABECEDARIO-1%C2%BA.pdf',
    'https://cdn.pixabay.com/photo/2022/04/29/17/25/plum-blossoms-7164141__480.jpg',
    'https://www.orientacionandujar.es/wp-content/uploads/2018/09/Abecedario-para-colorear-001.jpg',
    'https://www.mundoprimaria.com/wp-content/uploads/2020/04/ayudar-ni%C3%B1o-aprender-alfabeto.png',
  ];

  ngOnInit(): void {
    this.currentFile = this.files[0];
  }

  prevFile(): void {
    if (this.files.length > 0) {
      const currentPosition = this.files.indexOf(this.currentFile);
      currentPosition === 0
        ? (this.currentFile = this.files[this.files.length - 1])
        : (this.currentFile = this.files[currentPosition - 1]);
    }
  }

  nextFile(): void {
    if (this.files.length > 0) {
      const currentPosition = this.files.indexOf(this.currentFile);
      currentPosition === this.files.length - 1
        ? (this.currentFile = this.files[0])
        : (this.currentFile = this.files[currentPosition + 1]);
    }
  }
}
