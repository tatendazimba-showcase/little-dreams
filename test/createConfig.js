export const createConfig = (overrides) => {

  const id = 1;
  const mocks = {
    // Vue Auth
    $auth: {
      check: () => false
    },
    // Vue Router
    $router: {
      push: () => {}
    },
    // Vuex
    $store: {
      state: [ { id } ],
      commit: () => {}
    }
  };

  const propsData = { id };

  return Object.assign({ mocks, propsData }, overrides);

};
