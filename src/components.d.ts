/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface ClockDigit {
    'active': boolean;
    'digit': string;
  }
  interface ClockDigitAttributes extends StencilHTMLAttributes {
    'active'?: boolean;
    'digit'?: string;
  }

  interface TextWatch {
    'houroffset': string;
  }
  interface TextWatchAttributes extends StencilHTMLAttributes {
    'houroffset'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'ClockDigit': Components.ClockDigit;
    'TextWatch': Components.TextWatch;
  }

  interface StencilIntrinsicElements {
    'clock-digit': Components.ClockDigitAttributes;
    'text-watch': Components.TextWatchAttributes;
  }


  interface HTMLClockDigitElement extends Components.ClockDigit, HTMLStencilElement {}
  var HTMLClockDigitElement: {
    prototype: HTMLClockDigitElement;
    new (): HTMLClockDigitElement;
  };

  interface HTMLTextWatchElement extends Components.TextWatch, HTMLStencilElement {}
  var HTMLTextWatchElement: {
    prototype: HTMLTextWatchElement;
    new (): HTMLTextWatchElement;
  };

  interface HTMLElementTagNameMap {
    'clock-digit': HTMLClockDigitElement
    'text-watch': HTMLTextWatchElement
  }

  interface ElementTagNameMap {
    'clock-digit': HTMLClockDigitElement;
    'text-watch': HTMLTextWatchElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
