import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface Product {
  name : string,    // product name
  desc : string,    // product description
  logoURL : string, // logo (if applicable)
  repoURL : string, // repository URL
  prodURL : string, // production URL (if applicable)
  license : string, // license (if applicable)
  font    : string, // font for title (if applicable)
}
@Component({
  selector: 'app-products',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productionProds : Product[];
  devProds : Product[]; 

  constructor(private title : Title) { 
    this.title.setTitle('nullwell - products');
  }

  ngOnInit(): void {
    this.productionProds = [
      {
        name: 'Movie Explain',
        desc: `The Movie Explain app is a platform that provides users with detailed explanations of movies, TV shows, and other forms of visual media.`,
        logoURL : null,
        repoURL : null,
        prodURL : 'https://play.google.com/store/apps/details?id=com.sharath.moviexplain',
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'Kannada Ogatugalu',
        desc: `Discover the wisdom and cultural richness of Kannada language through this app (ಕನ್ನಡ ಒಗಟುಗಳು), designed to provide you with a vast array of traditional Ogatu (ಒಗಟು) that have been passed down through generations.`,
        logoURL : null,
        repoURL : null,
        prodURL : 'https://play.google.com/store/apps/details?id=com.sharath.kannadaogatugalu',
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'Kannada Gaadegalu',
        desc: `This app (ಕನ್ನಡ ಗಾದೆಗಳು) provides a collection of Kannada proverbs and sayings. It also allows users to search and save their favorite gaade (proverb) in an intuitive way.`,
        logoURL : null,
        repoURL : null,
        prodURL : 'https://play.google.com/store/apps/details?id=com.sharath.kannadagaadegalu',
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'Thought Probe',
        desc: `Welcome to Thought Probe, the ultimate mind reading challenge! In this game, game will guess what you are thinking.`,
        logoURL : null,
        repoURL : null,
        prodURL : 'https://play.google.com/store/apps/details?id=com.sharath.advancedmindreader',
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'Train your brain',
        desc: `Looking for a fun and challenging way to train your brain? Try out Train your brain puzzle game!`,
        logoURL : null,
        repoURL : null,
        prodURL : 'https://play.google.com/store/apps/details?id=com.sharath.trainyourbrain',
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'Memory Puzzle',
        desc: `Are you ready to test your memory skills? Take the Memory Puzzle Challenge!`,
        logoURL : null,
        repoURL : null,
        prodURL : 'https://play.google.com/store/apps/details?id=com.sharath.memorypuzzle',
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'Math Puzzle',
        desc: `The Math Puzzle Challenge is an exciting game that tests your problem-solving skills and mathematical abilities.`,
        logoURL : null,
        repoURL : null,
        prodURL : 'https://play.google.com/store/apps/details?id=com.sharath.mathematicsPuzzle',
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'Bhakti Sudhe',
        desc: `Bhakti Sudhe (ಭಕ್ತಿ ಸುಧೆ) hosts lyrics of Hindu Mythological Gods. Aim is to provide a central place for lyrics for a needy Theist. App is available in Kannada and English.`,
        logoURL : null,
        repoURL : null,
        prodURL : 'https://play.google.com/store/apps/details?id=com.sharath.kannadabhaktisudha',
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'XO : Beat Me',
        desc: `Tictoetoe Puzzle's AI algorithm and ability to take decisions on its own make the app distinctive.`,
        logoURL : null,
        repoURL : null,
        prodURL : 'https://play.google.com/store/apps/details?id=com.sharath.tictactoe',
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'UrgeBlood',
        desc: `UrgeBlood was developed to serve blood to needy people by providing a connection between the Blood Donor and the Requester.`,
        logoURL : null,
        repoURL : null,
        prodURL : 'https://play.google.com/store/apps/details?id=com.sharath.urgeblood',
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'Mind Reader',
        desc: `Mind teaser free application developed based on Mathematics`,
        logoURL : null,
        repoURL : null,
        prodURL : 'https://play.google.com/store/apps/details?id=com.sharath.mind&hl=en-IN',
        license : null,
        font    : 'Cairo',
      }
    ]


  }

}
