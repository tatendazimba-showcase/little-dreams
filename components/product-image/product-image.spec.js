import { shallowMount } from '@vue/test-utils';
import ProductImage from './index';

describe("Product Image", () => {

  let propsData;
  const testImageUrl = "~/assets/logo.png";

  beforeEach(() => {

    const image_url = testImageUrl;
    const title = "Thank you";
    const description = "Thank you for providing a good minimal reproduction.";

    propsData = {
      image_url,
      title,
      description
    };

  });

  it("has img tag inside .img-container", () => {

    const wrapper = shallowMount(ProductImage, {propsData});

    const imageContainer = wrapper.find(".img-container");

    expect(imageContainer.find("img").exists()).toBe(true);

  });

  it("uses placeholder image if no image is provided " +
    "as prop", () => {

    propsData.image_url = null;

    const wrapper = shallowMount(ProductImage, {propsData});
    const imageContainer = wrapper.find(".img-container");
    const image = imageContainer.find("img");

    expect(image.attributes().src).toBe("~/assets/placeholder.png");

  });

  it("img tag has src", () => {

    const wrapper = shallowMount(ProductImage, {propsData});
    const imageContainer = wrapper.find(".product-image");
    const image = imageContainer.find("img");

    expect(image.attributes().src).toBe(testImageUrl);
  });

  it("img tag has alt made up in format 'product_name + product_description'", () => {

    const wrapper = shallowMount(ProductImage, {propsData});
    const imageContainer = wrapper.find(".img-container");
    const image = imageContainer.find("img");

    expect(image.attributes().alt).toBe(propsData.title + " " + propsData.description);

  });

});

function createConfig (overrides) {

  const price = 100;

  const mocks = {};

  const propsData = { price };

  return Object.assign({ mocks, propsData }, overrides);

}
