import Logo from './index.vue';
import { shallowMount } from '@vue/test-utils'

function createConfig (overrides) {

  const mocks = {
    $router: {
      push: () => {}
    },
  };

  return Object.assign({ mocks }, overrides);

}

describe('Logo', () => {
  it('has img within element with class brand-logo',  () => {
    const wrapper = shallowMount(Logo, createConfig());

    const brandLogo = wrapper.find(".brand-logo");
    expect(brandLogo.find("img").exists()).toBe(true);
  });

})
