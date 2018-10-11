import { Component, State, Prop } from '@stencil/core';

@Component({
  tag: 'text-watch',
  styleUrl: 'text-watch.sass'
})
export class textWatch {

  @Prop() houroffset: string;
  @State() minute: number = 0;
  @State() hour: number = 0;

  timer;

  componentWillLoad() {
    this.getTime();

    this.timer = setInterval(() => {
      this.getTime();
    }, 1000 * 5);
  }

  componentDidUnload() {
    clearInterval(this.timer);
  }

  getTime() {
    const now = new Date();
    this.hour = now.getHours();

    if(this.houroffset) {
      this.hour = this.hour + parseInt(this.houroffset);
    }

    this.minute = this.round5(now.getMinutes());
    if(this.minute > 30 && this.minute <= 60) {
      this.hour = this.hour + 1;
    }
  }

  round5(x: number): number {
    return Math.round(x / 5) * 5;
  }

  hostData() {
    return {
      class: {
        'text-watch': true
      }
    };
  }

  render() {
    return ([
      <clock-digit digit="It is" active={true}></clock-digit>,
      <clock-digit digit="five" active={this.minute === 5 || this.minute === 55}></clock-digit>,
      <clock-digit digit="ten" active={this.minute === 10 || this.minute === 50}></clock-digit>,
      <clock-digit digit="a quarter" active={this.minute === 15 || this.minute === 45}></clock-digit>,
      <clock-digit digit="twenty" active={this.minute === 20 || this.minute === 40}></clock-digit>,
      <clock-digit digit="twenty five" active={this.minute === 25 || this.minute === 35}></clock-digit>,
      <clock-digit digit="half" active={this.minute === 30}></clock-digit>,
      <clock-digit digit="past" active={this.minute <= 30 && this.minute > 0}></clock-digit>,
      <clock-digit digit="to" active={this.minute > 30 && this.minute < 60}></clock-digit>,
      <clock-digit digit="one" active={this.hour === 1 || this.hour === 13}></clock-digit>,
      <clock-digit digit="two" active={this.hour === 2 || this.hour === 14}></clock-digit>,
      <clock-digit digit="three" active={this.hour === 3 || this.hour === 15}></clock-digit>,
      <clock-digit digit="four" active={this.hour === 4 || this.hour === 16}></clock-digit>,
      <clock-digit digit="five" active={this.hour === 5 || this.hour === 17}></clock-digit>,
      <clock-digit digit="six" active={this.hour === 6 || this.hour === 18}></clock-digit>,
      <clock-digit digit="seven" active={this.hour === 7 || this.hour === 19}></clock-digit>,
      <clock-digit digit="eight" active={this.hour === 8 || this.hour === 20}></clock-digit>,
      <clock-digit digit="nine" active={this.hour === 9 || this.hour === 21}></clock-digit>,
      <clock-digit digit="ten" active={this.hour === 10 || this.hour === 22}></clock-digit>,
      <clock-digit digit="eleven" active={this.hour === 11 || this.hour === 23}></clock-digit>,
      <clock-digit digit="twelve" active={this.hour === 12 || this.hour === 24}></clock-digit>,
      <clock-digit digit="o'clock" active={this.minute === 0 || this.minute === 60}></clock-digit>
    ]);
  }
}