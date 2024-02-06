import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomTooltip]',
  standalone: true
})
export class CustomTooltipDirective {
  @Input('appCustomTooltip') tooltipText: string = '';

  private tooltipElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.hideTooltip();
  }

  private showTooltip(): void {

    if (!this.tooltipElement) {
      this.tooltipElement = this.renderer.createElement('div');
      this.renderer.appendChild(this.tooltipElement, this.renderer.createText(this.tooltipText));

      const parentElement = this.renderer.parentNode(this.el.nativeElement);
      this.renderer.appendChild(parentElement, this.tooltipElement);

      this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
      this.renderer.setStyle(this.tooltipElement, 'background-color', '#333');
      this.renderer.setStyle(this.tooltipElement, 'color', '#fff');
      this.renderer.setStyle(this.tooltipElement, 'padding', '8px');
      this.renderer.setStyle(this.tooltipElement, 'border-radius', '4px');
    }
  }

  private hideTooltip(): void {

    if (this.tooltipElement) {
      this.renderer.removeChild(this.renderer.parentNode(this.el.nativeElement), this.tooltipElement);
      this.tooltipElement = null;
    }
  }

}
