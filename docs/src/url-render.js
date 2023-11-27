const urlRenderObj = function (buttonText) {
    return {
      searchable: false,
      render: function (data, type, row) {
        if (type == "display" && data.trim()) {
          const splitsURLS = data.split(",");
          const arr = [];
          for (var i = 0; i < splitsURLS.length; i++) {
            arr.push(
              `<a class="text-danger" target="_blank" href="${splitsURLS[i]}">${buttonText}</a>`,
            );
          }
          return arr.join("\n");
        } else {
          return data;
        }
      },
    };
};

export { urlRenderObj }
