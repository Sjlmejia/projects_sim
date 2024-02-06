import { Component } from '@angular/core';
import { CustomTooltipDirective } from '../../directive/custom-tooltip.directive';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CustomTooltipDirective],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css'
})
export default class TooltipComponent {

}
