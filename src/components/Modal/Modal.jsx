import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={css.Overlay} onClick={this.props.onClose}>
        <div className={css.Modal}>
          <img src={this.props.imageUrl} alt="photos" />
        </div>
      </div>
    );
  }
}
