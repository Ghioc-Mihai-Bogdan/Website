import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  cards = [
    {proimg: '../assets/images/1.jpg',title:'ST-Style Electric Guitars',text:'A double-cutaway, three single-coil pickups and the unmistakable ST-shape: the world’s most popular and iconic electric guitar design has been writing rock and pop history since 1954. And it’s as current as ever, helping shape almost every music genre popular today.'},
    {proimg: '../assets/images/2.jpg',title:'TE-Style Electric Guitars', text:'The hallmarks of this timeless electric guitar design are its simple, ingenious TE-shape featuring one cutaway and the characteristic sound of two single-coil pickups. As cool now as it was the day it first graced guitar shops, our version of the TE design incorporates many refinements and is offered in a variety of pickup combinations to help you master all kinds of styles, from country to heavy metal.'},
    {proimg: '../assets/images/3.png',title:'Single Cut Electric Guitars', text:'Legendary tones, iconic looks: Our SC guitars are based on designs that define rock music, all the way from the 1950s to the present day.'},
    {proimg: '../assets/images/4.jpg',title:'Double Cut Electric Guitars', text:'DC instruments are inspired by classic double-cut body shapes that have played a key role in the history of rock and pop. Fans of this design were and are at home in all genres – Australian rock sounds are only one of the many facets of these guitars.'},
    {proimg: '../assets/images/5.jpg',title:'Prog Electric Guitars', text:'The Progressive models are all about high-gain sounds, in all their myriad varieties: 6, 7 or 8 strings, standard tuning or baritone, right or left-handed, standard or fan-frets, with or without tremolo – to name just a few. Welcome to shredder’s paradise!'},
    {proimg: '../assets/images/6.jpg',title:'Offset Electric Guitars', text:'Even at first glance, our offset models leave no doubt about their destiny: pure rock’n’roll! Whether V-, X- or Z-shape, each model is an unmistakable statement in terms of looks and tone – especially the ‘hard and heavy’ variety...'},
  ]
}
