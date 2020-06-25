import { shallowMount } from '@vue/test-utils';
import NavBar from './index';

describe("NavBar", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(NavBar);
    expect(wrapper).toMatchSnapshot();
  });
});
