import * as React from 'react';

export interface IButtonProps {
  text: string;
  type: string;
}

export default class Button extends React.Component<IButtonProps, any> {
  public render() {
    const { text, type } = this.props;
    return (
      <button 
        className="waves-effect waves-light btn"
        type={type}
      >
        {text}
      </button>
    );
  }
}
