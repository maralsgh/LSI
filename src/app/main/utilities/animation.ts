import {animate, style, transition, trigger} from "@angular/animations";


export const FADE_ANIMATION = trigger('fade', [
  transition('void => *', [
    style({ opacity: 0 }),
    animate(1000, style({ opacity: 1 }))
  ]),
  transition('* => void', [
    animate(1000, style({ opacity: 0 }))
  ])
])
