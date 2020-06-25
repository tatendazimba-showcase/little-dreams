import { shallowMount } from '@vue/test-utils';
import Description from './index.vue';

describe("Description", () => {

  function createConfig (overrides) {

    const text = "Many suggests that it is better to simply write.";

    const propsData = { text };

    return Object.assign({ propsData }, overrides);

  }

  it("text is rendered in element with class description", () => {
    const wrapper = shallowMount(Description, createConfig());

    expect(wrapper.find(".description").text())
      .toBe("Many suggests that it is better to simply write.");
  });
});
