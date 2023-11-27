let fallbackTimeout = 30
if(typeof document != 'undefined') {
    const t = setInterval(function () {
        if(typeof $ != 'undefined' || fallbackTimeout < 1) {
            registerExtend();
            clearInterval(t)
        }
        fallbackTimeout--
    }, 300)
}

function registerExtend() {
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
}