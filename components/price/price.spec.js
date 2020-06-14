import { shallowMount} from '@vue/test-utils'
import Price from "./index";
import price from '~/components/price/price'

function createConfig (overrides) {

  const price = 100;

  const mocks = {};

  const propsData = { price };

  return Object.assign({ mocks, propsData }, overrides);

}

describe("Price ", () => {
  it("displays amount correct to 2 decimal places", () => {

    const config = createConfig();

    const wrapper = shallowMount(Price, config);
    const priceText = wrapper.find(".amount");

    expect(priceText.text()).toBe("100.00");
  });
});
