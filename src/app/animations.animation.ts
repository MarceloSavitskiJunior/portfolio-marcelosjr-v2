import { animate, state, style, transition, trigger } from '@angular/animations';

export const welcomeAnimation = trigger('welcomeAnimation', [
  state('in', style({ transform: 'translateX(0)' })),
  state('out', style({ transform: 'translateX(-100%)' })),
  transition('in => out', animate('1s ease-in-out')),
  transition('out => in', animate('1s ease-in-out')),
]);