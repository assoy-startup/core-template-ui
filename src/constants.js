const urls = {

  //Server Map Url
  // temp: {
  //   API_ROOT:
  //     "https://bhauraya.bhaurayaart.in/api/v1",
  //   SNIPPET_API_ROOT:
  //     "https://bhauraya.bhaurayaart.in/api/v1",
  //   WS_ROOT: "None",
  //   label: "temp",
  // },
  // dev: {
  //   API_ROOT:
  //     "https://bhauraya.bhaurayaart.in/api/v1",
  //   SNIPPET_API_ROOT:
  //     "https://bhauraya.bhaurayaart.in/api/v1",
  //   WS_ROOT: "None",
  //   label: "build",
  // },

  // Lcal Map Url
  temp: {
    API_ROOT:
      "http://localhost:8090/api/v1",
    SNIPPET_API_ROOT:
      "http://localhost:8090/api/v1",
    WS_ROOT: "None",
    label: "temp",
  },
  dev: {
    API_ROOT:
      "http://localhost:8090/api/v1",
    SNIPPET_API_ROOT:
      "http://localhost:8090/api/v1",
    WS_ROOT: "None",
    label: "build",
  },
  // Local With Ip Remote 
  // temp: {
  //   API_ROOT:
  //     "http://192.168.29.238:8090/api/v1",
  //   SNIPPET_API_ROOT:
  //     "http://192.168.29.238:8090/api/v1",
  //   WS_ROOT: "None",
  //   label: "temp",
  // },
  // dev: {
  //   API_ROOT:
  //     "http://192.168.29.238:8090/api/v1",
  //   SNIPPET_API_ROOT:
  //     "http://192.168.29.238:8090/api/v1",
  //   WS_ROOT: "None",
  //   label: "build",
  // },
};

export default urls[`${process.env.NODE_ENV}`];
