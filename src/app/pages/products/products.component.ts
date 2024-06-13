import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface Product {
  name : string,    // product name
  desc : string,    // product description
  logoURL : string, // logo (if applicable)
  prodURLWeb : string, // production URL for Web (if applicable)
  prodURLAndroid : string, // production URL for Android (if applicable)
  prodURLWindows : string,
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
        name: 'Quiz Tournament',
        desc: `Dive into the thrilling world of Quiz Tournament, the ultimate trivia challenge app that will put your knowledge to the test! With a vast variety of topics ranging from history and science to pop culture and sports, Quiz Tournament offers an engaging and educational experience for trivia enthusiasts of all levels.`,
        logoURL : null,
        prodURLWeb : null,
        prodURLAndroid : 'https://play.google.com/store/apps/details?id=com.sharath.quiztournament&hl=en',
        prodURLWindows : null,
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'Sanskrit Hangman',
        desc: `Welcome to Sanskrit Hangman, the ultimate word-guessing game designed for Sanskrit enthusiasts of all ages! Dive into the ancient language of Sanskrit and put your vocabulary skills to the test by guessing words correctly to save the stick figure from hanging.`,
        logoURL : null,
        prodURLWeb : null,
        prodURLAndroid : 'https://play.google.com/store/apps/details?id=com.sharath.sanskrithhangman',
        prodURLWindows : null,
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'Kannada Hangman',
        desc: `Welcome to Kannada Hangman, the ultimate word-guessing game designed for Kannada language enthusiasts of all ages! Put your Kannada vocabulary skills to the test as you embark on a thrilling journey to save the stick figure from hanging by correctly guessing Kannada words.`,
        logoURL : null,
        prodURLWeb : null,
        prodURLAndroid : 'https://play.google.com/store/apps/details?id=com.sharath.kannadahangman',
        prodURLWindows : 'https://www.microsoft.com/store/productId/9NC74ZZ1S8TP?ocid=pdpshare',
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'Kannada Cinema',
        desc: `Welcome to the ultimate destination for Kannada Cinema enthusiasts – our specially curated Kannada Cinema app! Immerse yourself in the enchanting world of Kannada films, where tradition meets innovation and storytelling takes center stage.`,
        logoURL : null,
        prodURLWeb : null,
        prodURLAndroid : 'https://play.google.com/store/apps/details?id=com.sharath.kannadamovies',
        prodURLWindows : null,
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'Movie Explain',
        desc: `The Movie Explain app is a platform that provides users with detailed explanations of movies, TV shows, and other forms of visual media.`,
        logoURL : null,
        prodURLWeb : null,
        prodURLAndroid : 'https://play.google.com/store/apps/details?id=com.sharath.moviexplain',
        prodURLWindows : null,
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'Kannada Ogatugalu',
        desc: `Discover the wisdom and cultural richness of Kannada language through this app (ಕನ್ನಡ ಒಗಟುಗಳು), designed to provide you with a vast array of traditional Ogatu (ಒಗಟು) that have been passed down through generations.`,
        logoURL : null,
        prodURLWeb : null,
        prodURLAndroid : 'https://play.google.com/store/apps/details?id=com.sharath.kannadaogatugalu',
        prodURLWindows : null,
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'Kannada Gaadegalu',
        desc: `This app (ಕನ್ನಡ ಗಾದೆಗಳು) provides a collection of Kannada proverbs and sayings. It also allows users to search and save their favorite gaade (proverb) in an intuitive way.`,
        logoURL : null,
        prodURLWeb : null,
        prodURLAndroid : 'https://play.google.com/store/apps/details?id=com.sharath.kannadagaadegalu',
        prodURLWindows : null,
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'Thought Probe',
        desc: `Welcome to Thought Probe, the ultimate mind reading challenge! In this game, game will guess what you are thinking.`,
        logoURL : null,
        prodURLWeb : 'https://null-well.github.io/thoughtProbe/',
        prodURLAndroid : 'https://play.google.com/store/apps/details?id=com.sharath.advancedmindreader',
        prodURLWindows : 'https://www.microsoft.com/store/productId/9NWCZ994T4WK',
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'Train your brain',
        desc: `Looking for a fun and challenging way to train your brain? Try out Train your brain puzzle game!`,
        logoURL : null,
        prodURLWeb : null,
        prodURLAndroid : 'https://play.google.com/store/apps/details?id=com.sharath.trainyourbrain',
        prodURLWindows : null,
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'Memory Puzzle',
        desc: `Are you ready to test your memory skills? Take the Memory Puzzle Challenge!`,
        logoURL : null,
        prodURLWeb : null,
        prodURLAndroid : 'https://play.google.com/store/apps/details?id=com.sharath.memorypuzzle',
        prodURLWindows : null,
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'Math Puzzle',
        desc: `The Math Puzzle Challenge is an exciting game that tests your problem-solving skills and mathematical abilities.`,
        logoURL : null,
        prodURLWeb : null,
        prodURLAndroid : 'https://play.google.com/store/apps/details?id=com.sharath.mathematicsPuzzle',
        prodURLWindows : null,
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'Bhakti Sudhe',
        desc: `Bhakti Sudhe (ಭಕ್ತಿ ಸುಧೆ) hosts lyrics of Hindu Mythological Gods. Aim is to provide a central place for lyrics for a needy Theist. App is available in Kannada and English.`,
        logoURL : null,
        prodURLWeb : null,
        prodURLAndroid : 'https://play.google.com/store/apps/details?id=com.sharath.kannadabhaktisudha',
        prodURLWindows : null,
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'XO : Beat Me',
        desc: `Tictoetoe Puzzle's AI algorithm and ability to take decisions on its own make the app distinctive.`,
        logoURL : null,
        prodURLWeb : null,
        prodURLAndroid : 'https://play.google.com/store/apps/details?id=com.sharath.tictactoe',
        prodURLWindows : null,
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'UrgeBlood',
        desc: `UrgeBlood was developed to serve blood to needy people by providing a connection between the Blood Donor and the Requester.`,
        logoURL : null,
        prodURLWeb : null,
        prodURLAndroid : 'https://play.google.com/store/apps/details?id=com.sharath.urgeblood',
        prodURLWindows : null,
        license : null,
        font    : 'Cairo',
      },
      {
        name: 'Mind Reader',
        desc: `Mind teaser free application developed based on Mathematics`,
        logoURL : null,
        prodURLWeb : null,
        prodURLAndroid : 'https://play.google.com/store/apps/details?id=com.sharath.mind&hl=en-IN',
        prodURLWindows : null,
        license : null,
        font    : 'Cairo',
      }
    ]


  }

}
