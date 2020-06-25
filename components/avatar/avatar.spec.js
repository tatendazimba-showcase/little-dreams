import { shallowMount } from '@vue/test-utils';
import Avatar from './index';

describe("Avatar", () => {

  let propsData;

  beforeEach(() => {
    const user = {
      username: "tatenda",
      avatarUrl: "/assets/placeholder.png",
    }

    propsData = {user};

  });

  it("render avatar image is user has one", () => {

    const wrapper = shallowMount(Avatar, {propsData});
    const avatarDiv = wrapper.find(".avatar");

    expect(avatarDiv.find("img").exists()).toBe(true);

  });

  it("render 1st letter of username", () => {

    propsData.user.avatarUrl = null;

    const wrapper = shallowMount(Avatar, {propsData});
    const avatarText = wrapper.find(".avatar-text");

    expect(avatarText.text().toUpperCase()).toBe(propsData.user.username[0].toUpperCase());

  });
});
