import { Component, OnInit } from '@angular/core';
// import { Article } from 'src/classes/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article!: any;


  constructor() { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void {
    this.article = {
      desc: "Bonjour le monde",
      lib: "csewew-rwr",
      price: 20.2
    }
  }



}
