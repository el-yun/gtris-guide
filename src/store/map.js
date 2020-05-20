import axios from "axios";
const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const getMenuTree = function(map) {
  for (var i in map) {
    var parts = map[i].name.match(/[^\\.]+/);
    map[i].title = capitalize(parts[0]);
  }
  return map;
};

const extractData = function(response) {
  return response.data;
};
const PRIVATE_TOKEN = "vcjF_MMcziRs2jRnzsGH";

export default {
  namespaced: true,
  state: {
    componentMap: {},
    componentMenu: {},
    tags: []
  },
  getters: {
    //
    getComponentsMenu: state => {
      return state.componentMenu;
    },
    getVersion: state => {
      return state.tags;
    }
  },
  mutations: {
    SET_STATE_MAP: (state, payload) => {
      state.componentMap = payload;
    },
    SET_STATE_MENU: (state, payload) => {
      state.componentMenu = payload;
    },
    SET_STATE_TAGS: (state, payload) => {
      state.tags = payload;
    }
  },
  actions: {
    SET_TAG: async store => {
      const url = `https://gitlab.gabia.com/api/v4/projects/1193/repository/tags`;
      let response = await axios
        .get(url, {
          headers: {
            "Content-Type": "application/vnd.api+json",
            Accept: "application/vnd.api+json",
            "PRIVATE-TOKEN": PRIVATE_TOKEN
          }
        })
        .then(extractData);
      await store.commit("SET_STATE_TAGS", response);
    },
    SET_MAP: async store => {
      const url = `https://gitlab.gabia.com/api/v4/projects/1193/repository/tree?path=src/components`;
      let map = await axios
        .get(url, {
          headers: {
            "Content-Type": "application/vnd.api+json",
            Accept: "application/vnd.api+json",
            "PRIVATE-TOKEN": PRIVATE_TOKEN
          }
        })
        .then(extractData);
      await store.commit("SET_STATE_MAP", map);
      await store.commit("SET_STATE_MENU", getMenuTree(map));
    }
  }
};
