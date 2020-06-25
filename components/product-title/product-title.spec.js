import ProductTitle from './index';
import { shallowMount } from '@vue/test-utils';

describe("Product Title", () => {

  it("renders text passed as prop to h1 tag", () => {
    const text = "The thing you've always wanted to buy.";
    const wrapper = shallowMount(ProductTitle, {
      propsData: {
        text
      }
    });

    expect(wrapper.find("h1").text()).toBe(text);

  });
});
