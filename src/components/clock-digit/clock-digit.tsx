import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'clock-digit',
  styleUrl: 'clock-digit.sass'
})
export class wordClock {

  @Prop() digit: string;
  @Prop() active: boolean = false;

  componentWillLoad() {
  }

  hostData() {
    return {
      class: {
        'clock-digit': true,
        'clock-digit--active': this.active
      }
    };
  }

  render() {
    return this.digit;
  }
}