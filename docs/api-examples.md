---
outline: deep
---

# API Examples

This page demonstrates usage of the APIs.
 
## Export JSON Button

::: tip
**_extend_**: Extend `json`<br />
**_text_**: Rename the text as desired `JSON`<br />
**_filename_**: Rename the filename as desired `json-filename`
:::

```js{10-14}
<script type="text/javascript" src="../src/button-json.js"></script>
<script type="text/javascript">
    $('#example').DataTable( {
        dom: "Bflrtip",
        responsive: true,
        select: true,
        colReorder: true,
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'json',
                text: 'JSON',
                filename: "json-filename",
            },
        ],
        columns: [
            { title: 'Name' },
            { title: 'Position' },
            { title: 'Office' },
            { title: 'Age' },
            { title: 'Start Date' },
            { title: 'Salary' },
            { title: 'URL' },
          ],
    });
</script>
```

## Render URL

::: tip
**_urlRenderObj_**: Function will change the display of data as `HTML a tag` for URL to open in new tab
:::

```js{23}
<script type="module">
    import { urlRenderObj } from '../src/url-render.js'
	$('#example').DataTable( {
        dom: "Bflrtip",
        responsive: true,
        select: true,
        colReorder: true,
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'json',
                text: 'JSON',
                filename: "json-filename",
            },
        ],
        columns: [
            { title: 'Name' },
            { title: 'Position' },
            { title: 'Office' },
            { title: 'Age' },
            { title: 'Start Date' },
            { title: 'Salary' },
            { title: 'URL', ...urlRenderObj("URL") },
          ],
    });
</script>
```
