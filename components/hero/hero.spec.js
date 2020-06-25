import { shallowMount } from '@vue/test-utils';
import Hero from './index';

let propsData;

beforeEach(() => {
  const title  = "Music Matters";
  const subtitle  = "Live Online Tribute";
  const description = "In honour of Stevie Wonder’s 70th birthday, Bang & " +
    "Olufsen is presenting an online tribute concert with Benjamin Koppel" +
    " & Friends. The show is transmitted live from the Audo on Wednesday, " +
    "May 13 at 8 PM."

  propsData = {title, subtitle, description};

});

describe("Hero", () => {
  it("display title in element with .title class", () => {

    const wrapper = shallowMount(Hero, {
      propsData
    });

    const titleElement = wrapper.find(".title");

    expect(titleElement.text()).toBe(propsData.title);
  });

  it("display sub title in element with .subtitle class", () => {

    const wrapper = shallowMount(Hero, {
      propsData
    });

    const titleElement = wrapper.find(".subtitle");

    expect(titleElement.text()).toBe(propsData.subtitle);
  });

  it("display description in element with .description class", () => {

    const wrapper = shallowMount(Hero, {
      propsData
    });

    const titleElement = wrapper.find(".description");

    expect(titleElement.text()).toBe(propsData.description);
  });

});
