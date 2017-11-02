import React, {Component, Children, isValidElement} from 'react';
import PropTypes from 'prop-types';
import {bem} from '../lib';

class TracePanel extends Component {
  constructor(props) {
    super(props);
    this.deleteTrace = this.deleteTrace.bind(this);
  }

  getChildContext() {
    const fullData = this.context.fullData || [];
    let fullTraceIndex;

    for (let i = 0; i < fullData.length; i++) {
      if (this.props.index === fullData[i].index) {
        fullTraceIndex = i;
        break;
      }
    }
    return {
      traceIndex: this.props.index,
      fullTraceIndex: fullTraceIndex,
    };
  }

  deleteTrace() {
    this.props.onUpdate &&
      this.props.onUpdate(null, [this.props.index], 'deleteTraces');
  }

  render() {
    return (
      <div>
        <div className={bem('trace-panel', 'top', ['active'])}>
          Trace {this.props.index}
          <a
            className={bem('trace-panel', 'delete')}
            href="#"
            onClick={this.deleteTrace}
          >
            ×
          </a>
        </div>
        <div className={bem('trace-panel', 'panel')}>{this.props.children}</div>
      </div>
    );
  }
}

TracePanel.contextTypes = {
  fullData: PropTypes.array,
};

TracePanel.childContextTypes = {
  fullTraceIndex: PropTypes.number,
  traceIndex: PropTypes.number,
};

class TraceAccordion extends Component {
  constructor(props, context) {
    super(props);
    this.data = context.data || [];
    this.renderPanel = this.renderPanel.bind(this);
    this.addTrace = this.addTrace.bind(this);

    this.onUpdate = context.onUpdate;
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    this.data = (nextContext && nextContext.data) || [];
  }

  renderPanel(d, i) {
    return (
      <TracePanel key={i} index={i} onUpdate={this.onUpdate}>
        {this.props.children}
      </TracePanel>
    );
  }

  addTrace() {
    this.onUpdate && this.onUpdate(null, [], 'addTrace');
  }

  render() {
    return (
      <div className="tracePanel">
        {this.props.canAdd && (
          <a href="#" onClick={this.addTrace}>
            Add
          </a>
        )}
        {this.data.map(this.renderPanel)}
      </div>
    );
  }
}

TraceAccordion.contextTypes = {
  data: PropTypes.array,
  onUpdate: PropTypes.func,
};

export default TraceAccordion;