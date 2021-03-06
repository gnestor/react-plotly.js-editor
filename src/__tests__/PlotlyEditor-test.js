import PlotlyEditor from '../PlotlyEditor';
import React from 'react';
import {shallow} from '../lib/test-utils';

describe('<PlotlyEditor>', () => {
  it('does not update when numeric revision has not changed', () => {
    const wrapper = shallow(<PlotlyEditor revision={2} />);
    const editorRender = jest.spyOn(wrapper.instance(), 'render');

    expect(editorRender).not.toHaveBeenCalled();
    wrapper.setProps({revision: 2});
    expect(editorRender).not.toHaveBeenCalled();
  });

  it('does not update when string revision has not changed', () => {
    const wrapper = shallow(<PlotlyEditor revision={'thor'} />);
    const editorRender = jest.spyOn(wrapper.instance(), 'render');

    expect(editorRender).not.toHaveBeenCalled();
    wrapper.setProps({revision: 'thor'});
    expect(editorRender).not.toHaveBeenCalled();
  });

  it('updates when numeric revision is changed', () => {
    const wrapper = shallow(<PlotlyEditor revision={2} />);
    const editorRender = jest.spyOn(wrapper.instance(), 'render');

    expect(editorRender).not.toHaveBeenCalled();
    wrapper.setProps({revision: 3});
    expect(editorRender).toHaveBeenCalled();
  });

  it('updates when string revision is changed', () => {
    const wrapper = shallow(<PlotlyEditor revision={'thor'} />);
    const editorRender = jest.spyOn(wrapper.instance(), 'render');

    expect(editorRender).not.toHaveBeenCalled();
    wrapper.setProps({revision: 'roht'});
    expect(editorRender).toHaveBeenCalled();
  });

  it('updates when revision is not a number', () => {
    const wrapper = shallow(<PlotlyEditor />);
    const editorRender = jest.spyOn(wrapper.instance(), 'render');

    expect(editorRender).not.toHaveBeenCalled();
    wrapper.setProps({onUpdate: jest.fn()});
    expect(editorRender).toHaveBeenCalled();
  });
});
