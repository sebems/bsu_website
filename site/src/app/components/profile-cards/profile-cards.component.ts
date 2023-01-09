import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-cards',
  templateUrl: './profile-cards.component.html',
  styleUrls: ['./profile-cards.component.scss'],
})
export class ProfileCardsComponent {
  @Input() name!: string;
  @Input() title!: string;
  @Input() description?: string;
}
