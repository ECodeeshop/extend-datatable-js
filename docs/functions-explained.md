# Explained Functions

Markdown of features used.

## Export JSON Button

**Input**

````md
```js{4}
$.fn.dataTable.ext.buttons.json = {
    className: 'buttons-json',
    exportOptions: {
        modifier: {
            selected: null
        }
    },
    action: function ( e, dt, node, config ) {
        let visibleColumns = dt.columns().visible();
        // Extract headers
        let headers = dt.columns().header();
        let visibleHeadersIndexes = [];
        for (let i = 0; i < headers.length; i++) {
            if (visibleColumns[i]) {
              visibleHeadersIndexes.push(i)
            }
        }

        // Extract Selected Rows
        let rows = dt.rows({ selected: true }).data().toArray();
        // if no rows selected than export all
        if(!rows.length) {
            rows = dt.rows({ selected: false }).data().toArray()
        }

        const new_body_data = []

        for (let i = 0; i < rows.length; i++) {
            const temp_single_data = {}
            const body = rows[i]
            for (let j = 0; j < visibleHeadersIndexes.length; j++) {
                const value_index = visibleHeadersIndexes[j]
                temp_single_data[headers[value_index].textContent] = body[value_index]
            }

            new_body_data.push(temp_single_data)
        }

        $.fn.dataTable.fileSave(new Blob([JSON.stringify(new_body_data)]), (config.filename ? config.filename : config.text) + '.json');
    }
};
```
````

**Output**

```html
<div class="dt-buttons"><button class="dt-button buttons-json" tabindex="0" aria-controls="example" type="button"><span>JSON</span></button> </div>
```

## Render URL

**Input**

````md
```js{4}
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

urlRenderObj('CUSTOM URL TEXT')
```
````

**Output**

```js{3-16}
<a class="text-danger" target="_blank" href="YOUR_COLUMN_URL_HERE">CUSTOM URL TEXT</a>
```
::: tip
Provide the full URL E.g- https://codeeshop.com
:::